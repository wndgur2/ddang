import handstandingMole from '@/assets/images/handstandingMole.png'
import EditProfileImage from '../components/EditProfileImage'
import usePageName from '@/hooks/usePageName'
import TextInput from '@/components/form/TextInput'

function EditProfilePage() {
  usePageName('프로필 수정')

  return (
    <div className='flex flex-col bg-white p-4 pt-16 gap-8'>
      <EditProfileImage src={handstandingMole} size={120} />
      <TextInput label='별명' required />
    </div>
  )
}

export default EditProfilePage
