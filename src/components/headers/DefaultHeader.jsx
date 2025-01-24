import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import IconButton from '../buttons/IconButton'
import style from './header.module.css'

function DefaultHeader({ back, feature, siblings, title }) {
  const router = useNavigate()
  return (
    <header
      className={`flex flex-row items-center justify-between ${style.header}`}
    >
      <div className='min-w-12'>
        {back && (
          <IconButton
            icon={{
              name: 'keyboard_arrow_left',
              size: 28,
            }}
            callback={() => {
              router(-1)
            }}
          />
        )}
      </div>

      <div className='min-w-12'>
        <p className='font-bold text-lg'>{title}</p>
        {siblings && <span>dropdown</span>}
      </div>
      <div className='min-w-12'>{feature && <span>{feature}</span>}</div>
    </header>
  )
}
DefaultHeader.propTypes = {
  back: PropTypes.bool,
  title: PropTypes.string.isRequired,
  siblings: PropTypes.array,
  feature: PropTypes.element,
}
export default DefaultHeader
