import React from "react"
import PropTypes from "prop-types"
import "./styles.scss"

function DisplayAsDefaultToolTip({ toolTip, renderLabel }) {
  return (
    <div className="m-tool-tip-container">
      {renderLabel()}
      <span className="m-tool-tip-text">{toolTip}</span>
    </div>
  )
}

DisplayAsDefaultToolTip.propTypes = {
  toolTip: PropTypes.string.isRequired,
  renderLabel: PropTypes.func.isRequired,
}

export default React.memo(DisplayAsDefaultToolTip)
