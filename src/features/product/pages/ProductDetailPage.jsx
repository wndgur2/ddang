import usePageName from '@/hooks/usePageName'
import PropTypes from 'prop-types'
import example from '../data/product.js'
import ProductDetailItem from '../components/ProductDetailItem.jsx'
import ProfileSmall from '../../user/components/ProfileSmall.jsx'
import Slider from '../../../components/Slider.jsx'
import MaterialIcon from '../../../components/icons/MaterialIcon.jsx'
import ProductItemSmall from '../components/ProductItemSmall.jsx'
import products from '../data/products.js'

function ProductDetailPage({ product = example }) {
  usePageName('제품상세')
  const minimumBid = Intl.NumberFormat('ko-KR').format(
    product.auction.minimumBid,
  )
  const instantHammerPrice = Intl.NumberFormat('ko-KR').format(
    product.auction.instantHammerPrice,
  )

  // load product by id

  return (
    <div className='flex flex-col gap-2 pb-48'>
      <Slider>
        {product.auction.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={product.auction.productName}
            className='w-full aspect-square object-cover snap-center'
          />
        ))}
      </Slider>
      <div className='flex flex-col gap-6 p-4'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-lg font-bold text-gray-950'>
            {product.auction.productName}
          </h1>
          <div className='flex flex-col gap-1 text-gray-900'>
            <ProductDetailItem
              name='입찰시작가'
              value={minimumBid + '원'}
              bold
            />
            <ProductDetailItem
              name='즉시낙찰가'
              value={instantHammerPrice + '원'}
              bold
            />
          </div>
          <div className='flex gap-4 text-sm font-bold text-gray-900'>
            <div className='flex items-center gap-0.5'>
              <MaterialIcon name='person_raised_hand' filled size={18} />
              <span>입찰자</span>
              <span>{product.auction.bidderCount}명</span>
            </div>
            <div className='flex items-center gap-0.5'>
              <MaterialIcon name='front_hand' filled size={18} />
              <span>입찰</span>
              <span>{product.auction.bidCount}건</span>
            </div>
          </div>
        </div>
        <hr className='border-gray-200' />
        <div className='flex flex-col gap-1'>
          <p className='font-bold text-lg text-gray-950 leading-none'>
            {product.auction.title}
          </p>
          <div className='text-gray-500 text-sm'>
            <span>{product.auction.categoryId} </span>
            <span>{product.auction.createdAt}</span>
          </div>
          <p className='pt-2 text-black tracking-tight'>
            {product.auction.content}
          </p>
        </div>
        <hr className='border-gray-200' />
        <div className='flex flex-col'>
          <ProductDetailItem
            name='개찰 시각'
            value={product.auction.startTime}
          />
          <ProductDetailItem name='종료 시각' value={product.auction.endTime} />
          <ProductDetailItem
            name='거래 방식'
            value={product.auction.tradeType}
          />
          <ProductDetailItem
            name='직거래 장소'
            value={product.auction.location}
          />
        </div>
        <hr className='border-gray-200' />
        <div>
          <ProfileSmall user={product.seller} />
        </div>
        <hr className='border-gray-200' />
        <div className='flex flex-col gap-3'>
          <h1 className='font-bold'>{product.auction.productName} 관련 매물</h1>
          <div
            className='flex flex-row gap-2 pb-1
        overflow-x-scroll snap-x snap-madatory'
          >
            {products.map((product, i) => (
              <ProductItemSmall product={{ ...product, id: i }} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

ProductDetailPage.propTypes = {
  product: PropTypes.object,
}

export default ProductDetailPage
