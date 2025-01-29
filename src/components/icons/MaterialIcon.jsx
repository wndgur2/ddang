import PropTypes from 'prop-types'

function MaterialIcon({ name, color, size = 24, filled, style }) {
  const iconStyle = {
    fontVariationSettings: `'FILL' ${filled ? 1 : 0},
    'wght' 400,
    'GRAD' 0,
    'opsz' ${size}`,
  }
  iconStyle.color = color
  iconStyle.fontSize = size
  return (
    <span
      className='material-symbols-rounded'
      style={{ ...iconStyle, ...style }}
    >
      {name}
    </span>
  )
}

MaterialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  filled: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
}

export default MaterialIcon
