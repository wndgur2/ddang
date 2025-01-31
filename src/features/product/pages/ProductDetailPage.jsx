import usePageName from '@/hooks/usePageName'
import PropTypes from 'prop-types'
import example from '../data/product.js'
import ProductDetailItem from '../components/ProductDetailItem.jsx'
import ProfileSmall from '../../user/components/ProfileSmall.jsx'
import Slider from '@/components/Slider.jsx'
import MaterialIcon from '@/components/icons/MaterialIcon.jsx'
import ProductItemSmall from '../components/ProductItemSmall.jsx'
import products from '../data/products.js'
import StickyContainer from '@/components/StickyContainer.jsx'
import IconButton from '@/components/buttons/IconButton.jsx'
import FavoriteButton from '@/components/icons/FavoriteButton.jsx'
import DefaultButton from '@/components/buttons/DefaultButton.jsx'
import { dday } from '@/utils/Dday.js'
import { useState } from 'react'

function ProductDetailPage({ product = example }) {
  usePageName('제품상세')
  const minimumBid = Intl.NumberFormat('ko-KR').format(
    product.auction.minimumBid,
  )
  const instantHammerPrice = Intl.NumberFormat('ko-KR').format(
    product.auction.instantHammerPrice,
  )

  const currentBidPrice = Intl.NumberFormat('ko-KR').format(
    product.auction.currentBidPrice,
  )

  // load product by id

  return (
    <div className='flex flex-col gap-2 pb-72'>
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
      <StickyContainer>
        <div className='flex justify-between items-center mb-2'>
          <span className='text-sm'>
            마감까지 {dday(product.auction.endTime)}
          </span>
          <div className='flex gap-4'>
            <IconButton
              icon={{
                name: 'forum',
                size: 28,
                className: 'text-gray-500',
                filled: true,
              }}
            />
            <FavoriteButton liked size={28} />
          </div>
        </div>
        <div className='flex'>
          <p className='font-bold'>현재 {currentBidPrice}원</p>
        </div>
        <input
          type='number'
          placeholder={currentBidPrice}
          className='flex grow border-b-2 w-full font-bold text-end text-2xl'
        />
        <div className='flex gap-2 leading-none text-sm py-4'>
          <button className='bg-ddblue-400 text-white p-2 font-bold rounded-md'>
            +1,000
          </button>
          <button className='bg-ddblue-500 text-white p-2 font-bold rounded-md'>
            +10,000
          </button>
        </div>
        <div className='flex gap-4 mt-2'>
          <DefaultButton type={'red'}>
            <span>즉시낙찰</span>
          </DefaultButton>
          <DefaultButton>
            <span>응찰</span>
          </DefaultButton>
        </div>
      </StickyContainer>
    </div>
  )
}

ProductDetailPage.propTypes = {
  product: PropTypes.object,
}

export default ProductDetailPage
