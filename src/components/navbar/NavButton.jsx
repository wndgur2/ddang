import PropTypes from 'prop-types'
import FilledIcon from '../icons/FilledIcon'

const textStyle = {
  fontSize: '0.75rem',
}

function NavButton({ iconName, children }) {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <FilledIcon name={iconName} />
        <span style={textStyle}>{children}</span>
      </div>
    </>
  )
}

NavButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default NavButton
