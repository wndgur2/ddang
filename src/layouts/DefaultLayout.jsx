import { Outlet } from 'react-router-dom'
import DefaultHeader from '../components/headers/DefaultHeader'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import style from './Layout.module.css'

function DefaultLayout({ back }) {
  const [title, setTitle] = useState('...')
  return (
    <>
      <DefaultHeader back={back} title={title} />
      <div className={style.page}>
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
