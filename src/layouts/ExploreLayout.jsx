import { Outlet } from 'react-router-dom'
import SearchHeader from '../components/headers/SearchHeader'

function ExploreLayout() {
  return (
    <>
      <SearchHeader />
      <div className='flex flex-col gap-1'>
        <Outlet />
      </div>
    </>
  )
}

export default ExploreLayout
