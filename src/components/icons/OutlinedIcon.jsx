import PropTypes from 'prop-types'

const outlinedIconStyle = {
  fontVariationSettings: `'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24`,
}

function OutlinedIcon({ name }) {
  return (
    <span className='material-symbols-outlined' style={outlinedIconStyle}>
      {name}
    </span>
  )
}

OutlinedIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default OutlinedIcon
