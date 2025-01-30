import { useNavigate } from 'react-router-dom'
import IconButton from '../buttons/IconButton'

function SearchHeader() {
  const route = useNavigate()
  return (
    <header
      className={`
      w-full h-[56px] px-4 py-2
      flex flex-row gap-3 items-center
      border-b border-gray-200`}
    >
      <input
        className={`flex grow px-3 h-full rounded-xl text-sm border border-gray-400`}
        type='text'
        placeholder='제목으로 검색하세요'
      />
      <IconButton
        icon={{
          name: 'notifications',
          size: 28,
          color: 'var(--color-gray-600)',
        }}
        callback={() => route('/')}
      />
      <IconButton
        icon={{
          name: 'forum',
          size: 28,
          color: 'var(--color-gray-600)',
        }}
      />
    </header>
  )
}

export default SearchHeader
