import PropTypes from 'prop-types'

function PickerWrapper({ onClick, children }) {
  return (
    <div
      className='flex justify-between items-center border-1 border-gray-300 rounded-md p-3'
      onClick={onClick}
    >
      {children}
    </div>
  )
}

PickerWrapper.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

export default PickerWrapper
