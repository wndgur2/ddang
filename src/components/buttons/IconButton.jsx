import PropTypes from 'prop-types'
import MaterialIcon from '../icons/MaterialIcon'

function IconButton({ icon, callback }) {
  return (
    <button className='flex items-center justify-center' onClick={callback}>
      <MaterialIcon {...icon} />
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.object,
  callback: PropTypes.func,
}

export default IconButton
