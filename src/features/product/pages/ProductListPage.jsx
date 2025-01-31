import { useState } from 'react'
import FilterChipArray from '../components/FilterChipArray.jsx'
import FilterChipBool from '../components/FilterChipBool.jsx'
import ProductListItem from '../components/ProductListItem.jsx'
import MaterialIcon from '@/components/icons/MaterialIcon.jsx'
import productsData from '../data/products.js'
import PropTypes from 'prop-types'

function ProductListPage({ filter = _ => _ }) {
  const [isBidding, setIsBidding] = useState(false)
  const [category, setCategory] = useState('')
  const [dealType, setDealType] = useState('')
  const products = productsData.filter(filter)
  return (
    <div className='flex flex-col'>
      <div className='flex px-4 pt-3 pb-2 justify-between items-center'>
        <div className='flex gap-1 h-8'>
          <FilterChipArray values={['거래방식', '직거래', '택배']} index={0} />
          <FilterChipArray
            values={['카테고리', '전자제품', '의류']}
            index={0}
          />
          <FilterChipBool
            text='경매중'
            value={isBidding}
            onChange={() => {
              setIsBidding(!isBidding)
            }}
          />
        </div>
        <div className='font-bold text-sm flex gap-1 items-center text-gray-950'>
          <MaterialIcon name='sort' size={18} />
          <div>최신순</div>
        </div>
      </div>
      <div className='flex flex-col'>
        {products.map(product => (
          <ProductListItem key={product.auctionId} product={product} />
        ))}
      </div>
    </div>
  )
}

ProductListPage.propTypes = {
  filter: PropTypes.func,
}

export default ProductListPage
