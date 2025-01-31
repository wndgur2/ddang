import PropTypes from 'prop-types'
import ProfileImage from './ProfileImage'

function ProfileSmall({ user }) {
  const icon =
    user.reliability > 70 ? '😁' : user.reliability > 40 ? '😊' : '😒'
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <ProfileImage src={user.photo} size={40} />
        <h1 className='font-bold text-sm'>{user.nickname}</h1>
      </div>
      <div className='flex flex-col items-end gap-1'>
        <div className='flex items-center gap-1'>
          <div className='flex flex-col items-end'>
            <span className='text-ddblue-400 font-bold w-fit'>
              {user.reliability}%
            </span>
            <div className='bg-gray-200 h-1 w-12 rounded-full overflow-hidden'>
              <div
                className='bg-ddblue-400 flex h-full'
                style={{ width: `${user.reliability}%` }}
              ></div>
            </div>
          </div>
          <span className='text-2xl leading-none tracking-tighter'>{icon}</span>
        </div>
        <span className='text-xs text-gray-400'>신뢰도</span>
      </div>
    </div>
  )
}

ProfileSmall.propTypes = {
  user: PropTypes.object,
}

export default ProfileSmall
