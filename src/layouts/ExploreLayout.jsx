import { Outlet } from 'react-router-dom'
import SearchHeader from '../components/headers/SearchHeader'
import Navbar from '../components/navbar/Navbar'
import style from './Layout.module.css'
function ExploreLayout() {
  return (
    <>
      <SearchHeader />
      <div className={style.page}>
        <Outlet />
      </div>
      <Navbar />
    </>
  )
}

export default ExploreLayout
