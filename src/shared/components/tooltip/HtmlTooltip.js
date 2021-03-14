import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { Typography, Tooltip } from "@material-ui/core"

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "black",
    color: "white",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip)

const ITooltip = (props) => {
  const { children, title, description, ...attribute } = props
  return (
    <HtmlTooltip
      {...attribute}
      arrow
      title={
        <React.Fragment>
          <Typography color="inherit">{title}</Typography>
          {description}
        </React.Fragment>
      }
    >
      {children}
    </HtmlTooltip>
  )
}

ITooltip.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
}

export default ITooltip
