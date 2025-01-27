import PropTypes from 'prop-types'
import MaterialIcon from '../icons/MaterialIcon'

const textStyle = {
  fontSize: '0.75rem',
}

function NavButton({ iconName, children }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <MaterialIcon name={iconName} filled />
      <span className='whitespace-nowrap' style={textStyle}>
        {children}
      </span>
    </div>
  )
}

NavButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default NavButton
