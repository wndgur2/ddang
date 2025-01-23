import { Outlet } from 'react-router-dom'
import SearchHeader from '../components/headers/SearchHeader'

function ExploreLayout() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  )
}

export default ExploreLayout
