import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProfileImage from './ProfileImage'
import TrustScoreBar from './TrustScoreBar'

function Profile({ profileSrc, name, trustScore }) {
  return (
    <div className='p-4 bg-white'>
      {/* 프로필 이미지 및 이름 섹션 */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <ProfileImage src={profileSrc} size={64} />
          <div className='ml-4'>
            <h3 className='text-lg font-semibold'>{name}</h3>
          </div>
        </div>
        <Link to='gathered-items'>
          <button className='bg-gray-100 text-black py-2 px-4 rounded-lg cursor-pointer'>
            구독하기
          </button>
        </Link>
      </div>

      {/* 신뢰도 섹션 */}
      <div className='mt-6'>
        <div className='flex items-center justify-between'>
          <p className='text-ddblue-400 font-bold text-[14px]'>신뢰도</p>
          <span className='text-sm font-bold'>{trustScore}%</span>
        </div>
        <TrustScoreBar trustScore={trustScore} />
      </div>
    </div>
  )
}

Profile.propTypes = {
  profileSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  trustScore: PropTypes.number.isRequired,
}

export default Profile
