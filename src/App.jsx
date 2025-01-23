import './App.css'
import Header from './layouts/headers/Header'
import Navbar from './layouts/Navbar'
import { initFCM } from './features'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState('')
  initFCM().then((token) => {
    setToken(token)
  })

  return (
    <>
      <Header />
      <div>contents</div>
      {token}
      <Navbar />
    </>
  )
}

export default App
