/**
 * Use these spacings for margins/paddings and other whitespace throughout your app.
 * Following t-shirt size scale (XS, S, M, L, XL, etc.) for easy understanding and extensibility.
 *
 * Migration note: Old spacing keys (xxxs, xxs, sm, md, lg) are available as aliases
 * for backward compatibility but will be removed in a future version.
 * Please migrate to the new t-shirt sizes: xs, s, m, l, xl, xxl, xxxl
 */
export const spacing = {
  // New t-shirt sizes (preferred)
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  // Backward compatibility aliases (deprecated)
  xxxs: 2, // Use xs (4) instead
  xxs: 4, // Use xs (4) instead
  sm: 12, // Use s (8) or m (16) instead
  md: 16, // Use m (16) instead
  lg: 24, // Use l (24) instead
} as const
