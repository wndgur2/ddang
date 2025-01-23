import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row justify-around">
        <li>
          <NavLink
            end
            to={'/explore'}
          >
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to={'/explore/search'}>물건찾기</NavLink>
        </li>
        <li>
          <NavLink to={'/popup/product/register'}>등록</NavLink>
        </li>
        <li>
          <NavLink to={'/bidding-list'}>입찰현황</NavLink>
        </li>
        <li>
          <NavLink to={'/mypage'}>마이</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
