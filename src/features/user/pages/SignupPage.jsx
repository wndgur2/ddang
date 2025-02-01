import { useNavigate } from 'react-router-dom'
import DefaultButton from '@/components/buttons/DefaultButton'
import TextInput from '@/components/form/TextInput'
import usePageName from '@/hooks/usePageName'
import StickyContainer from '@/components/StickyContainer'

function SignupPage() {
  usePageName('회원가입')
  const route = useNavigate()
  return (
    <div className='flex flex-col gap-6 p-4'>
      <div>
        <TextInput label='별명' required />
        <TextInput label='이메일' required type='email' />
        <TextInput label='이름' required />
      </div>
      <div>
        <TextInput label='비밀번호' required type='password' />
        <TextInput label='비밀번호 확인' required type='password' />
      </div>
      <StickyContainer>
        <DefaultButton
          onClick={() =>
            route('/explore', {
              state: { welcome: true },
            })
          }
        >
          회원가입
        </DefaultButton>
      </StickyContainer>
    </div>
  )
}

export default SignupPage
