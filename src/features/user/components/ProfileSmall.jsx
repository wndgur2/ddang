import PropTypes from 'prop-types'
import ProfileImage from './ProfileImage'

function ProfileSmall({ user }) {
  return (
    <div className='flex items-center'>
      <ProfileImage src={user.photo} size={40} />
      <h1>{user.nickname}</h1>
    </div>
  )
}

ProfileSmall.propTypes = {
  user: PropTypes.object,
}

export default ProfileSmall
