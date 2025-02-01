import PropTypes from 'prop-types'
import MaterialIcon from '@/components/icons/MaterialIcon'
import { Link } from 'react-router-dom'

function HomeListHeader({ type, to }) {
  return (
    <Link
      className='flex flex-row items-center justify-between py-4 text-gray-900'
      to={to}
    >
      <div className='flex flex-row items-center gap-2'>
        <MaterialIcon name={type.icon} size={22} filled />
        <span className='text-sm font-bold'>
          {(type.key == 'FOR_YOU' || type.key == 'bidding') && 'twinkay님'}
          {type.title}
        </span>
      </div>
      <MaterialIcon name='chevron_right' size={24} />
    </Link>
  )
}

HomeListHeader.propTypes = {
  type: PropTypes.object.isRequired,
  to: PropTypes.string,
}

export default HomeListHeader
