import { Outlet } from 'react-router-dom'
import DefaultHeader from '../components/headers/DefaultHeader'

function PopupLayout() {
  return (
    <>
      <DefaultHeader back={true} icon='edit' siblings={[]} />
      <Outlet />
    </>
  )
}

export default PopupLayout
