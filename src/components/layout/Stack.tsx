import { ReactNode } from "react"
import { Box, BoxProps } from "../Box"

export interface StackProps extends BoxProps {
  children?: ReactNode
  /** Spacing between stack items. Maps to Box gap prop. */
  spacing?: BoxProps["gap"]
}

/**
 * Stack - A vertical stack container with consistent spacing.
 * A VStack clone that accepts a spacing prop mapping to Box gap.
 * Internally uses flexDirection="column" with gap for spacing.
 */
export function Stack(props: StackProps) {
  const { spacing, flexDirection, gap, ...rest } = props
  return <Box flexDirection={flexDirection ?? "column"} gap={spacing ?? gap} {...rest} />
}

