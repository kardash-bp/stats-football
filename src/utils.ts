export const strToDate = (dateStr: string): Date => {
  const parts = dateStr.split('/').map((val: string): number => parseInt(val))
  return new Date(Date.UTC(parts[2], parts[1] - 1, parts[0]))
}
