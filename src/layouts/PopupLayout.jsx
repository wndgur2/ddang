import { Outlet } from 'react-router-dom'
import DefaultHeader from '../components/headers/DefaultHeader'

function PopupLayout() {
  return (
    <>
      <DefaultHeader
        back={true}
        icon="icon"
        siblings={[]}
      />
      <Outlet />
    </>
  )
}

export default PopupLayout
