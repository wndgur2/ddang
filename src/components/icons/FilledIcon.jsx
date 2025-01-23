import PropTypes from 'prop-types'

function FilledIcon({ name, color, size, style }) {
  const filledIconStyle = {
    fontVariationSettings: `'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24`,
    color: 'var(--color-icon)',
    fontSize: 24,
  }
  filledIconStyle.color = color
  filledIconStyle.fontSize = size
  return (
    <span
      className='material-symbols-rounded'
      style={{ ...filledIconStyle, ...style }}
    >
      {name}
    </span>
  )
}

FilledIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
}

export default FilledIcon
