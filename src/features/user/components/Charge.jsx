import { useState } from 'react'

function Charge() {
  const [amount, setAmount] = useState('200,000') // 초기값 설정

  // 금액 입력 핸들러
  const handleChange = e => {
    const input = e.target.value.replace(/[^0-9]/g, '') // 숫자만 허용
    const formatted = input.replace(/\B(?=(\d{3})+(?!\d))/g, ',') // 천 단위 콤마 추가
    setAmount(formatted)
  }

  return (
    <div className='flex flex-col space-y-2 w-full max-w-md mx-auto'>
      <label
        htmlFor='charge-amount'
        className='text-ddblue-400 text-base font-bold'
      >
        충전금액
      </label>
      <input
        id='charge-amount'
        type='number'
        value={amount}
        onChange={handleChange}
        className='border-2 border-ddblue-400 rounded-lg px-4 py-2 text-black font-bold text-lg'
      />
    </div>
  )
}

export default Charge
