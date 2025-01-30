import PropTypes from 'prop-types'

function TrustScoreBar({ trustScore }) {
  return (
    <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden mt-4'>
      <div
        className='h-full rounded-full bg-ddblue-400'
        style={{ width: `${trustScore}%` }}
      ></div>
    </div>
  )
}

TrustScoreBar.propTypes = {
  trustScore: PropTypes.number.isRequired,
}

export default TrustScoreBar
