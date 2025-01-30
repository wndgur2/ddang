import PropTypes from 'prop-types'

function ProductItemVertical({ product }) {
  return (
    <div className='flex flex-col gap-2'>
      <img src={product.image} alt={product.title} className='object-cover' />
      <h3 className='text-lg'>{product.title}</h3>
      <p className='text-lg font-semibold text-blue-500'>{product.price}</p>
    </div>
  )
}

ProductItemVertical.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductItemVertical
