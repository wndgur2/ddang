import PropTypes from 'prop-types'
import { dday } from '@/utils/Dday'
import MaterialIcon from '@/components/icons/MaterialIcon'
import { wonitzie } from '@/utils/wonitize'
import { trimText } from '@/utils/trimText'
import { Link } from 'react-router-dom'

function ProductItemSmall({ product }) {
  const price = wonitzie(product.currentBidPrice)
  const title = trimText(product.title, 7)
  const isTop = product.currentBidPrice === product.myBidPrice
  const didBid = product.myBidPrice > 0
  return (
    <Link
      to={`/popup/product/${product.auctionId}`}
      className='flex flex-col flex-shrink-0 snap-center whitespace-nowrap text-sm'
      style={{
        width: 'calc(33% - var(--spacing))',
      }}
    >
      <img
        src={product.photo}
        alt={product.title}
        className='w-full aspect-square rounded-xl object-cover bg-white'
        style={{ filter: 'brightness(0.96)' }}
      />
      <span className='text-gray-800 mt-1 mb-0.5 w-fit'>{title}</span>
      {isTop ? (
        <div
          className='w-fit h-fit px-1.5 flex flex-row items-center
          rounded-lg bg-ddblue-400 text-white'
        >
          <MaterialIcon name='crown' filled size={20} />
          <span className='font-bold'>{price}</span>
        </div>
      ) : (
        <div className='flex flex-row items-center whitespace-nowrap gap-0.5'>
          {didBid && (
            <div
              className='flex items-center px-1 py-0.5 rounded-lg bg-gray-400
            text-xs text-white font-bold'
            >
              뺏김
            </div>
          )}
          <span className='font-bold text-gray-700 text-md'>{price}</span>
        </div>
      )}
      <span className='text-sm text-gray-600 mt-0.5 w-fit'>
        {dday(product.endTime)} 남음
      </span>
    </Link>
  )
}

ProductItemSmall.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductItemSmall
