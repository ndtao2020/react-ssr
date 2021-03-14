import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}))

const ITooltip = (props) => {
  const classes = useStylesBootstrap()
  const { children, ...attribute } = props
  return (
    <Tooltip {...attribute} arrow classes={classes}>
      {children}
    </Tooltip>
  )
}

ITooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
}

export default ITooltip
