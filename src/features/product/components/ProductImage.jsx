import PropTypes from 'prop-types'
import FavoriteIcon from '../../../components/icons/FavoriteIcon'

function ProductImage({ product }) {
  return (
    <div
      className='w-full aspect-square flex items-center
        brightness-97 bg-white rounded-xl overflow-hidden'
    >
      <div className='absolute top-2 left-2'>
        <FavoriteIcon liked={product.isFavorite} />
      </div>
      <img src={product.image} alt={product.title} className='object-contain' />
    </div>
  )
}

ProductImage.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductImage
