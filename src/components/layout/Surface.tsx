import { ReactNode } from "react"
import { Box, BoxProps } from "../Box"
import { useAppTheme } from "@/theme/context"

export interface SurfaceProps extends BoxProps {
  children?: ReactNode
}

/**
 * Surface - Material-like card container with default shadow and background.
 * Provides sensible defaults for cards, modals, and elevated surfaces.
 * Does NOT override user-provided values.
 */
export function Surface(props: SurfaceProps) {
  const { theme } = useAppTheme()
  const {
    backgroundColor = "background",
    borderRadius = "m",
    shadowColor = theme.colors.text || "#000",
    shadowOpacity = 0.1,
    shadowRadius = 6,
    elevation = 3,
    ...rest
  } = props

  return (
    <Box
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      shadowColor={shadowColor}
      shadowOpacity={shadowOpacity}
      shadowRadius={shadowRadius}
      elevation={elevation}
      {...rest}
    />
  )
}

