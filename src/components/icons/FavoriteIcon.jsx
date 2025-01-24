import PropTypes from 'prop-types'
import MaterialIcon from './MaterialIcon'

function FavoriteIcon({ liked }) {
  const style = {
    filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))',
  }
  return (
    <MaterialIcon
      name='favorite'
      color={liked ? 'var(--ddred-500)' : 'var(--gray-200)'}
      filled
      size={26}
      style={style}
    />
  )
}

FavoriteIcon.propTypes = {
  liked: PropTypes.bool,
}

export default FavoriteIcon
