import PropTypes from 'prop-types'
import MaterialIcon from '../../../components/icons/MaterialIcon'

function SearchHistory({ text }) {
  return (
    <div
      className='flex items-center justify-between py-1.5 px-3 text-gray-800
    bg-gray-50 m-1 mx-3 rounded-xl'
    >
      <p>{text}</p>
      <MaterialIcon name='close' size={20} />
    </div>
  )
}

SearchHistory.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SearchHistory
