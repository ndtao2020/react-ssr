import React from "react"
import PropTypes from "prop-types"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/material_blue.css"
import { Vietnamese } from "flatpickr/dist/l10n/vn"
import { formatISO } from "date-fns"
import { formatDate, formatDatetime, formatTime } from "../../../../utils/format"

const DatePicker = ({ value, onChange, placeholder, enableTime, noCalendar }) => (
  <Flatpickr
    value={value}
    onChange={(date) => onChange && onChange(formatISO(date[0]))}
    options={{
      enableTime,
      noCalendar,
      mode: "single",
      formatDate: (date) => {
        if (enableTime === true && noCalendar === true) {
          return formatTime(date)
        }
        if (enableTime) {
          return formatDatetime(date)
        }
        return formatDate(date)
      },
      locale: Vietnamese,
    }}
    render={({ defaultValue, ...props }, ref) => {
      return (
        <input
          {...props}
          type="text"
          ref={ref}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="form-control"
          style={{ background: "white", color: "black" }}
        />
      )
    }}
  />
)

DatePicker.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  enableTime: PropTypes.bool.isRequired,
  noCalendar: PropTypes.bool.isRequired,
}

DatePicker.defaultProps = {
  enableTime: false,
  noCalendar: false,
  placeholder: "Vui lòng nhập ngày tháng",
}

export default DatePicker
