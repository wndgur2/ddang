import { MyPageMenu } from '../features'

function MyPage() {
  return (
    <div className='flex flex-col'>
      <MyPageMenu
        to='/payment-history'
        icon={{
          name: 'credit_card',
        }}
        title={'결제내역'}
      />
      <MyPageMenu
        to='/purchase-history'
        icon={{
          name: 'sticky_note_2',
        }}
        title={'구매내역'}
      />
      <MyPageMenu
        to='/sales-history'
        icon={{
          name: 'sticky_note_2',
        }}
        title={'판매내역'}
      />
      <MyPageMenu
        to='/favorites'
        icon={{
          name: 'favorite',
        }}
        title={'관심목록'}
      />
      <MyPageMenu
        to='/collection'
        icon={{
          name: 'sort',
        }}
        title={'모아보기'}
      />
      <MyPageMenu
        icon={{
          name: 'for_you',
        }}
        title={'리뷰내역'}
      />
      <MyPageMenu
        icon={{
          name: 'location_on',
        }}
        title={'내 장소'}
      />
      <MyPageMenu
        icon={{
          name: 'event_note',
        }}
        title={'공지사항'}
      />
      <MyPageMenu
        icon={{
          name: 'support_agent',
        }}
        title={'고객센터'}
      />
      <MyPageMenu
        icon={{
          name: 'sticky_note_2',
        }}
        title={'약관 및 정책'}
      />
      <MyPageMenu
        icon={{
          name: 'settings',
        }}
        title={'앱 설정'}
      />
    </div>
  )
}

export default MyPage
