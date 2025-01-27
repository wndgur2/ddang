import PropTypes from 'prop-types'

function DefaultButton({ children, callback }) {
  return (
    <button
      className='w-full p-3 bg-ddblue-400 rounded-lg text-white'
      onClick={callback}
    >
      {children}
    </button>
  )
}

DefaultButton.propTypes = {
  children: PropTypes.node,
  callback: PropTypes.func,
}

export default DefaultButton
