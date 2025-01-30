import PropTypes from 'prop-types'

// to elements not only images
function ImageSlider({ images }) {
  return (
    <div className='flex flex-row flex-nowrap overflow-x-scroll snap-x snap-mandatory bg-white brightness-97'>
      {images.map((image, index) => (
        <div
          key={index}
          className='aspect-square w-full flex-shrink-0 snap-center'
        >
          <img
            src={image}
            alt='product'
            className='aspect-square w-full object-contain'
          />
        </div>
      ))}
    </div>
  )
}

ImageSlider.propTypes = {
  images: PropTypes.array.isRequired,
}

export default ImageSlider
