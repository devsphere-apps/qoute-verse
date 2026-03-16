// src/theme/colorsDark.ts (DARK THEME)

const palette = {
  neutral900: "#FFFFFF",
  neutral800: "#E6E6E6",
  neutral700: "#CFCFCF",
  neutral600: "#A8A8A8",
  neutral500: "#8A8A8A",
  neutral400: "#666666",
  neutral300: "#444444",
  neutral200: "#222222",
  neutral100: "#000000",

  // Primary (same brand color but slightly boosted)
  primary600: "#7FDFAB",
  primary500: "#13A452",
  primary400: "#0F8A45",
  primary300: "#0B6F37",
  primary200: "#064F27",
  primary100: "#04391C",

  // Secondary (mint brightened)
  secondary500: "#8FE6A2",
  secondary400: "#6FCF85",
  secondary300: "#52B56C",
  secondary200: "#3C8F51",
  secondary100: "#2A6A3A",

  // Accent (Orange)
  accent500: "#F7931E",
  accent400: "#D97D17",
  accent300: "#B86812",
  accent200: "#8C4E0C",
  accent100: "#653807",

  // Red (Error)
  angry100: "#4A1E1D",
  angry500: "#E53835",

  // Success
  success100: "#153E28",
  success500: "#13A452",

  // Warning
  warning100: "#4A3418",
  warning500: "#F7931E",

  // Info
  info100: "#1E2A42",
  info500: "#3B82F6",

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
