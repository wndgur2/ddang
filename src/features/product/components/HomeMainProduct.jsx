import PropTypes from 'prop-types'
import { dday } from '../../../utils/Dday'
import { Link } from 'react-router-dom'

function HomeMainProduct({ product, index, size }) {
  const price = Intl.NumberFormat('ko-KR').format(product.currentBidPrice)
  return (
    <Link
      to={`/popup/product/${product.auctionId}`}
      className='relative aspect-square w-full flex-shrink-0 snap-center'
    >
      <div className='bg-white brightness-96'>
        <img
          src={product.photo}
          alt='product'
          className='aspect-square w-full object-contain'
        />
      </div>
      <div
        className='absolute z-1 w-full bottom-0 px-3 py-2 text-white'
        style={{ backgroundColor: '#00000060' }}
      >
        <div className='flex justify-between text-sm text-gray-50'>
          <span>{'twinkay'}님을 위한 상품</span>
          <span>{dday(product.endTime)} 남음</span>
        </div>
        <p className='text-lg font-bold text-gray-100 mt-4'>{product.name}</p>
        <div className='flex justify-between items-end text-sm '>
          <span className='text-xl font-bold tracking-wide'>{price}원</span>
          <span className='text-gray-50'>
            {index} / {size}
          </span>
        </div>
      </div>
    </Link>
  )
}

HomeMainProduct.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.number,
  size: PropTypes.number,
}

export default HomeMainProduct
