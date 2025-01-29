import PropTypes from 'prop-types'

function Devider({ className, style }) {
  return (
    <div
      className={`flex flex-row border-b border-gray-300 ${className}`}
      style={style}
    />
  )
}

Devider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Devider
