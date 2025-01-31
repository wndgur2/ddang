import { useState } from 'react'
import usePageName from '@/hooks/usePageName'
import Charge from '../components/Charge'

function ChargePage() {
  usePageName('충전')
  const [amount, setAmount] = useState('200,000')
  const afterTransactionBalance = '161,800원'
  const accountName = '카카오페이'

  const handleChange = e => {
    const input = e.target.value.replace(/[^0-9]/g, '')
    const formatted = input.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    setAmount(formatted)
  }

  return (
    <div className='flex flex-col space-y-6 w-full max-w-md mx-auto p-6 bg-white'>
      <Charge amount={amount} onChange={handleChange} />

      {/* 계좌 및 잔액 정보 */}
      <div className='flex flex-col space-y-4 text-base text-gray-900'>
        <div className='flex justify-between'>
          <span>계좌</span>
          <span className='font-semibold'>{accountName}</span>
        </div>
        <div className='flex justify-between'>
          <span>거래 후 잔액</span>
          <span className='font-semibold'>{afterTransactionBalance}</span>
        </div>
      </div>
    </div>
  )
}

export default ChargePage
