import TabBar from '@/components/navbar/TabBar'
import { Outlet } from 'react-router-dom'
import usePageName from '../../../hooks/usePageName'

function BiddingListPage() {
  usePageName('입찰현황')
  return (
    <div className='flex flex-col'>
      <TabBar
        routes={[
          {
            index: true,
            name: '입찰중인 상품',
            to: '',
            end: true,
          },
          {
            name: '낙찰된 상품',
            to: 'sold',
          },
        ]}
      />
      <Outlet />
    </div>
  )
}

export default BiddingListPage
