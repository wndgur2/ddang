import { useNavigate } from 'react-router-dom'
import DefaultButton from '../../../components/buttons/DefaultButton'
import TextInput from '../../../components/form/TextInput'
import usePageName from '../../../hooks/usePageName'

function SignupPage() {
  usePageName('회원가입')
  const route = useNavigate()
  return (
    <div className='flex flex-col gap-4 p-4'>
      <TextInput label='별명' required />
      <TextInput label='이메일' required />
      <TextInput label='이름' required />
      <TextInput label='비밀번호' required type='password' />
      <TextInput label='비밀번호 확인' required type='password' />
      <div className='fixed left-0 bottom-0 w-full p-4 bg-white border-t border-gray-200'>
        <DefaultButton
          onClick={() =>
            route('/explore', {
              state: { welcome: true },
            })
          }
        >
          회원가입
        </DefaultButton>
      </div>
    </div>
  )
}

export default SignupPage
