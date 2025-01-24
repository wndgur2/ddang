import IconButton from '../buttons/IconButton'
import style from './header.module.css'

function SearchHeader() {
  return (
    <header className={`flex flex-row gap-2 items-center ${style.header}`}>
      <input
        className={`flex grow px-3 py-1 rounded-xl ${style.search}`}
        type='text'
      />
      <IconButton
        icon={{
          name: 'notifications',
          size: 26,
          color: 'var(--gray-600)',
        }}
      />
      <IconButton
        icon={{
          name: 'forum',
          size: 26,
          color: 'var(--gray-600)',
        }}
      />
    </header>
  )
}

export default SearchHeader
