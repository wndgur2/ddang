import PropTypes from 'prop-types'

function ProductItemSmall({ product }) {
  return (
    <div className='flex flex-col '>
      <img className='w-20' src={product.image} alt={product.title} />
      <div>
        <span>{product.title}</span>
      </div>
      <div className='flex flex-row'>
        {product.isTop && <span>🔥</span>}
        <span>{product.price}</span>
      </div>
      <span>{product.closeAt}</span>
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
