import { Outlet } from 'react-router-dom'
import DefaultHeader from '../components/headers/DefaultHeader'
import PropTypes from 'prop-types'

function DefaultLayout({ back }) {
  // teset
  return (
    <>
      <DefaultHeader back={back} title={'default'} />
      <Outlet />
    </>
  )
}

DefaultLayout.propTypes = {
  back: PropTypes.bool,
}

export default DefaultLayout
