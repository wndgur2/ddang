import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import NavButton from './NavButton'

function Navbar() {
  const getClassName = ({ isActive }) => {
    return isActive ? style.active : style.inactive
  }
  return (
    <nav
      className={`flex grow flex-row justify-around items-center border-t-1i ${style.navbar}`}
    >
      <NavLink className={getClassName} to='/explore' end>
        <NavButton iconName='home'>홈</NavButton>
      </NavLink>
      <NavLink className={getClassName} to='/explore/search'>
        <NavButton iconName='manage_search'>물건찾기</NavButton>
      </NavLink>
      <NavLink className={getClassName} to={'/popup/product/register'}>
        <NavButton iconName='add'>등록</NavButton>
      </NavLink>
      <NavLink className={getClassName} to={'/bidding-list'}>
        <NavButton iconName='gavel'>입찰현황</NavButton>
      </NavLink>
      <NavLink className={getClassName} to={'/mypage'}>
        <NavButton iconName='person'>마이</NavButton>
      </NavLink>
    </nav>
  )
}

export default Navbar
