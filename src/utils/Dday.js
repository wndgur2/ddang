export function dday(date) {
  const now = new Date()
  const target = new Date(date)
  const diff = target - now
  const day = diff / 1000 / 60 / 60 / 24
  const option = {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }
  const koreanDatetime = new Intl.DateTimeFormat('ko-KR', option).format(diff)
  return koreanDatetime.replace('시', '시간')
}
