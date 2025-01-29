import MyPageMenu from '../components/MyPageMenu'
import usePageName from '@/hooks/usePageName'
import MaterialIcon from '../../../components/icons/MaterialIcon'
import ProfileImage from '../components/ProfileImage'
import profileImage from '@/assets/profileImage.png'
// import test from '@/assets/test.png'

function MyPage() {
  usePageName('마이페이지')

  const menus = [
    [
      { to: 'payment-history', icon: 'credit_card', title: '결제내역' },
      { to: 'purchase-history', icon: 'sticky_note_2', title: '구매내역' },
      { to: 'sales-history', icon: 'sticky_note_2', title: '판매내역' },
      { to: 'favorites', icon: 'favorite', title: '관심목록' },
      { to: 'gathered-items', icon: 'sort', title: '모아보기' },
      { to: 'review-history', icon: 'for_you', title: '리뷰내역' },
      { to: 'my-locations', icon: 'location_on', title: '내 장소' },
    ],
    [
      { to: 'notices', icon: 'event_note', title: '공지사항' },
      { to: 'customer-service', icon: 'support_agent', title: '고객센터' },
    ],
    [
      {
        to: 'terms-and-policies',
        icon: 'sticky_note_2',
        title: '약관 및 정책',
      },
      { to: 'app-settings', icon: 'settings', title: '앱 설정' },
    ],
  ]

  return (
    <div className='mb-16'>
      {/* 프로필 섹션 */}
      <section className='flex items-center p-4 bg-white gap-3'>
        <ProfileImage src={profileImage} size={64} />
        <div className='flex-1'>
          <div className='text-lg font-semibold'>성시경이타고있어요</div>
        </div>
        <button style={{ color: 'var(--color-gray-400)' }}>
          <MaterialIcon name='edit' filled>
            edit
          </MaterialIcon>
        </button>
      </section>
      {/* 신뢰도 섹션 */}
      <section className='p-4 bg-white border-b border-gray-200'>
        <div className='flex justify-between items-center'>
          <span className='text-sm font-semibold text-gray-600'>신뢰도</span>
          <span className='text-sm font-semibold text-gray-600'>78%</span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2.5 mt-2'>
          <div className='h-2.5 rounded-full bg-ddblue-400 w-[78%]'></div>
        </div>
      </section>
      {/* 땅땅머니 섹션 */}
      <section className='p-4 bg-white border-b border-gray-200'>
        <div className='flex justify-between items-center'>
          <div>
            <div className='flex items-center space-x-2'>
              <span className='text-lg font-semibold'>땅땅머니</span>
            </div>
            <div className='text-sm text-gray-600 mt-2'>
              잔액 <span className='font-semibold'>270,000원</span>
            </div>
            <div className='text-sm text-gray-600'>
              입찰가능금액 <span className='font-semibold'>70,000원</span>
            </div>
          </div>
          <button className='bg-blue-500 text-white text-sm px-4 py-2 rounded-lg'>
            충전
          </button>
        </div>
      </section>
      {/* 메뉴 섹션 */}
      <section className='bg-white shadow rounded-lg divide-y divide-gray-200'>
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
