import PropTypes from 'prop-types'
import { useMemo, useRef, useState } from 'react'
import Label from './Label'
import MaterialIcon from '../icons/MaterialIcon'

function DatePicker({ label, required }) {
  const dateInput = useRef(null)
  const [date, setDate] = useState()
  const koreanLocalDate = useMemo(() => {
    return date
      ? new Date(date).toLocaleString('ko-KR', {
          dateStyle: 'medium',
          timeStyle: 'short',
        })
      : ''
  }, [date])

  return (
    <div className='flex flex-col gap-2 py-2 w-full'>
      {label && <Label text={label} required={required} />}
      <div
        className='flex justify-between items-center border-1 border-gray-300 rounded-md p-3'
        onClick={() => dateInput.current.showPicker()}
      >
        {koreanLocalDate ? (
          <div className='flex gap-2 items-center'>
            <span className='text-gray-800'>{koreanLocalDate}</span>
          </div>
        ) : (
          <span className='text-gray-500'>선택된 {label} 없음</span>
        )}
        <input
          ref={dateInput}
          value={date}
          onChange={e => setDate(e.target.value)}
          type='datetime-local'
          className='fixed bottom-0 opacity-0 pointer-events-none'
        />
        <MaterialIcon name='calendar_month' />
      </div>
    </div>
  )
}

DatePicker.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default DatePicker
