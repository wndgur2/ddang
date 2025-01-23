import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function DefaultHeader({ back, feature, siblings }) {
  const router = useNavigate()
  return (
    <div>
      <div className='flex justify-between'>
        {back && (
          <button
            onClick={() => {
              router(-1)
            }}
          >
            back
          </button>
        )}
        <span>Defaultheader</span>
        {siblings && <span>dropdown</span>}
        {feature && <span>{feature}</span>}
      </div>
    </div>
  )
}
DefaultHeader.propTypes = {
  back: PropTypes.bool,
  feature: PropTypes.element,
  siblings: PropTypes.array,
}
export default DefaultHeader
