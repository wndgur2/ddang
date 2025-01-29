import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import MaterialIcon from '../../../components/icons/MaterialIcon'

function MyPageMenu({ icon, title, to }) {
  return (
    <Link to={to} className='flex items-center gap-2 p-4'>
      <MaterialIcon {...icon} />
      <span className='font-[Inter] font-bold text-[16px] text-gray-950'>
        {title}
      </span>
    </Link>
  )
}

MyPageMenu.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  to: PropTypes.string,
}

export default MyPageMenu
