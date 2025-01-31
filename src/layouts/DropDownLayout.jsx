import PropTypes from 'prop-types'
import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import DropDownHeader from '../components/headers/DropDownHeader'

function DropDownLayout({ back, routes }) {
  const [title, setTitle] = useState('...')

  return (
    <>
      <DropDownHeader back={back} title={title} routes={routes} />
      <Outlet context={{ setTitle }} />
      {back || <div className='py-8'></div>}
      {back || <Navbar />}
    </>
  )
}

DropDownLayout.propTypes = {
  back: PropTypes.bool,
  routes: PropTypes.array,
}

export default DropDownLayout
