import PropTypes from 'prop-types'
import { useRef } from 'react'

function DatePicker({ label, required }) {
  const dateInput = useRef(null)

  return (
    <div className='flex flex-col gap-2 py-2'>
      {label && (
        <label className='font-bold text-gray-800 text-sm'>
          {label}
          {required && '*'}
        </label>
      )}
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
