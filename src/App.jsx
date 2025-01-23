import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/headers/Header'
import Navbar from './layouts/Navbar'
import { initFCM } from './features'

function App() {
  initFCM().then((token) => {
    console.log('token:', token)
  })

  return (
    <>
      <Header />
      <div>contents</div>
      <img
        src={reactLogo}
        className="react-logo"
        alt="react logo"
      />
      <img
        src={viteLogo}
        className="vite-logo"
        alt="vite logo"
      />
      <Navbar />
    </>
  )
}

export default App
