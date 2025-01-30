import PropTypes from 'prop-types'
import HomeListHeader from './HomeListHeader'
import ProductItemVertical from './ProductItemVertical'
import products from '../data/products'

function HomeProductList({ type }) {
  return (
    <section>
      <HomeListHeader type={type}></HomeListHeader>
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col gap-4'>
          <ProductItemVertical product={products[0]} />
          <ProductItemVertical product={products[1]} />
        </div>
        <div className='flex flex-col gap-4'>
          <ProductItemVertical product={products[2]} />
          <ProductItemVertical product={products[3]} />
        </div>
      </div>
    </section>
  )
}

HomeProductList.propTypes = {
  type: PropTypes.object.isRequired,
}

export default HomeProductList
