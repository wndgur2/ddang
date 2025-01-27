import PropTypes from 'prop-types'

function TextArea({ label, required }) {
  return (
    <div className='flex flex-col gap-1 py-2'>
      {label && (
        <label className='font-bold text-gray-800 text-sm'>
          {label}
          {required && '*'}
        </label>
      )}
      <textarea className='flex border-1 border-gray-300 rounded-md p-1.5' />
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default TextArea
