import handstandingMole from '@/assets/images/handstandingMole.png'
import EditProfileImage from '../components/EditProfileImage'
import usePageName from '../../../hooks/usePageName'

function EditProfilePage() {
  usePageName('프로필 수정')

  return (
    <div className='flex flex-col items-center h-screen bg-white pt-16'>
      <EditProfileImage src={handstandingMole} size={120} />
    </div>
  )
}

export default EditProfilePage
