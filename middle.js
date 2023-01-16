const middle = (array) => {
  if (array.length < 3) return [];

  const check = array.length % 2;
  const midInd = Math.floor(array.length / 2);

  return check ? [array[midInd]] : [array[midInd - 1], array[midInd]];
};

module.exports = middle;