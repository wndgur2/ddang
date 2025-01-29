import PropTypes from 'prop-types'
import useModal from '../../hooks/useModal'
import Modal from '../modals/Modal'
import MaterialIcon from '../icons/MaterialIcon'
import InputValue from './InputValue'
import PickerWrapper from './PickerWrapper'

function ModalPicker({ label, required }) {
  const { isOpen, open, close, value, setValue } = useModal()
  return (
    <>
      <div className='flex flex-col gap-2 py-3'>
        {label && (
          <label className='font-bold text-gray-800 text-sm'>
            {label}
            {required && '*'}
          </label>
        )}
        <PickerWrapper callback={open}>
          <InputValue value={value} label={label} />
          <MaterialIcon name='chevron_right' />
        </PickerWrapper>
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
