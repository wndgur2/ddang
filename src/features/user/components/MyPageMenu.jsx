import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import MaterialIcon from '../../../components/icons/MaterialIcon'

function MyPageMenu({ icon, title, to }) {
  return (
    <Link to={to}>
      <MaterialIcon {...icon} />
      {title}
    </Link>
  )
}

MyPageMenu.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  to: PropTypes.string,
}

export default MyPageMenu
