import PropTypes from 'prop-types'

function ProfileImage({ src, size }) {
  return (
    // image wrapper
    <div className={`rounded-full bg-gray-200 overflow-hidden aspect-square`}>
      <img src={src} className={`object-cover`} width={size} />
    </div>
  )
}

ProfileImage.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
}

export default ProfileImage
