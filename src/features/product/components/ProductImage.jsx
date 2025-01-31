import PropTypes from 'prop-types'
import FavoriteIcon from '../../../components/icons/FavoriteIcon'

function ProductImage({ product }) {
  return (
    <div
      className='h-full w-full aspect-square flex items-center
        brightness-97 bg-white rounded-xl overflow-hidden'
    >
      <div className='absolute top-2 left-2'>
        <FavoriteIcon liked={product.isFavorite} />
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
}

export default ProductImage
