import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import IconButton from '../buttons/IconButton'
import style from './header.module.css'

function DefaultHeader({ back, feature, siblings, title }) {
  const router = useNavigate()
  return (
    <header className={style.header}>
      <div className='flex justify-between'>
        {back && (
          <IconButton
            icon={{
              name: 'keyboard_arrow_left',
              size: 32,
            }}
            callback={() => {
              router(-1)
            }}
          />
        )}
        <span>{title}</span>
        {siblings && <span>dropdown</span>}
        {feature && <span>{feature}</span>}
      </div>
    </header>
  )
}
DefaultHeader.propTypes = {
  back: PropTypes.bool,
  title: PropTypes.string,
  siblings: PropTypes.array,
  feature: PropTypes.element,
}
export default DefaultHeader
