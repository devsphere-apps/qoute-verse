import { ReactNode } from "react"
import { Box, BoxProps } from "../Box"

export interface RowProps extends BoxProps {
  children?: ReactNode
}

/**
 * Row - A horizontal flex container.
 * Wraps Box with flexDirection="row" by default.
 * Accepts all BoxProps including gap, justifyContent, alignItems, etc.
 */
export function Row(props: RowProps) {
  const { flexDirection, ...rest } = props
  return <Box flexDirection={flexDirection ?? "row"} {...rest} />
}

