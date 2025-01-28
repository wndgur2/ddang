import PropTypes from 'prop-types'
import { useRef } from 'react'
import Label from './Label'

function DatePicker({ label, required }) {
  const dateInput = useRef(null)

  return (
    <div className='flex flex-col gap-2 py-2'>
      {label && <Label text={label} required={required} />}
      <input
        ref={dateInput}
        type='datetime-local'
        className='flex flex-col border-1 border-gray-300 rounded-md p-3'
      />
    </div>
  )
}

DatePicker.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default DatePicker
