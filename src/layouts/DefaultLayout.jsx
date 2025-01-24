import { Outlet } from 'react-router-dom'
import DefaultHeader from '../components/headers/DefaultHeader'

function DefaultLayout() {
  // teset
  return (
    <>
      <DefaultHeader />
      <Outlet />
    </>
  )
}

export default DefaultLayout
