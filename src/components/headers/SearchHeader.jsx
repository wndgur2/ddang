import { useNavigate } from 'react-router-dom'
import IconButton from '../buttons/IconButton'

function SearchHeader() {
  const route = useNavigate()
  const search = e => {
    e.preventDefault()
    route('/explore/search/products?search=' + e.target[0].value)
  }
  return (
    <header
      className={`
      w-full h-[56px] px-4 py-2
      flex flex-row gap-3 items-center`}
    >
      <form action='' className='flex grow h-full' onSubmit={search}>
        <input
          className={`px-3 h-full w-full rounded-xl text-sm border border-gray-400 font-bold text-gray-950`}
          type='text'
          placeholder='제목으로 검색하세요'
        />
      </form>
      <IconButton
        icon={{
          name: 'notifications',
          size: 28,
          className: 'text-gray-600',
        }}
        onClick={() => route('/')}
      />
      <IconButton
        icon={{
          name: 'forum',
          size: 28,
          className: 'text-gray-600',
        }}
      />
    </header>
  )
}

export default SearchHeader
