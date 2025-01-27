import PropTypes from 'prop-types'
import useModal from '../../hooks/useModal'
import Modal from '../modals/Modal'
import MaterialIcon from '../icons/MaterialIcon'

function ModalButton({ label, required }) {
  const { isOpen, open, close } = useModal()
  return (
    <>
      <div className='flex flex-col gap-2 py-2'>
        {label && (
          <label className='font-bold text-gray-800 text-sm'>
            {label}
            {required && '*'}
          </label>
        )}
        <div
          className='flex justify-between items-center border-1 border-gray-300 rounded-md p-3'
          onClick={open}
        >
          <span className='text-gray-500'>거래유형을 선택해주세요.</span>
          <MaterialIcon name='chevron_right' />
        </div>
      </div>
      {isOpen && (
        <Modal close={close}>
          <h1>Modal</h1>
        </Modal>
      )}
    </>
  )
}

ModalButton.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default ModalButton
