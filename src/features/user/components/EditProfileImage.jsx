import PropTypes from 'prop-types'
import MaterialIcon from '../../../components/icons/MaterialIcon'

function EditProfileImage({ src, size }) {
  return (
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
        className='absoulte left-0 top-0 w-full bg-gray-300 bg-opacity-50 flex justify-center items-center'
        style={{ height: '25%' }}
      >
        <MaterialIcon name='edit' />
      </div>
    </div>
  )
}

EditProfileImage.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
}

export default EditProfileImage
