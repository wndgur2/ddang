import usePageName from '@/hooks/usePageName'
import TextInput from '@/components/form/TextInput'
import TextArea from '@/components/form/TextArea'
import DefaultButton from '@/components/buttons/DefaultButton'
import DatePicker from '@/components/form/DatePicker'
import ModalPicker from '@/components/form/ModalPicker'
import ImagePicker from '../components/ImagePicker'
import { useState } from 'react'

function ProductRegisterPage() {
  const [images, setImages] = useState([])
  usePageName('상품등록')
  return (
    <>
      <ImagePicker images={images} setImages={setImages} />
      <TextInput label='제목' required />
      <TextInput label='상품명' required />
      <ModalPicker label='카테고리' required />
      <TextInput label='최소입찰가' type='number' required />
      <TextInput label='즉시낙찰가' type='number' />
      <DatePicker label='개찰 시각' required />
      <DatePicker label='마감 시각' required />
      <TextArea label='자세한 설명' required />
      <ModalPicker label='거래 유형' required />
      <ModalPicker label='거래희망장소' required />
      <br />
      <DefaultButton>등록</DefaultButton>
    </>
  )
}

export default ProductRegisterPage
