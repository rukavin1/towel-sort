

module.exports = function towelSort (matrix) {
  if (matrix === undefined || !matrix || matrix.length === 0) {
    return []
  }
  return [].concat(...matrix.map((row, index) => index % 2 === 0 ? row : row.reverse() ) )
};

//Should return empty array if no params passed