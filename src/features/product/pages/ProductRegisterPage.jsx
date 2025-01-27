import usePageName from '@/hooks/usePageName'
import TextInput from '@/components/form/TextInput'
import TextArea from '@/components/form/TextArea'

function ProductRegisterPage() {
  usePageName('상품등록')
  return (
    <>
      this is the product register page
      <TextInput label='제목' required />
      <TextInput label='상품명' required />
      <TextInput label='카테고리' required />
      <TextInput label='최소입찰가' required />
      <TextInput label='즉시낙찰가' />
      <TextInput label='개찰 시각' required />
      <TextInput label='마감 시각' required />
      <TextArea label='자세한 설명' required />
      <TextInput label='거래 유형' required />
      <TextInput label='거래희망장소' required />
    </>
  )
}

export default ProductRegisterPage
