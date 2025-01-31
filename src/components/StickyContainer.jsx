import PropTypes from 'prop-types'

function StickyContainer({ children }) {
  return (
    <div className='fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200'>
      {children}
    </div>
  )
}

StickyContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StickyContainer
