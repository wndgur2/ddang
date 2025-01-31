import PropTypes from 'prop-types'
import MaterialIcon from '@/components/icons/MaterialIcon'

function RegisteredImage({ src, deleteFunc }) {
  return (
    <div
      className='relative flex items-center w-[18%] aspect-square justify-center
      rounded-lg bg-gray-100'
    >
      <div className='overflow-hidden aspect-square'>
        <img src={src} alt='preview' className='object-cover' />
      </div>
      <button
        onClick={deleteFunc}
        className='absolute translate-x-1/1 -translate-y-1/1
        flex p-0.5 bg-gray-100 rounded-full border border-gray-600'
      >
        <MaterialIcon name='close' size={18} className={'text-gray-600'} />
      </button>
    </div>
  )
}

RegisteredImage.propTypes = {
  src: PropTypes.string,
  deleteFunc: PropTypes.func,
}

export default RegisteredImage
