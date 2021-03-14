import React, { Suspense } from "react"
import PropTypes from "prop-types"
import { Spinners } from "./spinners"

export default function RenderSuspense({ children, ...props }) {
  return <Suspense {...props}>{children}</Suspense>
}

RenderSuspense.defaultProps = {
  fallback: <Spinners />,
}

RenderSuspense.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
}
