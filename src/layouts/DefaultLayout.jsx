import { Outlet } from 'react-router-dom'
import DefaultHeader from '../components/headers/DefaultHeader'

function DefaultLayout() {
  return (
    <>
      <DefaultHeader back={false} icon={null} siblings={[]} />
      <Outlet />
    </>
  )
}

export default DefaultLayout
