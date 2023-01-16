const findKeyByValue = (data, title) => {
  for (let genre of Object.keys(data)) {
    if (data[genre] === title) return genre;
  }
  return undefined;
};

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};


module.exports = findKeyByValue;
