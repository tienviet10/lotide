const flatten = (arr) => {
  let res = [];
  for (let ele of arr) {
    if (Array.isArray(ele)) {
      res = res.concat(ele);
    } else {
      res.push(ele);
    }
  }
  return res;
};

module.exports = flatten;