import PropTypes from 'prop-types'
import MaterialIcon from '@/components/icons/MaterialIcon'

function EditProfileImage({ src, size }) {
  return (
    <div className='flex justify-center items-center'>
      <div
        className='relative rounded-full bg-gray-100 overflow-hidden aspect-square'
        style={{ width: size, height: size }}
      >
        <img
          src={src}
          alt='EditProfileImage'
          className='object-cover w-full h-full'
        />

        <div
          className='absolute bottom-0 left-0 w-full flex justify-center items-center'
          style={{
            height: '25%',
            backgroundColor: 'rgba(209, 213, 219, 0.5)',
          }}
        >
          <MaterialIcon name='edit' filled />
        </div>
      </div>
    </div>
  )
}

EditProfileImage.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

export default EditProfileImage
