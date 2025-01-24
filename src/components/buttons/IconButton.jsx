import PropTypes from 'prop-types'
import MaterialIcon from '../icons/MaterialIcon'

function IconButton({ icon, callback }) {
  return (
    <button className='flex items-center justify-center' onClick={callback}>
      <MaterialIcon
        name={icon.name}
        size={icon.size}
        filled={icon.filled}
        color={icon.color}
      />
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string,
  callback: PropTypes.func,
  size: PropTypes.number,
}

export default IconButton
