import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import MaterialIcon from '../../../components/icons/MaterialIcon'

function WelcomeBanner() {
  const location = useLocation()
  const [welcome, setWelcome] = useState(location.state?.welcome)
  const welcomeRef = useRef()
  useEffect(() => {
    if (!location.state) return
    if (location.state.welcome) {
      setTimeout(() => {
        welcomeRef.current.style.opacity = 0
      }, 400)
      setTimeout(() => {
        setWelcome(false)
      }, 1600)
      location.state.welcome = false
    }
  })
  return (
    <>
      {welcome && (
        <div
          ref={welcomeRef}
          className='z-50 fixed inset-0
        flex flex-col items-center justify-center gap-8
        bg-white transition-opacity duration-1200 pointer-events-none'
        >
          <MaterialIcon
            name='check_circle'
            size={64}
            filled
            className={'text-ddblue-400'}
          />
          <span className='text-2xl font-bold text-center text-gray-700'>
            회원가입이 완료되었습니다!
          </span>
        </div>
      )}
    </>
  )
}

export default WelcomeBanner
