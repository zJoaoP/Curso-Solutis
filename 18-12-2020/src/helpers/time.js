export function currentTimeToString() {
  const date = new Date();
  return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()} - 
          ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export default currentTimeToString;
