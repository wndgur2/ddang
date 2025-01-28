import PropTypes from 'prop-types'
import useModal from '../../hooks/useModal'
import Modal from '../modals/Modal'
import MaterialIcon from '../icons/MaterialIcon'

function ModalPicker({ label, required }) {
  const { isOpen, open, close, value, setValue } = useModal()
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
          {value ? (
            <div className='flex gap-2 items-center'>
              <span className='text-gray-800'>{value}</span>
            </div>
          ) : (
            <span className='text-gray-500'>선택된 {label} 없음</span>
          )}
          <MaterialIcon name='chevron_right' />
        </div>
      </div>
      {isOpen && (
        <Modal close={close} setValue={setValue}>
          <h1>Modal</h1>
        </Modal>
      )}
    </>
  )
}

ModalPicker.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default ModalPicker
