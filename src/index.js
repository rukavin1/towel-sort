

module.exports = function towelSort (matrix) {
  if (matrix === undefined || !matrix || matrix.length === 0) {
    return []
  }
  let flatten = [];
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
          flatten.push(...matrix[i].reverse());
        } else {
          flatten.push(...matrix[i]);
        }

      } return flatten;
};

//Should return empty array if no params passed

