
// You should implement your task here.

module.exports = function towelSort(matrix) {
  //  если matrix не задан, вернуть пустой массив
  if (!matrix) return [];
  // для каждого нечетного индекса делаем реверс
  for (let i = 0; i < matrix.length; i++) {
    if (i !== 0 && i % 2 !== 0) {
      matrix[i].reverse();
    }
  }
  // убираем вложенность
  return matrix.flat();
}
