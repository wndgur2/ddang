import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
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
