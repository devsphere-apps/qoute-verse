import { Box, BoxProps } from "../Box"

export interface SpacerProps extends Omit<BoxProps, "flex"> {
  /** Optional flex value override. Defaults to 1. */
  flex?: BoxProps["flex"]
}

/**
 * Spacer - A component that expands to fill available space.
 * Internally uses flex={1} to push other elements apart.
 */
export function Spacer(props: SpacerProps) {
  const { flex = 1, ...rest } = props
  return <Box flex={flex} {...rest} />
}

