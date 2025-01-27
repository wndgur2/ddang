import DefaultButton from '../../../components/buttons/DefaultButton'
import Modal from '../../../components/modals/Modal'
import useModal from '../../../hooks/useModal'

function HomePage() {
  const { isOpen, open, close } = useModal()
  return (
    <>
      {isOpen && <Modal close={close} />}
      <h1>Home</h1>
      <DefaultButton callback={open}>Open Modal</DefaultButton>
    </>
  )
}

export default HomePage
