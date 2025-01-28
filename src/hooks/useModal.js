// useModal
import { useState } from 'react'

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState()

  const open = () => setIsOpen(true)
  const close = v => {
    if (v != undefined) setValue(v)
    setIsOpen(false)
  }

  return { isOpen, open, close, value }
}
