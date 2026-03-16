import { ReactNode, forwardRef, ForwardedRef } from "react"
import {
  View,
  ViewProps as RNViewProps,
  ViewStyle,
  StyleProp,
  useWindowDimensions,
  DimensionValue,
} from "react-native"

import { useAppTheme } from "@/theme/context"
import type { Theme } from "@/theme/types"

// Type definitions
type SpacingKey = keyof Theme["spacing"]
type ColorKey = Exclude<keyof Theme["colors"], "palette">
type Breakpoint = "smallPhone" | "phone" | "tablet"

// Responsive value type - can be a single value or breakpoint-specific values
type ResponsiveValue<T> = T | { [K in Breakpoint]?: T }

// Layout prop types
type FlexValue = number
type FlexDirectionValue = "row" | "column" | "row-reverse" | "column-reverse"
type JustifyContentValue =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
type AlignItemsValue = "flex-start" | "flex-end" | "center" | "stretch" | "baseline"
type AlignSelfValue = "auto" | AlignItemsValue
type AlignContentValue =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around"
type OverflowValue = "visible" | "hidden" | "scroll"
type PositionValue = "absolute" | "relative"
type BorderStyleValue = "solid" | "dashed" | "dotted"
type BorderCurveValue = "circular" | "continuous"

// Size prop types (can be number or spacing key for borderRadius)
type SizeValue = DimensionValue
type BorderRadiusValue = number | SpacingKey

/**
 * Box component - A fully featured layout primitive that accepts theme-based props.
 * This component allows you to style using theme values directly through props,
 * following the Shopify Restyle pattern.
 *
 * @example
 * <Box margin="m" padding="l" backgroundColor="background">
 *   <Text>Hello</Text>
 * </Box>
 *
 * @example
 * <Box flex={1} flexDirection="row" justifyContent="space-between">
 *   <Text>Left</Text>
 *   <Text>Right</Text>
 * </Box>
 *
 * @example
 * <Box
 *   margin={{ smallPhone: "xs", phone: "m", tablet: "xl" }}
 *   padding="l"
 *   backgroundColor="tint"
 *   borderRadius="m"
 * >
 *   <Text>Responsive Box</Text>
 * </Box>
 *
 * @example
 * <Box
 *   position="absolute"
 *   top={0}
 *   left={0}
 *   right={0}
 *   elevation={4}
 *   opacity={0.9}
 *   zIndex={10}
 * >
 *   <Text>Positioned Box with Shadow</Text>
 * </Box>
 *
 * @example
 * <Box
 *   position="absolute"
 *   top={10}
 *   left={{ smallPhone: 4, phone: 10 }}
 *   borderStyle="dashed"
 *   overflow="hidden"
 *   shadowColor="text"
 *   shadowOpacity={0.2}
 *   shadowRadius={6}
 *   shadowOffset={{ width: 0, height: 2 }}
 * >
 *   <Text>Full Featured Box</Text>
 * </Box>
 *
 * @example
 * <Box
 *   borderRadius="l"
 *   borderCurve="continuous"
 *   backgroundColor="tint"
 *   padding="m"
 * >
 *   <Text>Smooth iOS border radius</Text>
 * </Box>
 */
export interface BoxProps extends Omit<RNViewProps, "style"> {
  children?: ReactNode

  // ==================== SPACING ====================
  /** Margin using theme spacing values */
  margin?: ResponsiveValue<SpacingKey>
  marginTop?: ResponsiveValue<SpacingKey>
  marginBottom?: ResponsiveValue<SpacingKey>
  marginLeft?: ResponsiveValue<SpacingKey>
  marginRight?: ResponsiveValue<SpacingKey>
  marginHorizontal?: ResponsiveValue<SpacingKey>
  marginVertical?: ResponsiveValue<SpacingKey>
  /** Padding using theme spacing values */
  padding?: ResponsiveValue<SpacingKey>
  paddingTop?: ResponsiveValue<SpacingKey>
  paddingBottom?: ResponsiveValue<SpacingKey>
  paddingLeft?: ResponsiveValue<SpacingKey>
  paddingRight?: ResponsiveValue<SpacingKey>
  paddingHorizontal?: ResponsiveValue<SpacingKey>
  paddingVertical?: ResponsiveValue<SpacingKey>

  // ==================== FLEXBOX ====================
  /** Flex value (number) */
  flex?: ResponsiveValue<FlexValue>
  flexGrow?: ResponsiveValue<FlexValue>
  flexShrink?: ResponsiveValue<FlexValue>
  flexBasis?: ResponsiveValue<number | string>
  flexDirection?: ResponsiveValue<FlexDirectionValue>
  flexWrap?: ResponsiveValue<"wrap" | "nowrap" | "wrap-reverse">
  justifyContent?: ResponsiveValue<JustifyContentValue>
  alignItems?: ResponsiveValue<AlignItemsValue>
  alignSelf?: ResponsiveValue<AlignSelfValue>
  alignContent?: ResponsiveValue<AlignContentValue>
  /** Gap between flex items using theme spacing values */
  gap?: ResponsiveValue<SpacingKey>
  rowGap?: ResponsiveValue<SpacingKey>
  columnGap?: ResponsiveValue<SpacingKey>

  // ==================== SIZE ====================
  width?: ResponsiveValue<SizeValue>
  height?: ResponsiveValue<SizeValue>
  minWidth?: ResponsiveValue<SizeValue>
  minHeight?: ResponsiveValue<SizeValue>
  maxWidth?: ResponsiveValue<SizeValue>
  maxHeight?: ResponsiveValue<SizeValue>

  // ==================== BORDER ====================
  /** Border radius using theme spacing values or number */
  borderRadius?: ResponsiveValue<BorderRadiusValue>
  borderTopLeftRadius?: ResponsiveValue<BorderRadiusValue>
  borderTopRightRadius?: ResponsiveValue<BorderRadiusValue>
  borderBottomLeftRadius?: ResponsiveValue<BorderRadiusValue>
  borderBottomRightRadius?: ResponsiveValue<BorderRadiusValue>
  borderWidth?: ResponsiveValue<number>
  /** Border color using theme color keys */
  borderColor?: ResponsiveValue<ColorKey>
  /** Border style */
  borderStyle?: ResponsiveValue<BorderStyleValue>
  /** Border curve - iOS only: "circular" or "continuous" for smoother border radius rendering */
  borderCurve?: ResponsiveValue<BorderCurveValue>
  overflow?: ResponsiveValue<OverflowValue>

  // ==================== COLOR ====================
  /** Background color using theme color keys */
  backgroundColor?: ResponsiveValue<ColorKey>

  // ==================== POSITION ====================
  /** Position type */
  position?: ResponsiveValue<PositionValue>
  /** Position values */
  top?: ResponsiveValue<DimensionValue>
  left?: ResponsiveValue<DimensionValue>
  right?: ResponsiveValue<DimensionValue>
  bottom?: ResponsiveValue<DimensionValue>

  // ==================== VISUAL EFFECTS ====================
  /** Elevation (shadow) - Android only, iOS uses shadow props */
  elevation?: ResponsiveValue<number>
  /** Opacity value (0 to 1) */
  opacity?: ResponsiveValue<number>
  /** Z-index for layering */
  zIndex?: ResponsiveValue<number>
  /** Shadow color - iOS shadow support */
  shadowColor?: ResponsiveValue<string | ColorKey>
  /** Shadow opacity - iOS shadow support (0 to 1) */
  shadowOpacity?: ResponsiveValue<number>
  /** Shadow radius - iOS shadow support */
  shadowRadius?: ResponsiveValue<number>
  /** Shadow offset - iOS shadow support */
  shadowOffset?: ResponsiveValue<{ width: number; height: number }>

  // ==================== STYLE OVERRIDE ====================
  /** Allow style override for edge cases */
  style?: StyleProp<ViewStyle>
}

export const Box = forwardRef<View, BoxProps>(function Box(props, ref: ForwardedRef<View>) {
  const { theme } = useAppTheme()
  const { width } = useWindowDimensions()

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

  // Helper to get spacing value
  const getSpacing = (key: SpacingKey | undefined): number | undefined => {
    if (!key) return undefined
    return theme.spacing[key]
  }

  // Helper to get color value
  const getColor = (key: ColorKey | undefined): string | undefined => {
    if (!key) return undefined
    return theme.colors[key] as string | undefined
  }

  // Helper to get border radius value (can be spacing key or number)
  const getBorderRadius = (value: BorderRadiusValue | undefined): number | undefined => {
    if (value === undefined) return undefined
    if (typeof value === "number") return value
    // It's a spacing key
    return getSpacing(value as SpacingKey)
  }

  const {
    // Spacing
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingHorizontal,
    paddingVertical,
    // Flexbox
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignSelf,
    alignContent,
    gap,
    rowGap,
    columnGap,
    // Size
    width: widthProp,
    height: heightProp,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    // Border
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderWidth,
    borderColor,
    borderStyle,
    borderCurve,
    overflow,
    // Color
    backgroundColor,
    // Position
    position,
    top,
    left,
    right,
    bottom,
    // Visual Effects
    elevation,
    opacity,
    zIndex,
    shadowColor,
    shadowOpacity,
    shadowRadius,
    shadowOffset,
    // Style override
    style,
    ...rest
  } = props

  // Build style object from props
  const computedStyle: ViewStyle = {}

  // ==================== SPACING ====================
  // Margin
  if (margin) {
    const spacingValue = getSpacing(resolveValue(margin) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.margin = spacingValue
  }
  if (marginTop) {
    const spacingValue = getSpacing(resolveValue(marginTop) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.marginTop = spacingValue
  }
  if (marginBottom) {
    const spacingValue = getSpacing(resolveValue(marginBottom) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.marginBottom = spacingValue
  }
  if (marginLeft) {
    const spacingValue = getSpacing(resolveValue(marginLeft) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.marginLeft = spacingValue
  }
  if (marginRight) {
    const spacingValue = getSpacing(resolveValue(marginRight) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.marginRight = spacingValue
  }
  if (marginHorizontal) {
    const spacingValue = getSpacing(resolveValue(marginHorizontal) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.marginHorizontal = spacingValue
  }
  if (marginVertical) {
    const spacingValue = getSpacing(resolveValue(marginVertical) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.marginVertical = spacingValue
  }

  // Padding
  if (padding) {
    const spacingValue = getSpacing(resolveValue(padding) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.padding = spacingValue
  }
  if (paddingTop) {
    const spacingValue = getSpacing(resolveValue(paddingTop) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.paddingTop = spacingValue
  }
  if (paddingBottom) {
    const spacingValue = getSpacing(resolveValue(paddingBottom) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.paddingBottom = spacingValue
  }
  if (paddingLeft) {
    const spacingValue = getSpacing(resolveValue(paddingLeft) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.paddingLeft = spacingValue
  }
  if (paddingRight) {
    const spacingValue = getSpacing(resolveValue(paddingRight) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.paddingRight = spacingValue
  }
  if (paddingHorizontal) {
    const spacingValue = getSpacing(resolveValue(paddingHorizontal) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.paddingHorizontal = spacingValue
  }
  if (paddingVertical) {
    const spacingValue = getSpacing(resolveValue(paddingVertical) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.paddingVertical = spacingValue
  }

  // ==================== FLEXBOX ====================
  if (flex !== undefined) {
    const flexValue = resolveValue(flex)
    if (flexValue !== undefined) computedStyle.flex = flexValue
  }
  if (flexGrow !== undefined) {
    const flexValue = resolveValue(flexGrow)
    if (flexValue !== undefined) computedStyle.flexGrow = flexValue
  }
  if (flexShrink !== undefined) {
    const flexValue = resolveValue(flexShrink)
    if (flexValue !== undefined) computedStyle.flexShrink = flexValue
  }
  if (flexBasis !== undefined) {
    const flexValue = resolveValue(flexBasis)
    if (flexValue !== undefined) computedStyle.flexBasis = flexValue as DimensionValue
  }
  if (flexDirection) {
    const direction = resolveValue(flexDirection)
    if (direction !== undefined) computedStyle.flexDirection = direction
  }
  if (flexWrap) {
    const wrap = resolveValue(flexWrap)
    if (wrap !== undefined) computedStyle.flexWrap = wrap
  }
  if (justifyContent) {
    const justify = resolveValue(justifyContent)
    if (justify !== undefined) computedStyle.justifyContent = justify
  }
  if (alignItems) {
    const align = resolveValue(alignItems)
    if (align !== undefined) computedStyle.alignItems = align
  }
  if (alignSelf) {
    const align = resolveValue(alignSelf)
    if (align !== undefined) computedStyle.alignSelf = align
  }
  if (alignContent) {
    const align = resolveValue(alignContent)
    if (align !== undefined) computedStyle.alignContent = align
  }
  if (gap) {
    const spacingValue = getSpacing(resolveValue(gap) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.gap = spacingValue
  }
  if (rowGap) {
    const spacingValue = getSpacing(resolveValue(rowGap) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.rowGap = spacingValue
  }
  if (columnGap) {
    const spacingValue = getSpacing(resolveValue(columnGap) as SpacingKey)
    if (spacingValue !== undefined) computedStyle.columnGap = spacingValue
  }

  // ==================== SIZE ====================
  if (widthProp !== undefined) {
    const widthValue = resolveValue(widthProp)
    if (widthValue !== undefined) computedStyle.width = widthValue
  }
  if (heightProp !== undefined) {
    const heightValue = resolveValue(heightProp)
    if (heightValue !== undefined) computedStyle.height = heightValue
  }
  if (minWidth !== undefined) {
    const minWidthValue = resolveValue(minWidth)
    if (minWidthValue !== undefined) computedStyle.minWidth = minWidthValue
  }
  if (minHeight !== undefined) {
    const minHeightValue = resolveValue(minHeight)
    if (minHeightValue !== undefined) computedStyle.minHeight = minHeightValue
  }
  if (maxWidth !== undefined) {
    const maxWidthValue = resolveValue(maxWidth)
    if (maxWidthValue !== undefined) computedStyle.maxWidth = maxWidthValue
  }
  if (maxHeight !== undefined) {
    const maxHeightValue = resolveValue(maxHeight)
    if (maxHeightValue !== undefined) computedStyle.maxHeight = maxHeightValue
  }

  // ==================== BORDER ====================
  if (borderRadius !== undefined) {
    const radiusValue = getBorderRadius(resolveValue(borderRadius))
    if (radiusValue !== undefined) computedStyle.borderRadius = radiusValue
  }
  if (borderTopLeftRadius !== undefined) {
    const radiusValue = getBorderRadius(resolveValue(borderTopLeftRadius))
    if (radiusValue !== undefined) computedStyle.borderTopLeftRadius = radiusValue
  }
  if (borderTopRightRadius !== undefined) {
    const radiusValue = getBorderRadius(resolveValue(borderTopRightRadius))
    if (radiusValue !== undefined) computedStyle.borderTopRightRadius = radiusValue
  }
  if (borderBottomLeftRadius !== undefined) {
    const radiusValue = getBorderRadius(resolveValue(borderBottomLeftRadius))
    if (radiusValue !== undefined) computedStyle.borderBottomLeftRadius = radiusValue
  }
  if (borderBottomRightRadius !== undefined) {
    const radiusValue = getBorderRadius(resolveValue(borderBottomRightRadius))
    if (radiusValue !== undefined) computedStyle.borderBottomRightRadius = radiusValue
  }
  if (borderWidth !== undefined) {
    const widthValue = resolveValue(borderWidth)
    if (widthValue !== undefined) computedStyle.borderWidth = widthValue
  }
  if (borderColor) {
    const colorValue = getColor(resolveValue(borderColor) as ColorKey)
    if (colorValue !== undefined) computedStyle.borderColor = colorValue
  }
  if (borderStyle) {
    const styleValue = resolveValue(borderStyle)
    if (styleValue !== undefined) computedStyle.borderStyle = styleValue
  }
  if (borderCurve) {
    const curveValue = resolveValue(borderCurve)
    if (curveValue !== undefined) {
      computedStyle.borderCurve = curveValue
    }
  }
  if (overflow) {
    const overflowValue = resolveValue(overflow)
    if (overflowValue !== undefined) computedStyle.overflow = overflowValue
  }

  // ==================== COLOR ====================
  if (backgroundColor) {
    const colorValue = getColor(resolveValue(backgroundColor) as ColorKey)
    if (colorValue !== undefined) computedStyle.backgroundColor = colorValue
  }

  // ==================== POSITION ====================
  if (position) {
    const positionValue = resolveValue(position)
    if (positionValue !== undefined) computedStyle.position = positionValue
  }
  if (top !== undefined) {
    const topValue = resolveValue(top)
    if (topValue !== undefined) computedStyle.top = topValue
  }
  if (left !== undefined) {
    const leftValue = resolveValue(left)
    if (leftValue !== undefined) computedStyle.left = leftValue
  }
  if (right !== undefined) {
    const rightValue = resolveValue(right)
    if (rightValue !== undefined) computedStyle.right = rightValue
  }
  if (bottom !== undefined) {
    const bottomValue = resolveValue(bottom)
    if (bottomValue !== undefined) computedStyle.bottom = bottomValue
  }

  // ==================== VISUAL EFFECTS ====================
  if (elevation !== undefined) {
    const elevationValue = resolveValue(elevation)
    if (elevationValue !== undefined) computedStyle.elevation = elevationValue
  }
  if (opacity !== undefined) {
    const opacityValue = resolveValue(opacity)
    if (opacityValue !== undefined) computedStyle.opacity = opacityValue
  }
  if (zIndex !== undefined) {
    const zIndexValue = resolveValue(zIndex)
    if (zIndexValue !== undefined) computedStyle.zIndex = zIndexValue
  }
  if (shadowColor !== undefined) {
    const shadowColorValue = resolveValue(shadowColor)
    if (shadowColorValue !== undefined) {
      // Check if it's a theme color key (exclude palette)
      if (typeof shadowColorValue === "string") {
        // Try to get it as a theme color key first
        const colorValue = getColor(shadowColorValue as ColorKey)
        if (colorValue !== undefined) {
          computedStyle.shadowColor = colorValue
        } else {
          // If not found in theme, use as direct color string
          computedStyle.shadowColor = shadowColorValue
        }
      } else {
        computedStyle.shadowColor = shadowColorValue as string
      }
    }
  }
  if (shadowOpacity !== undefined) {
    const shadowOpacityValue = resolveValue(shadowOpacity)
    if (shadowOpacityValue !== undefined) computedStyle.shadowOpacity = shadowOpacityValue
  }
  if (shadowRadius !== undefined) {
    const shadowRadiusValue = resolveValue(shadowRadius)
    if (shadowRadiusValue !== undefined) computedStyle.shadowRadius = shadowRadiusValue
  }
  if (shadowOffset !== undefined) {
    const shadowOffsetValue = resolveValue(shadowOffset)
    if (shadowOffsetValue !== undefined) computedStyle.shadowOffset = shadowOffsetValue
  }

  return <View ref={ref} style={[computedStyle, style]} {...rest} />
})
