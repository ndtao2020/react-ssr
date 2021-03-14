import { useState, useCallback, useMemo } from "react"

/**
 * @function setAlert() set Các thuộc tính của Alert
 * @var alert = {isOpen:bool,message:string,severity: "success" || "info" || "error",...}
 */

function useAlert() {
  const [alert, setAlert] = useState({})

  const fire = useMemo(
    function () {
      return {
        error: function (message = "Đã xảy ra lỗi, vui lòng thử lại") {
          setAlert({ isOpen: true, message, severity: "error" })
        },
        success: function (message) {
          setAlert({ isOpen: true, message, severity: "success" })
        },
        warning: function (message) {
          setAlert({ isOpen: true, message, severity: "warning" })
        },
        info: function (message) {
          setAlert({ isOpen: true, message, severity: "info" })
        },
      }
    },
    [setAlert]
  )

  const handleClose = useCallback(function () {
    setAlert((pre) => ({ ...pre, isOpen: false }))
  })

  return { alert, handleClose, fire }
}

export default useAlert
