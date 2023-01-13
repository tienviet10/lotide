const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const eqObjects = (object1, object2) => {
  const objArr1 = Object.keys(object1);
  const objArr2 = Object.keys(object2);

  if (objArr1.length !== objArr2.length) return false;

  for (let ele of objArr1) {
    if (!object2[ele]) return false;

    if (Array.isArray(object1[ele])) {
      if (!eqArrays(object1[ele], object2[ele])) return false;
    } else if (typeof object1[ele] === "object") {
      if (!eqObjects(object1[ele], object2[ele])) return false;
    } else {
      if (object1[ele] !== object2[ele]) return false;
    }
  }

  return true;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
