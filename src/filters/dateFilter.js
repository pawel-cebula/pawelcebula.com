module.exports = function(date) {
  const addZero = i => String(i).length === 1 ? `0${String(i)}`: String(i);
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  console.log(month, day);
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
}