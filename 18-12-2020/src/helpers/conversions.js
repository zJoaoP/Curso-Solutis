export function secondsToHours(seconds) {
  return (seconds / 3600) | 0;
}

export function secondsToMinutes(seconds) {
  return (seconds / 60) | 0;
}

export default secondsToHours;
