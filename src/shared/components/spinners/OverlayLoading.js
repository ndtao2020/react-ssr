import React from "react"
import { fade } from "@material-ui/core/styles/colorManipulator"
import Spinners from "./Spinners"

const OverlayLoading = (props) => {
  const { theme } = props
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 11,
      }}
    >
      <div
        style={{
          display: "table",
          width: "100%",
          height: "100%",
          backgroundColor:
            theme === undefined
              ? "rgba(255, 255, 255, 0.66)"
              : fade(theme.palette.background.paper, 0.7),
        }}
      >
        <div
          style={{
            display: "table-cell",
            width: "100%",
            height: "100%",
            verticalAlign: "middle",
            textAlign: "center",
          }}
        >
          <Spinners />
        </div>
      </div>
    </div>
  )
}

export default OverlayLoading
