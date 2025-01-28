import PropTypes from 'prop-types'

function Label({ text, required }) {
  return (
    <label className='font-bold text-gray-800 text-sm'>
      {text}
      {required && '*'}
    </label>
  )
}

Label.propTypes = {
  text: PropTypes.string,
  required: PropTypes.bool,
}

export default Label
