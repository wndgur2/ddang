import { useState } from 'react'
import FilterChipArray from '../components/FilterChipArray.jsx'
import FilterChipBool from '../components/FilterChipBool.jsx'
import ProductListItem from '../components/ProductListItem.jsx'
import products from '../data/products.js'

function ProductListPage() {
  const [isBidding, setIsBidding] = useState(false)
  const [category, setCategory] = useState('')
  const [dealType, setDealType] = useState('')
  return (
    <div className='flex flex-col'>
      <div className='flex mb-2 px-4 py-2'>
        <FilterChipArray values={['거래방식', '직거래', '택배']} index={0} />
        <FilterChipArray values={['카테고리', '전자제품', '의류']} index={0} />
        <FilterChipBool
          text='경매중'
          value={isBidding}
          callback={() => {
            setIsBidding(!isBidding)
          }}
        />
      </div>
      <div className='flex flex-col'>
        {products.map(product => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductListPage
