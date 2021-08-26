module.exports = function(date) {
  const addZero = i => String(i).length === 1 ? `0${String(i)}`: String(i);
  return `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`;
}