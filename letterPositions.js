const letterPositions = (sentence) => {
  const results = {};

  for (let index in sentence) {
    if (sentence[index] === " ") continue;
    // results[sentence[index]] = results[sentence[index]]
    //   ? results[sentence[index]].concat([Number(index)])
    //   : [Number(index)];
    results[sentence[index]] = results[sentence[index]]
      ? [...results[sentence[index]], Number(index)]
      : [Number(index)];
  }

  return results;
};

module.exports = letterPositions;
