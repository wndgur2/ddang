import { Outlet } from 'react-router-dom'
import SearchHeader from '../components/headers/SearchHeader'
import Navbar from '../components/navbar/Navbar'
function ExploreLayout() {
  return (
    <>
      <SearchHeader />
      <Outlet />
      <div className='py-12'></div>
      <Navbar />
    </>
  )
}

export default ExploreLayout
