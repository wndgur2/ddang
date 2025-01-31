import PropTypes from 'prop-types'
import MaterialIcon from '@/components/icons/MaterialIcon'

function HomeListHeader({ type }) {
  return (
    <header
      className='flex flex-row items-center justify-between py-4 text-gray-900'
      onClick={() => console.log(`${type.key} clicked`)}
    >
      <div className='flex flex-row items-center gap-2'>
        <MaterialIcon name={type.icon} size={22} filled />
        <span className='text-sm font-bold'>
          {(type.key == 'FOR_YOU' || type.key == 'bidding') && 'twinkay님'}
          {type.title}
        </span>
      </div>
      <MaterialIcon name='chevron_right' size={24} />
    </header>
  )
}

HomeListHeader.propTypes = {
  type: PropTypes.object.isRequired,
}

export default HomeListHeader
