import ProductListItem from '../components/ProductListItem.jsx'
import products from '../data/products.js'

function ProductListPage() {
  return (
    <div className='flex flex-col'>
      <div className='mb-2'>filters</div>
      <div className='flex flex-col'>
        {products.map(product => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductListPage
