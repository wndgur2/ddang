import PropTypes from 'prop-types'

function ProductDetailItem({ name, value, bold }) {
  return (
    <div className={`flex justify-between ${bold ? 'font-bold' : ''}`}>
      <span>{name}</span>
      <span>{value.toString()}</span>
    </div>
  )
}

ProductDetailItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  bold: PropTypes.bool,
}

export default ProductDetailItem
