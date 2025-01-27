import PropTypes from 'prop-types'
import DefaultButton from '../buttons/DefaultButton'

function Modal({ close, children }) {
  return (
    <div className='fixed inset-0 z-1 p-4 flex flex-col-reverse'>
      <div className='fixed inset-0 bg-black opacity-25'></div>
      <div className='flex flex-col gap-2 items-center bg-white z-2 p-4 rounded-2xl'>
        <div className='w-8 h-1 bg-gray-300 rounded-xs'></div>
        {children}
        modal test
        <DefaultButton callback={close}>닫기</DefaultButton>
      </div>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func,
}

export default Modal
