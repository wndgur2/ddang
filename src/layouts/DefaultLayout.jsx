import { Outlet } from 'react-router-dom'
import DefaultHeader from '../components/headers/DefaultHeader'
import PropTypes from 'prop-types'
import { useState } from 'react'

function DefaultLayout({ back }) {
  const [title, setTitle] = useState('...')
  return (
    <>
      <DefaultHeader back={back} title={title} />
      <Outlet context={{ setTitle }} />
    </>
  )
}

DefaultLayout.propTypes = {
  back: PropTypes.bool,
}

export default DefaultLayout
