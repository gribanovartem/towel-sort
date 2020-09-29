
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = [];
  let forwardWay = true;
  if(matrix) {
    matrix.forEach(item => {
      if(forwardWay) {
        item.forEach(item1 => {
          arr.push(item1);
        });
        forwardWay = false;;
      } else {
        item.reverse().forEach(item1 => {
          arr.push(item1);
        });
        forwardWay = true;
      }
    });
  }
  return arr;
}
