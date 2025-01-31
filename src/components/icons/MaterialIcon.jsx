import PropTypes from 'prop-types'

function MaterialIcon({ name, size = 24, filled, style, className }) {
  /* icon 불러오기 전에 text 대신 skeleton 출력하기 */
  const iconStyle = {
    fontVariationSettings: `'FILL' ${filled ? 1 : 0},
    'wght' 400,
    'GRAD' 0,
    'opsz' ${size}`,
  }
  iconStyle.fontSize = size
  return (
    <span
      className={`material-symbols-rounded ${className}`}
      style={{ ...iconStyle, ...style }}
    >
      {name}
    </span>
  )
}

MaterialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  filled: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
}

export default MaterialIcon
