import PropTypes from 'prop-types'
import { useMemo, useRef, useState } from 'react'
import Label from './Label'
import MaterialIcon from '../icons/MaterialIcon'
import InputValue from './InputValue'
import PickerWrapper from './PickerWrapper'

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
    <div className='flex flex-col gap-2 py-2'>
      {label && <Label text={label} required={required} />}
      <PickerWrapper callback={() => dateInput.current.showPicker()}>
        <InputValue value={koreanLocalDate} label={label} />
        <input
          ref={dateInput}
          value={date}
          onChange={e => setDate(e.target.value)}
          type='datetime-local'
          className='fixed bottom-0 opacity-0 pointer-events-none'
        />
        <MaterialIcon name='calendar_month' />
      </PickerWrapper>
    </div>
  )
}

DatePicker.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default DatePicker
