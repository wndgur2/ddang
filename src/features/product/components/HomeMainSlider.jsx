import products from '../data/products'
import Slider from '../../../components/Slider'
import HomeMainProduct from './HomeMainProduct'

function HomeMainSlider() {
  return (
    <Slider>
      {products.map((product, index) => (
        <HomeMainProduct
          key={index}
          index={index + 1}
          size={products.length}
          product={product}
        />
      ))}
    </Slider>
  )
}

export default HomeMainSlider
