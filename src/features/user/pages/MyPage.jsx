import { Link } from 'react-router-dom'
import MyPageMenu from '../components/MyPageMenu'
import usePageName from '@/hooks/usePageName'
import profileImage from '@/assets/images/profileImage.png'
import Profile from '../components/Profile'
import moneyBag2 from '@/assets/images/moneyBag2.png'
import menus from '../data/menus'

function MyPage() {
  usePageName('마이페이지')

  return (
    <div>
      {/* 프로필 섹션 */}
      <Profile
        profileSrc={profileImage}
        name='성시경이타고있어요'
        trustScore={78}
      />
      <hr className='border-gray-200' />

      {/* 땅땅머니 섹션 */}
      <section className='p-4 bg-white border-b border-gray-200 mt-0'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <img src={moneyBag2} alt='moneyBag2' className='w-6 h-6' />
            <span className='text-lg  font-bold text-[16px] text-gray-950'>
              땅땅머니
            </span>
          </div>
          <div>
            <Link
              to='charge'
              className='bg-gray-100 text-gray-950 text-xs px-2 py-1 rounded-full'
              style={{ cursor: 'pointer' }}
            >
              충전
            </Link>
          </div>
        </div>
        <div className='mt-2'>
          <div className='flex justify-between  font-bold text-[14px] text-gray-950 mt-4'>
            <span>잔액</span>
            <span>270,000원</span>
          </div>
          <div className='flex justify-between  font-bold text-[14px] text-gray-950 mt-4'>
            <span>입찰가능금액</span>
            <span>70,000원</span>
          </div>
        </div>
      </section>

      {/* 메뉴 섹션 */}
      <section className='bg-white divide-y divide-gray-200'>
        <nav className='flex flex-col'>
          {menus &&
            menus.map(menuCategory => (
              <div
                key={menuCategory[0].to}
                className='border-b border-gray-200'
              >
                {menuCategory.map(menu => (
                  <MyPageMenu
                    key={menu.to}
                    {...menu}
                    icon={{ name: menu.icon }}
                  />
                ))}
              </div>
            ))}
        </nav>
      </section>
    </div>
  )
}

export default MyPage
