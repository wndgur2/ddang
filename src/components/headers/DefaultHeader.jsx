import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function DefaultHeader({ back, icon, siblings }) {
  const router = useNavigate()
  return (
    <div>
      <div className="flex justify-between">
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
        {icon && <span>{icon}</span>}
      </div>
    </div>
  )
}
DefaultHeader.propTypes = {
  back: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  siblings: PropTypes.array.isRequired,
}
export default DefaultHeader
