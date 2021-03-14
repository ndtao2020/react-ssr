import React from "react"
import PropTypes from "prop-types"
import { Label } from "."

const Required = ({ text, children, ...attributes }) => (
  <Label {...attributes}>
    <b>{children}</b> <span style={{ color: "red" }}>{text}</span>
  </Label>
)

Required.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
}

Required.defaultProps = { text: "*" }

export default Required
