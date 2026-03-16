// src/theme/colors.ts  (LIGHT THEME)

const palette = {
  // Neutral / Grays
  neutral100: "#FFFFFF",
  neutral200: "#F5F6F8",
  neutral300: "#E6E6E6",
  neutral400: "#D9D9D9",
  neutral500: "#B3B3B3",
  neutral600: "#858585",
  neutral700: "#666666",
  neutral800: "#222222",
  neutral900: "#000000",

  // Primary (Easypaisa Green)
  primary100: "#CCF2DD",
  primary200: "#A8ECC6",
  primary300: "#7FDFAB",
  primary400: "#52C888",
  primary500: "#13A452", // Main Brand Color
  primary600: "#0E7A3C",

  // Secondary (Mint Green)
  secondary100: "#E2FBEA",
  secondary200: "#C0F5D3",
  secondary300: "#8FE6A2",
  secondary400: "#66D47E",
  secondary500: "#47B65D",

  // Accent (Orange)
  accent100: "#FFE9D1",
  accent200: "#FFD3A3",
  accent300: "#FFBC75",
  accent400: "#FFA346",
  accent500: "#F7931E",

  // Error
  angry100: "#F8D4D3",
  angry500: "#E53835",

  // Success
  success100: "#D3F7E4",
  success500: "#13A452",

  // Warning
  warning100: "#FFE8CC",
  warning500: "#F7931E",

  // Info
  info100: "#DBEAFE",
  info500: "#3B82F6",

  // Overlays
  overlay20: "rgba(0,0,0,0.2)",
  overlay50: "rgba(0,0,0,0.5)",
} as const

export const colors = {
  palette,

  transparent: "rgba(0,0,0,0)",

  text: palette.neutral800,
  textDim: palette.neutral600,

  background: palette.neutral200,
  border: palette.neutral400,

  tint: palette.primary500,
  tintInactive: palette.neutral400,

  separator: palette.neutral300,

  error: palette.angry500,
  errorBackground: palette.angry100,

  success: palette.success500,
  successBackground: palette.success100,

  warning: palette.warning500,
  warningBackground: palette.warning100,

  info: palette.info500,
  infoBackground: palette.info100,
} as const
