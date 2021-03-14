import React from "react"
import PropTypes from "prop-types"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function F({ alert, autoHideDuration, onClose }) {
  const { isOpen, severity, message } = alert

  return (
    <Snackbar
      open={isOpen || false}
      autoHideDuration={autoHideDuration || 6000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  )
}

F.propTypes = {
  alert: PropTypes.object.isRequired,
  autoHideDuration: PropTypes.any.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default React.memo(F)
