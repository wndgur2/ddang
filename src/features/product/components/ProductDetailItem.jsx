import PropTypes from 'prop-types'

function ProductDetailItem({ name, value, bold }) {
  return (
    <div
      className={`flex justify-between ${bold ? 'font-bold' : ''} items-end`}
    >
      <span className='text-gray-700 text-sm'>{name}</span>
      <span className='text-gray-950'>{value.toString()}</span>
    </div>
  )
}

ProductDetailItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  bold: PropTypes.bool,
}

export default ProductDetailItem
