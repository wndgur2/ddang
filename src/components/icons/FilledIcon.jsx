import PropTypes from 'prop-types'

const filledIconStyle = {
  fontVariationSettings: `'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24`,
}

function FilledIcon({ name }) {
  return (
    <span className='material-symbols-rounded' style={filledIconStyle}>
      {name}
    </span>
  )
}

FilledIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default FilledIcon
