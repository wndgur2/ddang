import PropTypes from 'prop-types'
import Label from './Label'

function TextInput({ label, required }) {
  return (
    <div className='flex flex-col gap-2 py-2'>
      {label && <Label text={label} required={required} />}
      <input
        type='text'
        className='flex border-1 border-gray-300 rounded-md p-3'
      />
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default TextInput
