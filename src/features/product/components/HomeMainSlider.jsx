import ImageSlider from './ImageSlider'
import products from '../data/products'

function HomeMainSlider() {
  const images = products.map(product => product.image)
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  )
}

export default HomeMainSlider
