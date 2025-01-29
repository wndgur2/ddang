import PropTypes from 'prop-types'
import HomeListHeader from './HomeListHeader'

function HomeProductList({ type }) {
  return (
    <section>
      <HomeListHeader type={type}></HomeListHeader>
      <div className='grid grid-cols-2 gap-2'>
        <div className='flex flex-col gap-2'>
          <div className='bg-gray-200 h-32'></div>
          <div className='bg-gray-200 h-32'></div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='bg-gray-200 h-32'></div>
          <div className='bg-gray-200 h-32'></div>
        </div>
      </div>
    </section>
  )
}

HomeProductList.propTypes = {
  type: PropTypes.object.isRequired,
}

export default HomeProductList
