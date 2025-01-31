import PropTypes from 'prop-types'
import FavoriteButton from '../../../components/icons/FavoriteButton'

function ProductImage({ product, heartSize = 32 }) {
  return (
    <div
      className='h-full w-full aspect-square flex items-center
        brightness-97 bg-white rounded-xl overflow-hidden'
    >
      <div className='absolute top-[4%] left-[4%]'>
        <FavoriteButton liked={product.isFavorite} size={heartSize} />
      </div>
      <img
        src={product.photo}
        alt={product.title}
        className='h-full object-contain'
      />
    </div>
  )
}

ProductImage.propTypes = {
  product: PropTypes.object.isRequired,
  heartSize: PropTypes.number,
}

export default ProductImage
