

module.exports = function towelSort (matrix) {
  if (matrix === undefined || !matrix || matrix.length === 0) {
    return []
  }
  let flatten = [];
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          flatten.push(matrix[i][j]);
        }
      } return flatten;
};

//Should return empty array if no params passed

