import PropTypes from 'prop-types'
import { dday } from '@/utils/Dday'
import MaterialIcon from '@/components/icons/MaterialIcon'
import { wonitzie } from '@/utils/wonitize'
import { trimText } from '@/utils/trimText'

function ProductItemSmall({ product }) {
  const price = wonitzie(product.price)
  const title = trimText(product.title, 7)
  return (
    <div
      className='flex flex-col flex-shrink-0 snap-center whitespace-nowrap text-sm'
      style={{
        width: 'calc(33% - var(--spacing))',
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        className='w-full aspect-square rounded-xl object-cover bg-white'
        style={{ filter: 'brightness(0.96)' }}
      />
      <span className='text-gray-800 mt-0.5 w-fit'>{title}</span>
      {product.isTop ? (
        <div
          className='w-fit h-fit px-1 flex flex-row items-center gap-0.5
          rounded-lg bg-ddblue-400 text-white'
        >
          <MaterialIcon name='crown' filled size={20} />
          <span className='font-bold'>{price}</span>
        </div>
      ) : (
        <div className='flex flex-row items-center whitespace-nowrap gap-1'>
          <div
            className='flex items-center px-1 py-0.5 rounded-lg bg-gray-400
            text-xs text-white font-bold'
          >
            뺏김
          </div>
          <span className='font-bold text-gray-700 text-md'>{price}</span>
        </div>
      )}
      <span className='text-sm text-gray-600 mt-0.5 w-fit'>
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
