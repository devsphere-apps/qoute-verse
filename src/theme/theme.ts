import { colors as colorsLight } from "./colors"
import { colors as colorsDark } from "./colorsDark"
import { spacing as spacingLight } from "./spacing"
import { spacing as spacingDark } from "./spacingDark"
import { timing } from "./timing"
import type { Theme } from "./types"
import { typography } from "./typography"

// Breakpoints for responsive design
// smallPhone: < 321px, phone: 321-768px, tablet: > 768px
const breakpoints = {
  smallPhone: 320,
  phone: 768,
  tablet: 1024,
} as const

// Here we define our themes.
export const lightTheme: Theme = {
  colors: colorsLight,
  spacing: spacingLight,
  typography,
  timing,
  isDark: false,
  textVariants: {
    heading: { fontSize: 28, fontFamily: typography.primary.bold },
    subheading: { fontSize: 24, fontFamily: typography.primary.medium },
    body: { fontSize: 16, fontFamily: typography.primary.normal },
    caption: { fontSize: 12, fontFamily: typography.primary.light },
  },
  breakpoints,
}

export const darkTheme: Theme = {
  colors: colorsDark,
  spacing: spacingDark,
  typography,
  timing,
  isDark: true,
  textVariants: {
    heading: { fontSize: 28, fontFamily: typography.primary.bold },
    subheading: { fontSize: 24, fontFamily: typography.primary.medium },
    body: { fontSize: 16, fontFamily: typography.primary.normal },
    caption: { fontSize: 12, fontFamily: typography.primary.light },
  },
  breakpoints,
}
