import PropTypes from 'prop-types'

function PickerWrapper({ callback, children }) {
  return (
    <div
      className='flex justify-between items-center border-1 border-gray-300 rounded-md p-3'
      onClick={callback}
    >
      {children}
    </div>
  )
}

PickerWrapper.propTypes = {
  callback: PropTypes.func,
  children: PropTypes.node,
}

export default PickerWrapper
