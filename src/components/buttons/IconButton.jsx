import PropTypes from 'prop-types'
import MaterialIcon from '../icons/MaterialIcon'

function IconButton({ icon, onClick }) {
  return (
    <button className='flex items-center justify-center' onClick={onClick}>
      <MaterialIcon {...icon} />
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.object,
  onClick: PropTypes.func,
}

export default IconButton
