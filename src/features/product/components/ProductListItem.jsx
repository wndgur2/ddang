import PropTypes from 'prop-types'
import ProductImage from './ProductImage'
import { trimText } from '../../../utils/trimText'
import { dday } from '../../../utils/Dday'
import MaterialIcon from '../../../components/icons/MaterialIcon'

function ProductListItem({ product }) {
  const title = trimText(product.title, 14)
  const price = Intl.NumberFormat('ko-KR').format(product.price)
  return (
    <div className='flex p-4 gap-3 border-b border-gray-200'>
      <div className='size-24'>
        <ProductImage product={product} />
      </div>
      <div className='flex flex-col w-full py-0.5 justify-between'>
        <div className='flex justify-between'>
          <p>{title}</p>
          <p className='text-sm text-gray-700'>{dday(product.closeAt)} 전</p>
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='text-lg font-semibold mt-2 text-gray-950'>
              {price}원
            </p>
            <p className='text-sm text-gray-600'>즉시낙찰가 20,800원</p>
          </div>
          <div className='flex items-end text-gray-600 gap-2'>
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
        </div>
      </div>
    </div>
  )
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductListItem
