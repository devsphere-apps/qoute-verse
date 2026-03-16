const SPACING_MULTIPLIER = 1.0

/**
 * Dark theme spacing values.
 * This is an example of how you can have different spacing values for different themes.
 * Following t-shirt size scale (XS, S, M, L, XL, etc.) for consistency.
 *
 * Migration note: Old spacing keys (xxxs, xxs, sm, md, lg) are available as aliases
 * for backward compatibility but will be removed in a future version.
 * Please migrate to the new t-shirt sizes: xs, s, m, l, xl, xxl, xxxl
 */
export const spacing = {
  // New t-shirt sizes (preferred)
  xs: 4 * SPACING_MULTIPLIER,
  s: 8 * SPACING_MULTIPLIER,
  m: 16 * SPACING_MULTIPLIER,
  l: 24 * SPACING_MULTIPLIER,
  xl: 32 * SPACING_MULTIPLIER,
  xxl: 48 * SPACING_MULTIPLIER,
  xxxl: 64 * SPACING_MULTIPLIER,
  // Backward compatibility aliases (deprecated)
  xxxs: 2 * SPACING_MULTIPLIER, // Use xs (4) instead
  xxs: 4 * SPACING_MULTIPLIER, // Use xs (4) instead
  sm: 12 * SPACING_MULTIPLIER, // Use s (8) or m (16) instead
  md: 16 * SPACING_MULTIPLIER, // Use m (16) instead
  lg: 24 * SPACING_MULTIPLIER, // Use l (24) instead
} as const
