import usePageName from '@/hooks/usePageName'
import PropTypes from 'prop-types'
import example from '../data/product.js'
import ProductDetailItem from '../components/ProductDetailItem.jsx'
import ProfileSmall from '../../user/components/ProfileSmall.jsx'
import ProductItemVertical from '../components/ProductItemVertical.jsx'
import Slider from '../../../components/Slider.jsx'
import MaterialIcon from '../../../components/icons/MaterialIcon.jsx'

/*
export default {
  auction: {
    auctionId: 123,
    title: '헤라 써머 라일락 (새제품)',
    productName: '헤라 립스틱 160 써머 라일락',
    categoryId: 102,
    minimumBid: 20000,
    currentBidPrice: 362000,
    'instantHammerPrice ': 380000,
    myBidPrice: 362000,
    startTime: '2025-01-20 06:30:00',
    endTime: '2025-01-21 06:30:00',
    hammeredTime: null,
    content:
      '헤라 립스틱 160 써머 라일락 (새제품)입니다. 포장상태 그대로고 상자개봉도 안했습니다. 2026년 6월까지 교환 환불 안되오니 문의주세요',
    location: '서울특별시 강남구 역삼동',
    isFavorite: true,
    favoriteCount: 12,
    bidderCount: 7,
    bidCount: 11,
    chattingRoomId: 123,
    photos: [
      'https://example.com/uploads/auction123_photo1.jpg',
      'https://example.com/uploads/auction123_photo2.jpg',
    ],
    tradeType: {
      isPackage: true,
      isDirect: false,
      pay: 'prepaid',
    },
  },
  seller: {
    memberId: 456,
    nickname: '감성탐방러',
    reliability: 45,
    photo: 'https://example.com/uploads/auction123_photo1.jpg',
  },
}

*/

function ProductDetailPage({ product = example }) {
  usePageName('제품상세')
  return (
    <div className='flex flex-col gap-4'>
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
      <div className='flex flex-col px-4 text-gray-700 gap-4'>
        <h1 className='text-lg font-bold text-gray-950'>
          {product.auction.productName}
        </h1>
        <div>
          <ProductDetailItem
            name='입찰시작가'
            value={product.auction.minimumBid}
            bold
          />
          <ProductDetailItem
            name='즉시낙찰가'
            value={product.auction.instantHammerPrice}
            bold
          />
        </div>
        <div className='flex gap-2 text-sm font-bold'>
          <div className='flex items-center'>
            <MaterialIcon name='person_raised_hand' filled size={18} />
            <span>입찰자</span>
            <span>{product.auction.bidderCount}명</span>
          </div>
          <div className='flex items-center'>
            <MaterialIcon name='front_hand' filled size={18} />
            <span>입찰</span>
            <span>{product.auction.bidCount}건</span>
          </div>
        </div>
        <hr className='border-gray-200' />
        <p>{product.auction.title}</p>
        <div>
          <span>{product.auction.categoryId} </span>
          <span>{product.auction.createdAt}</span>
        </div>
        <p>{product.auction.content}</p>
        <hr className='border-gray-200' />
        <ProductDetailItem name='개찰 시각' value={product.auction.startTime} />
        <ProductDetailItem name='종료 시각' value={product.auction.endTime} />
        <ProductDetailItem name='거래 방식' value={product.auction.tradeType} />
        <ProductDetailItem
          name='직거래 장소'
          value={product.auction.location}
        />
        <hr className='border-gray-200' />
        <ProfileSmall user={product.seller} />
        <hr className='border-gray-200' />
        <h1>{product.auction.productName} 관련 매물</h1>
        <div className='flex h-48'>
          <ProductItemVertical />
          <ProductItemVertical />
          <ProductItemVertical />
        </div>
      </div>
    </div>
  )
}

ProductDetailPage.propTypes = {
  product: PropTypes.object,
}

export default ProductDetailPage
