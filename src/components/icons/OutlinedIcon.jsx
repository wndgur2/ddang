import PropTypes from 'prop-types'

function OutlinedIcon({ name, color, size }) {
  const outlinedIconStyle = {
    fontVariationSettings: `'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24`,
    color: 'var(--color-icon)',
    fontSize: 24,
  }
  outlinedIconStyle.color = color
  outlinedIconStyle.fontSize = size
  return (
    <span className='material-symbols-outlined' style={outlinedIconStyle}>
      {name}
    </span>
  )
}

OutlinedIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
}

export default OutlinedIcon
