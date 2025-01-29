import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ProfileImage from './ProfileImage'
import MaterialIcon from '../../../components/icons/MaterialIcon'

function Profile({ profileSrc, name, trustScore }) {
  return (
    <div className='p-4 bg-white'>
      {/* 프로필 이미지 및 이름 섹션 */}
      <div className='flex items-center'>
        <ProfileImage src={profileSrc} size={64} />
        <div className='ml-4'>
          <div className='flex items-center space-x-2'>
            <h3 className='text-lg font-semibold'>{name}</h3>
            <Link to='/edit-profile'>
              <button
                style={{
                  color: 'var(--color-gray-400)',
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
          </div>
        </div>
      </div>

      {/* 신뢰도 섹션 */}
      <div className='mt-6'>
        <div className='flex items-center justify-between'>
          <p className='text-ddblue-400 font-bold text-[14px]'>신뢰도</p>
          <span className='text-sm font-bold'>{trustScore}%</span>
        </div>
        <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-4'>
          <div
            className='h-full rounded-full bg-ddblue-400 text-[14px]'
            style={{ width: `${trustScore}%` }}
          ></div>
        </div>
        <hr className='mt-5 border-gray-200' />
      </div>
    </div>
  )
}

Profile.propTypes = {
  profileSrc: PropTypes.string.isRequired, // 프로필 이미지 경로
  name: PropTypes.string.isRequired, // 이름
  trustScore: PropTypes.number.isRequired, // 신뢰도 (0~100)
}

export default Profile
