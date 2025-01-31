import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import IconButton from '../buttons/IconButton'

function DefaultHeader({ back, feature, siblings, title }) {
  const router = useNavigate()
  return (
    <header
      className={`
        w-full h-[56px] px-4 py-2
        flex flex-row items-center justify-between
        border-b border-gray-200`}
    >
      <div className='min-w-12'>
        {back && (
          <IconButton
            icon={{
              name: 'keyboard_arrow_left',
              size: 28,
            }}
            onClick={() => {
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
