import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import NavButton from './NavButton'

function Navbar() {
  const getClassName = ({ isActive }) => {
    return `w-1/5 ${isActive ? style.active : style.inactive}`
  }
  const navs = [
    { to: '/explore', iconName: 'home', text: '홈', end: true },
    { to: '/explore/search', iconName: 'manage_search', text: '물건찾기' },
    { to: '/popup/product/register', iconName: 'add', text: '등록' },
    { to: '/bidding-list', iconName: 'gavel', text: '입찰현황' },
    { to: '/mypage', iconName: 'person', text: '마이' },
  ]
  return (
    <nav
      className={`flex grow flex-row justify-around items-center bg-white ${style.navbar}`}
    >
      {navs.map((nav, index) => (
        <NavLink key={index} className={getClassName} to={nav.to} end={nav.end}>
          <NavButton iconName={nav.iconName}>{nav.text}</NavButton>
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
