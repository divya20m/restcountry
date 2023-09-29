


// comparing two json objects irrespective of their order...
const obj1 = {name:"Person1",age:"5"}
const obj2 = {age:"5",name:"Person1"}

function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  if (keys1.length !== keys2.length) {
    return false;
  }

  return keys1.every(key => obj1[key] === obj2[key]);
}

const areEqual = areObjectsEqual(obj1, obj2);

if (areEqual) {
  console.log("The JSON objects are in same.");
} else {
  console.log("The JSON objects are not same.");
}
