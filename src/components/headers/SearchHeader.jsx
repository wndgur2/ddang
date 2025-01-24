import IconButton from '../buttons/IconButton'
import style from './header.module.css'

function SearchHeader() {
  return (
    <header className={style.header}>
      <form action='' className='flex items-center justify-between'>
        <input type='text' />
        <IconButton
          icon={{
            name: 'notifications',
            size: 26,
            filled: true,
            color: 'var(--gray-600)',
          }}
        />
      </form>
    </header>
  )
}

export default SearchHeader
