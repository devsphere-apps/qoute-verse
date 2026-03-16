import { ReactNode } from "react"
import { Box, BoxProps } from "../Box"

export interface CenterProps extends BoxProps {
  children?: ReactNode
}

/**
 * Center - Centers content both horizontally and vertically.
 * Wraps Box with alignItems="center" and justifyContent="center" by default.
 */
export function Center(props: CenterProps) {
  const { alignItems, justifyContent, ...rest } = props
  return (
    <Box
      alignItems={alignItems ?? "center"}
      justifyContent={justifyContent ?? "center"}
      {...rest}
    />
  )
}

