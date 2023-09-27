export function numberFormat(num?: number): string {
  if (num === undefined || num === null) {
    return ''
  }

  return num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
