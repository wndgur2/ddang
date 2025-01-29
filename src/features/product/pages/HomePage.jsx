import HomeBiddingList from '../components/HomeBiddingList'
import HomeMainSlider from '../components/HomeMainSlider'
import HomeProductList from '../components/HomeProductList'
import types from '../data/homeProductTypes'

function HomePage() {
  return (
    <div>
      <HomeMainSlider />
      <div className='flex flex-col gap-2 p-4'>
        <HomeBiddingList />
        {types.map(type => (
          <HomeProductList key={type.key} type={type} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
