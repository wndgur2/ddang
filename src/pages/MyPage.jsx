import usePageName from '../hooks/usePageName'

function MyPage() {
  usePageName('마이페이지')
  return (
    <div>
      <h1>My Page</h1>
    </div>
  )
}

export default MyPage
