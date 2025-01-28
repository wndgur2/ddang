import DefaultButton from '../../../components/buttons/DefaultButton'
import Modal from '../../../components/modals/Modal'
import useModal from '../../../hooks/useModal'

function HomePage() {
  const { isOpen, open, close, value } = useModal()
  return (
    <>
      <span>value from modal : {value}</span>
      {isOpen && (
        <>
          <Modal close={close}>
            <h1>Modal</h1>
            <DefaultButton callback={() => close('new value here!')}>
              새로운 값 리턴하기
            </DefaultButton>
            <DefaultButton callback={() => close('')}>그냥 닫기</DefaultButton>
          </Modal>
        </>
      )}
      <h1>Home</h1>
      <DefaultButton callback={open}>Open Modal</DefaultButton>
    </>
  )
}

export default HomePage
