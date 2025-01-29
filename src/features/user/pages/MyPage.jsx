import { Link } from 'react-router-dom'
import MyPageMenu from '../components/MyPageMenu'
import usePageName from '@/hooks/usePageName'
import profileImage from '@/assets/profileImage.png'
import Profile from '../components/Profile'
import moneyBag from '@/assets/moneyBag.png'

function MyPage() {
  usePageName('마이페이지')

  const menus = [
    [
      { to: '/payment-history', icon: 'credit_card', title: '결제내역' },
      { to: '/purchase-history', icon: 'sticky_note_2', title: '구매내역' },
      { to: '/sales-history', icon: 'sticky_note_2', title: '판매내역' },
      { to: '/favorites', icon: 'favorite', title: '관심목록' },
      { to: '/gathered-items', icon: 'sort', title: '모아보기' },
      { to: '/review-history', icon: 'for_you', title: '리뷰내역' },
      { to: '/my-locations', icon: 'location_on', title: '내 장소' },
    ],
    [
      { to: '/notices', icon: 'event_note', title: '공지사항' },
      { to: '/customer-service', icon: 'support_agent', title: '고객센터' },
    ],
    [
      {
        to: '/terms-and-policies',
        icon: 'sticky_note_2',
        title: '약관 및 정책',
      },
      { to: '/app-settings', icon: 'settings', title: '앱 설정' },
    ],
  ]

  return (
    <div className='mb-16'>
      {/* 프로필 섹션 */}
      <section className='p-4 bg-white font-[Inter] text-[16px] text-gray-950 font-bold'>
        <Profile
          profileSrc={profileImage}
          name='성시경이타고있어요'
          trustScore={78}
        />
      </section>

      {/* 땅땅머니 섹션 */}
      <section className='p-4 bg-white border-b border-gray-200 mt-0'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <img src={moneyBag} alt='moneyBag' className='w-6 h-6' />
            <span className='text-lg font-[Inter] font-bold text-[16px] text-gray-950'>
              땅땅머니
            </span>
          </div>
          <div>
            <Link to='/charge'>
              <button
                className='bg-gray-100 text-gray-950 text-xs px-2 py-1 rounded-full'
                style={{ cursor: 'pointer' }}
              >
                충전
              </button>
            </Link>
          </div>
        </div>
        <div className='mt-2'>
          <div className='flex justify-between font-[Inter] font-bold text-[14px] text-gray-950 mt-4'>
            <span>잔액</span>
            <span>270,000원</span>
          </div>
          <div className='flex justify-between font-[Inter] font-bold text-[14px] text-gray-950 mt-4'>
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
