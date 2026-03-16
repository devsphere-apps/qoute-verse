import { ReactNode } from "react"
import { Box, BoxProps } from "../Box"

export interface AbsoluteProps extends BoxProps {
  children?: ReactNode
}

/**
 * Absolute - A shortcut for position="absolute".
 * Accepts top/left/right/bottom props normally.
 */
export function Absolute(props: AbsoluteProps) {
  const { position, ...rest } = props
  return <Box position={position ?? "absolute"} {...rest} />
}

