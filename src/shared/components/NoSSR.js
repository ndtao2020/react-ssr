import React from "react"
import { Spinners } from "./spinners"

export default function NoSSR({ canRender, children, onSSR }) {
  return canRender ? children : onSSR
}

NoSSR.defaultProps = {
  canRender: false,
  onSSR: <Spinners />,
}
