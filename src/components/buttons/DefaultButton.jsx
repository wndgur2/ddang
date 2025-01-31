import PropTypes from 'prop-types'

function DefaultButton({ children, onClick }) {
  return (
    <button
      className='w-full p-3 bg-ddblue-400 rounded-lg text-white'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

DefaultButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default DefaultButton
