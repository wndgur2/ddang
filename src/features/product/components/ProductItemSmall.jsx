import PropTypes from 'prop-types'
import { dday } from '../../../utils/Dday'

function ProductItemSmall({ product }) {
  return (
    <div className='flex flex-col flex-shrink-0'>
      <img src={product.image} alt={product.title} className='size-32' />
      <div>
        <span>{product.title}</span>
      </div>
      <div className='flex flex-row'>
        {product.isTop && <span>🔥</span>}
        <span>{product.price}</span>
      </div>
      <span className='text-sm text-gray-600'>
        {dday(product.closeAt)} 남음
      </span>
    </div>
  )
}

ProductItemSmall.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isTop: PropTypes.bool.isRequired,
    closeAt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductItemSmall
