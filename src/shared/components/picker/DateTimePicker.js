import React from "react"
import DatePicker from "./DatePicker"

const DateTimePicker = ({ ...props }) => {
  return <DatePicker enableTime={true} {...props} />
}

DateTimePicker.propTypes = {}

DateTimePicker.defaultProps = {
  placeholder: "Vui lòng nhập ngày tháng và thời gian",
}

export default DateTimePicker
