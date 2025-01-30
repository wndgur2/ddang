export function dday(date) {
  const f = new Intl.RelativeTimeFormat('ko', {
    numeric: 'always',
  })
  const now = new Date()
  const target = new Date(date)
  const diff = target - now

  const day = diff / (1000 * 60 * 60 * 24)
  if (day >= 1) return f.format(-Math.floor(day), 'day').replace(' 전', '')

  const hour = (day - Math.floor(day)) * 24
  if (hour >= 1) return f.format(-Math.floor(hour), 'hour').replace(' 전', '')

  const min = (hour - Math.floor(hour)) * 60
  const sec = (min - Math.floor(min)) * 60
  const minute = f.format(-Math.floor(min), 'minute').replace('분 전', '')
  const second = f.format(-Math.floor(sec), 'second').replace('초 전', '')
  return minute + ' : ' + second
}
