export function wonitzie(price) {
  if (price < 100000)
    return `${price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원'
  const units = ['억', '만', '천', '']
  const values = [0, 0, 0, 0]
  values[0] = Math.floor(price / 100000000)
  values[1] = Math.floor((price % 100000000) / 10000)
  values[2] = Math.floor((price % 10000) / 1000)
  values[3] = price % 1000
  let res = values.reduce((acc, cur, idx) => {
    if (cur) acc += cur + units[idx]
    return acc
  }, '')

  return `${res}원`
}
