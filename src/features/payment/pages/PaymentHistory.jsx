import usePageName from '../../../hooks/usePageName.js'
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
    const date = transaction.changedTime.split(' ')[0]
    if (!acc[date]) acc[date] = []
    acc[date].push(transaction)
    return acc
  }, {})

  const sortedTransactionsByDate = Object.entries(transactionsByDate)
    .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
    .reduce((acc, [date, transactions]) => {
      acc[date] = transactions
      return acc
    }, {})

  return (
    <div className='flex flex-col p-4'>
      {Object.keys(sortedTransactionsByDate).map(date => (
        <div key={date} className='mb-4'>
          <h2 className='text-lg font-bold'>{date}</h2>
          <div className='flex flex-col gap-2'>
            {sortedTransactionsByDate[date].map(transaction => (
              <div
                key={transaction.payAccountHistoryId}
                className='flex flex-row justify-between'
              >
                <div>{transaction.changedTime}</div>
                <div>{transaction.title}</div>
                <div>{transaction.chageAmount}</div>
                <div>{transaction.balanceAfter}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default PaymentHistory
