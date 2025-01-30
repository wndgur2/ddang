import PropTypes from 'prop-types'
import MaterialIcon from '../../../components/icons/MaterialIcon'
import { dday } from '../../../utils/Dday'
import { trimText } from '../../../utils/trimText'
import ProductImage from './ProductImage'

function ProductItemVertical({ product }) {
  const title = trimText(product.title, 15)
  const price = new Intl.NumberFormat('ko-KR').format(product.price)
  return (
    <div className='flex flex-col'>
      <ProductImage product={product} />
      <div className='flex flex-col px-0.5 mt-1'>
        <span className='text-gray-800 text-sm'>{title}</span>
        <span className='text-gray-950 font-bold h-fit leading-none'>
          {price}원
        </span>
        <div className='flex flex-row justify-between items-center mt-1'>
          <div className='flex items-center text-gray-600 gap-2'>
            <div className='flex items-center gap-0.5'>
              <MaterialIcon name='person_raised_hand' filled size={18} />
              <span className='text-sm tracking-tight'>
                {product.bidderCount}
              </span>
            </div>
            <div className='flex items-center gap-0.5'>
              <MaterialIcon name='front_hand' filled size={18} />
              <span className='text-sm tracking-tight'>{product.bidCount}</span>
            </div>
          </div>
          <span className='text-gray-600 text-sm'>
            {dday(product.closeAt)} 남음
          </span>
        </div>
      </div>
    </div>
  )
}

ProductItemVertical.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductItemVertical
