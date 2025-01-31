import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProfileImage from './ProfileImage'
import MaterialIcon from '../../../components/icons/MaterialIcon'
import TrustScoreBar from './TrustScoreBar'
import StepTrustBar from './StepTrustBar'

function Profile({ profileSrc, name, trustScore, id }) {
  const userId = 1 // 로그인한 사용자의 id

  return (
    <div className='p-4 bg-white'>
      {/* 프로필 이미지 및 이름 섹션 */}
      <div className='flex items-center'>
        <ProfileImage src={profileSrc} size={64} />
        <div className='flex flex-row justify-between items-center w-full ml-4'>
          <p className='text-md font-semibold'>{name}</p>
          {userId === id ? (
            <Link to='edit-profile'>
              <button
                style={{
                  className: 'text-gray-400',
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
              >
                <MaterialIcon name='edit' filled>
                  edit
                </MaterialIcon>
              </button>
            </Link>
          ) : (
            <Link to='gathered-items'>
              <button className='text-sm bg-gray-100 text-black py-2 px-2 rounded-lg cursor-pointer'>
                구독하기
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* 신뢰도 섹션 */}
      <div className='mt-6'>
        <div className='flex items-center justify-between'>
          <p className='text-ddblue-400 font-bold text-[14px]'>신뢰도</p>
          <span className='text-sm font-bold'>{trustScore}%</span>
        </div>
        <div className='mt-4'>
          {/* 5단계 중 현재 3단계 */}
          <TrustScoreBar trustScore={12} />
          {/* <StepTrustBar steps={5} currentStep={2} /> */}
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  profileSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  trustScore: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
}

export default Profile
