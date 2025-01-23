import { NavLink } from 'react-router-dom'
import './Navbar.css'
import FilledIcon from './icons/FilledIcon'

function Navbar() {
  const getClassName = ({ isActive }) => {
    console.log(isActive)
    return isActive ? 'active' : 'inactive'
  }
  return (
    <nav>
      <ul className='flex flex-row justify-around'>
        <li>
          <NavLink className={getClassName} end to={'/explore'}>
            <FilledIcon name='home' />홈
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to={'/explore/search'}>
            <FilledIcon name='home' />
            물건찾기
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to={'/popup/product/register'}>
            <FilledIcon name='home' />
            등록
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to={'/bidding-list'}>
            <FilledIcon name='home' />
            입찰현황
          </NavLink>
        </li>
        <li>
          <NavLink className={getClassName} to={'/mypage'}>
            <FilledIcon name='home' />
            마이
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
