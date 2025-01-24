import { Outlet } from 'react-router-dom'
import DefaultHeader from '../components/headers/DefaultHeader'

function PopupLayout() {
  return (
    <>
      <DefaultHeader back icon='edit' />
      <Outlet />
    </>
  )
}

export default PopupLayout
