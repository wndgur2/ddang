import PropTypes from 'prop-types'
import MaterialIcon from '@/components/icons/MaterialIcon'

function FilterChipArray({ values, index }) {
  return (
    <div
      className='flex w-fit items-center pl-2.5 pr-1.5 mr-2
    text-gray-950 text-sm bg-gray-100 rounded-lg'
    >
      {values[index]}
      <MaterialIcon name='arrow_drop_down' size={20} />
    </div>
  )
}

FilterChipArray.propTypes = {
  values: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
}

export default FilterChipArray
