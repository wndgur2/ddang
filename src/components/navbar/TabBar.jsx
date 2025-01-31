import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function TabBar({ routes }) {
  const getClassName = ({ isActive }) => `
  text-center px-2 py-1 font-bold ${
    isActive ? 'border-b-2 border-gray-950' : 'border-0'
  }
    `
  return (
    <div className='flex gap-4 px-4 py-2'>
      {routes.map((route, index) => (
        <NavLink key={index} to={route.to} className={getClassName}>
          {route.name}
        </NavLink>
      ))}
    </div>
  )
}

TabBar.propTypes = {
  routes: PropTypes.array,
}

export default TabBar
