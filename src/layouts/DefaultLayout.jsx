import { Outlet } from 'react-router-dom'
import DefaultHeader from '../components/headers/DefaultHeader'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'

function DefaultLayout({ back }) {
  const [title, setTitle] = useState('...')
  return (
    <>
      <DefaultHeader back={back} title={title} />
      <div className='flex flex-col gap-1 px-4'>
        <Outlet context={{ setTitle }} />
      </div>
      {back || <Navbar />}
    </>
  )
}

DefaultLayout.propTypes = {
  back: PropTypes.bool,
}

export default DefaultLayout
