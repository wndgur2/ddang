import PropTypes from 'prop-types'
import { useRef } from 'react'
import Label from './Label'
import style from './DatePicker.module.css'

function DatePicker({ label, required }) {
  const dateInput = useRef(null)

  return (
    <div className='flex flex-col gap-2 py-2 w-full'>
      {label && <Label text={label} required={required} />}
      <input
        ref={dateInput}
        type='datetime-local'
        className={`flex justify-between items-center border-1 border-gray-300 rounded-md p-3 ${style.datePicker}`}
      />
      <input type='hidden' id='timezone' name='timezone' value='+09:00' />
    </div>
  )
}

DatePicker.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default DatePicker
