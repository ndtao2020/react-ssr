import React from "react"
import DatePicker from "./DatePicker"

const TimePicker = ({ ...props }) => {
  return <DatePicker enableTime={true} noCalendar={true} {...props} />
}

TimePicker.propTypes = {}

TimePicker.defaultProps = {
  placeholder: "Vui lòng nhập thời gian",
}

export default TimePicker
