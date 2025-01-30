import PropTypes from 'prop-types'
import { wonitzie } from '../../../utils/wonitize'
import { dday } from '../../../utils/Dday'

function HomeMainProduct({ product, index, size }) {
  return (
    <div className='aspect-square w-full flex-shrink-0 snap-center'>
      <img
        src={product.image}
        alt='product'
        className='aspect-square w-full object-contain'
      />
      <div
        className='absolute z-1 w-full bottom-0 px-3 py-2 text-white'
        style={{ backgroundColor: '#00000060' }}
      >
        <div className='flex justify-between text-sm text-gray-50'>
          <span>{'twinkay'}님을 위한 상품</span>
          <span>{dday(product.closeAt)} 남음</span>
        </div>
        <p className='text-lg font-bold text-gray-100 mt-2'>{product.name}</p>
        <div className='flex justify-between items-end text-sm text-gray-50'>
          <span className='text-xl font-bold'>{wonitzie(product.price)}</span>
          <span className='text-gray-50'>
            {index} / {size}
          </span>
        </div>
      </div>
    </div>
  )
}

HomeMainProduct.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.number,
  size: PropTypes.number,
}

export default HomeMainProduct
