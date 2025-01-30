import PropTypes from 'prop-types'

function Slider({ children }) {
  return (
    <div className='flex flex-row flex-nowrap overflow-x-scroll snap-x snap-mandatory bg-white brightness-97'>
      {children}
    </div>
  )
}

Slider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Slider
