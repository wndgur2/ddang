import usePageName from '@/hooks/usePageName.js'
import transactions from '../data/transactions.js'
/** data
{
  payAccountHistoryId: 4,
  title: '3년 된 라디오',
  chageAmount: 150000,
  balanceAfter: 1000000,
  changedTime: '2025-01-20 06:30:00',
}
 */

function PaymentHistory() {
  usePageName('결제내역')

  const transactionsByDate = transactions.reduce((acc, transaction) => {
    const dateObj = new Date(transaction.changedTime)
    const dateKey = dateObj.toISOString().split('T')[0] // "YYYY-MM-DD" 형태 (정렬용)

    if (!acc[dateKey]) acc[dateKey] = []
    acc[dateKey].push(transaction)
    return acc
  }, {})

  const sortedTransactionsByDate = Object.entries(transactionsByDate)
    .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA)) // 날짜 내림차순 정렬
    .reduce((acc, [date, transactions]) => {
      const dateObj = new Date(date)
      const formattedDate = `${dateObj.getMonth() + 1}월 ${dateObj.getDate()}일` // "1월 2일" 변환
      acc[formattedDate] = transactions
      return acc
    }, {})

  return (
    <div className='flex flex-col p-4'>
      {Object.keys(sortedTransactionsByDate).map(date => (
        <div key={date} className='mb-4'>
          <h2 className='text-base font-medium text-gray-600'>{date}</h2>{' '}
          {/* 날짜 글씨 크기 줄임 */}
          <div className='flex flex-col gap-2'>
            {sortedTransactionsByDate[date].map(transaction => {
              const time = transaction.changedTime.split(' ')[1].slice(0, 5) // HH:mm 형식으로 변환
              return (
                <div
                  key={transaction.payAccountHistoryId}
                  className='flex flex-col gap-1'
                >
                  {/* 첫 번째 줄: title, chageAmount */}
                  <div className='flex justify-between items-center'>
                    <div className='font-medium'>{transaction.title}</div>
                    <div
                      className={`font-medium ${
                        transaction.chageAmount > 0 ? 'text-ddblue-400' : ''
                      }`}
                    >
                      {transaction.chageAmount > 0
                        ? `+${transaction.chageAmount}`
                        : transaction.chageAmount}
                    </div>
                  </div>
                  {/* 두 번째 줄: 시간, balanceAfter */}
                  <div className='flex justify-between items-center text-sm text-gray-500'>
                    <div>{time}</div>
                    <div>{transaction.balanceAfter.toLocaleString()}원</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PaymentHistory
