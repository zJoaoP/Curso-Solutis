export function secondsToHours(seconds) {
  return (seconds / 3600) | 0;
}

export function secondsToMinutes(seconds) {
  return (seconds / 60) | 0;
}

export function secondsToString(seconds) {
  function prettierUnits(unit) {
    return unit < 10 ? `0${unit}` : `${unit}`;
  }

  const minutes = secondsToMinutes(seconds) % 60;
  const hours = secondsToHours(seconds) % 24;

  return `${prettierUnits(hours)}:${prettierUnits(minutes)}:${prettierUnits(
    seconds % 60
  )}`;
}

export default secondsToHours;
