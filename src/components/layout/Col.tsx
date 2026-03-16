import { ReactNode } from "react"
import { Box, BoxProps } from "../Box"

export interface ColProps extends BoxProps {
  children?: ReactNode
}

/**
 * Col - A vertical flex container.
 * Wraps Box with flexDirection="column" by default.
 * Identical to Row but vertical.
 */
export function Col(props: ColProps) {
  const { flexDirection, ...rest } = props
  return <Box flexDirection={flexDirection ?? "column"} {...rest} />
}

