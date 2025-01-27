import PropTypes from 'prop-types'

function TextInput({ label, required }) {
  return (
    <div className='flex flex-col gap-1 py-2'>
      {label && (
        <label className='font-bold text-gray-800 text-sm'>
          {label}
          {required && '*'}
        </label>
      )}
      <input
        type='text'
        className='flex border-1 border-gray-300 rounded-md p-1.5'
      />
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default TextInput
