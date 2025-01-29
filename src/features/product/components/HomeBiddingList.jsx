import HomeListHeader from './HomeListHeader'
import ProductItemSmall from './ProductItemSmall'
import products from '../data/products'

function HomeBiddingList() {
  return (
    <div>
      <HomeListHeader
        type={{
          key: 'bidding',
          title: ' 입찰 현황',
          icon: 'person_raised_hand',
        }}
      />
      <div className='flex flex-row'>
        {products.map(product => (
          <ProductItemSmall key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default HomeBiddingList
