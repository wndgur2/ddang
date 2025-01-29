import PropTypes from 'prop-types'

function InputValue({ value, label }) {
  return (
    <>
      {value ? (
        <div className='flex gap-2 items-center'>
          <span className='text-gray-800'>{value}</span>
        </div>
      ) : (
        <span className='text-gray-500'>선택된 {label} 없음</span>
      )}
    </>
  )
}

InputValue.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
}

export default InputValue
