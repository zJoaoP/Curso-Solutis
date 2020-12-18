export function segundosParaHoras(seconds) {
  return (seconds / 3600) | 0;
}

export function segundosParaMinutos(seconds) {
  return (seconds / 60) | 0;
}

export default segundosParaHoras;
