import { Outlet } from 'react-router-dom'
import SearchHeader from '../components/headers/SearchHeader'
import Navbar from '../components/navbar/Navbar'

function ExploreLayout() {
  return (
    <>
      <SearchHeader />
      <div className='flex flex-col gap-1 px-4'>
        <Outlet />
      </div>
      <Navbar />
    </>
  )
}

export default ExploreLayout
