import logo from '@/assets/images/logo.png'
import trademark from '@/assets/images/trademark.png'
import DefaultButton from '../../../components/buttons/DefaultButton'
import { Link, useNavigate } from 'react-router-dom'

function WelcomePage() {
  const route = useNavigate()
  return (
    <div className='w-full h-dvh flex flex-col items-center justify-between p-4'>
      <div></div>
      <img src={logo} alt='main poster' className='object-contain w-60 pb-8' />
      <img
        src={trademark}
        alt='main poster'
        className='object-contain w-78 pb-24'
      />
      <div className='w-full flex flex-col gap-6 mb-3'>
        <DefaultButton callback={() => route('/popup/signup')}>
          시작하기
        </DefaultButton>
        <p className='text-center text-gray-400'>
          이미 계정이 있나요?{' '}
          <Link className='text-ddblue-400 font-bold' to={'/popup/login'}>
            로그인
          </Link>
        </p>
      </div>
    </div>
  )
}

export default WelcomePage
