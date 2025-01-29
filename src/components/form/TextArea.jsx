import PropTypes from 'prop-types'
import Label from './Label'

function TextArea({ label, required }) {
  return (
    <div className='flex flex-col gap-1 py-3'>
      {label && <Label text={label} required={required} />}
      <textarea className='flex border-1 border-gray-300 rounded-md p-1.5' />
    </div>
  )
}

TextArea.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default TextArea
