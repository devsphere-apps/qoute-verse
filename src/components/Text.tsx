import { ReactNode, forwardRef, ForwardedRef } from "react"
// eslint-disable-next-line no-restricted-imports
import {
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
  useWindowDimensions,
} from "react-native"
import { TOptions } from "i18next"
import { useTranslation } from "react-i18next"

import { isRTL, TxKeyPath } from "@/i18n"
import { useAppTheme } from "@/theme/context"
import type { Theme } from "@/theme/types"
import { typography } from "@/theme/typography"

type TextVariantKey = keyof Theme["textVariants"]
// ColorKey excludes 'palette' as we should use semantic colors
type ColorKey = Exclude<keyof Theme["colors"], "palette">
type Breakpoint = "smallPhone" | "phone" | "tablet"
type Weights = keyof typeof typography.primary

// Responsive value type
type ResponsiveValue<T> = T | { [K in Breakpoint]?: T }

// Legacy presets for backward compatibility
type LegacyPresets = "default" | "bold" | "formLabel" | "formHelper"

export interface TextProps extends RNTextProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath
  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  txOptions?: TOptions
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>
  /**
   * Text variant from theme (heading, subheading, body, caption).
   * This is the preferred way to style text following the Shopify pattern.
   */
  variant?: ResponsiveValue<TextVariantKey>
  /**
   * Legacy preset for backward compatibility.
   * @deprecated Use `variant` prop instead. Will be removed in future versions.
   */
  preset?: LegacyPresets | "heading" | "subheading"
  /**
   * Text color from theme.
   */
  color?: ResponsiveValue<ColorKey>
  /**
   * Text weight modifier (for custom styling).
   */
  weight?: Weights
  /**
   * Text size modifier (legacy prop for backward compatibility).
   * @deprecated Use `variant` prop instead. Will be removed in future versions.
   */
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  /**
   * Children components.
   */
  children?: ReactNode
}

/**
 * Text component - A drop-in replacement for React Native's Text component.
 * This component uses theme variants and supports responsive styling,
 * following the Shopify Restyle pattern.
 *
 * @example
 * <Text variant="heading" color="text">Hello World</Text>
 *
 * @example
 * <Text
 *   variant={{ smallPhone: "body", phone: "subheading", tablet: "heading" }}
 *   color="primary"
 * >
 *   Responsive Text
 * </Text>
 */
export const Text = forwardRef(function Text(props: TextProps, ref: ForwardedRef<RNText>) {
  const { theme } = useAppTheme()
  const { t, i18n } = useTranslation()
  const { width } = useWindowDimensions()
  const {
    variant,
    preset,
    color,
    weight,
    size,
    tx,
    txOptions,
    text,
    children,
    style: $styleOverride,
    ...rest
  } = props

  // Determine current breakpoint
  const getBreakpoint = (): Breakpoint => {
    if (width < theme.breakpoints.smallPhone) return "smallPhone"
    if (width < theme.breakpoints.phone) return "phone"
    return "tablet"
  }

  const currentBreakpoint = getBreakpoint()

  // Helper to resolve responsive values
  const resolveValue = <T,>(value: ResponsiveValue<T> | undefined): T | undefined => {
    if (!value) return undefined
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      // Type guard: check if it's a responsive object
      const responsiveObj = value as { [K in Breakpoint]?: T }
      // Try current breakpoint, then fallback to smaller breakpoints
      const breakpointOrder: Breakpoint[] = ["tablet", "phone", "smallPhone"]
      const currentIndex = breakpointOrder.indexOf(currentBreakpoint)

      for (let i = currentIndex; i >= 0; i--) {
        const bp = breakpointOrder[i]
        if (responsiveObj[bp] !== undefined) {
          return responsiveObj[bp]
        }
      }
      return undefined
    }
    return value as T
  }

  const i18nText = tx ? (i18n.isInitialized ? t(tx as string, txOptions) : (tx as string)) : undefined
  const content = i18nText || text || children

  // Resolve variant (prefer variant over preset)
  let resolvedVariant: TextVariantKey | undefined = resolveValue(variant)

  // Legacy preset support for backward compatibility
  if (!resolvedVariant && preset) {
    if (preset === "heading") resolvedVariant = "heading"
    else if (preset === "subheading") resolvedVariant = "subheading"
    else if (preset === "default" || preset === "bold" || preset === "formLabel") resolvedVariant = "body"
    else if (preset === "formHelper") resolvedVariant = "caption"
  }

  // Default to body if no variant specified
  if (!resolvedVariant) resolvedVariant = "body"

  // Legacy size prop support (maps to variants)
  const legacySizeMap: Record<string, TextVariantKey> = {
    xxs: "caption",
    xs: "caption",
    sm: "body",
    md: "body",
    lg: "subheading",
    xl: "subheading",
    xxl: "heading",
  }
  if (size && !variant && !preset) {
    resolvedVariant = legacySizeMap[size] || "body"
  }

  // Get variant styles from theme (after all variant resolution is complete)
  const variantStyles = theme.textVariants[resolvedVariant]

  // Resolve color
  const resolvedColor = resolveValue(color)
  const colorValue = resolvedColor ? (theme.colors[resolvedColor] as string | undefined) : undefined

  // Build style
  const computedStyle: TextStyle = {
    ...variantStyles,
    ...(colorValue && { color: colorValue }),
    ...(weight && { fontFamily: typography.primary[weight] }),
  }

  const $styles: StyleProp<TextStyle> = [$rtlStyle, computedStyle, $styleOverride]

  return (
    <RNText {...rest} style={$styles} ref={ref}>
      {content}
    </RNText>
  )
})

const $rtlStyle: TextStyle = isRTL ? { writingDirection: "rtl" } : {}
