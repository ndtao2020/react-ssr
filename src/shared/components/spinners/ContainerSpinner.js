import React from "react"
import PropTypes from "prop-types"
import Spinners from "./Spinners"

const LoadingSpinner = (props) => {
  const { show, children, spinners } = props
  return (
    <div style={{ position: "relative", minWidth: "120px" }}>
      {children}
      <div
        className="d-flex justify-content-center"
        show={show}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          zIndex: "10",
          height: "100%",
          opacity: "0.6",
          display: `${show ? "flex" : "none"} !important`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            whiteSpace: "nowrap",
            WebkitTransition: "width 0.6s ease",
            transition: "width 0.6s ease",
            backgroundColor: "#ffffffc2 !important",
            color: "#fff",
            width: "100%",
          }}
        >
          {spinners ? spinners() : <Spinners />}
        </div>
      </div>
    </div>
  )
}

LoadingSpinner.propTypes = {
  show: PropTypes.bool.isRequired,
  spinners: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
}

export default LoadingSpinner
