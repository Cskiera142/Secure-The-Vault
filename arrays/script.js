// const arrayOfStrings = [];
// let arrayOfNumbers = [4, 5, 6, 66, 67, 68];

// console.log("first index", arrayOfNumbers[0]);
// console.log("3 index", arrayOfNumbers[3]);
// console.log("last index", arrayOfNumbers[arrayOfNumbers.length - 1]);
// console.log("not in array", arrayOfNumbers[10]);

//.push moves new item to front of array

// arrayOfStrings.push("hello");
// arrayOfStrings.push("goodbye", "hi");
// console.log(arrayOfStrings);

//.pop removes item from end of array

// let removedVar = arrayOfNumbers.pop();
// console.log("array of numbers after pop", arrayOfNumbers);
// console.log("removed Var", removedVar);

//.unshift adds specified elements to front of array

// arrayOfStrings.unshift("hey you", "hi all");
// console.log("array of strings after unshift", arrayOfStrings);

// let removedVar = arrayOfNumbers.shift();
// console.log("array of num after shift", arrayOfNumbers);
// console.log("");

// const arrayOfAnimals = ["bison", "fox", "otter", "fox"];
// console.log("arrayOfAnimals", arrayOfAnimals);

// let indexOfFox = arrayOfAnimals.indexOf("fox");
// console.log("indexOfFox", indexOfFox);
// arrayOfAnimals[indexOfFox] = "puppy";

// console.log(arrayOfAnimals);

// function findElem(arr, idx) {
//   return arr[idx];
// }

// console.log(findElem([1, 2, 3, 4], 3));

const myArr = [1, 2, 3, 4, 5];

function numArr(arr) {
  return arr[0] + arr[arr.length - 1];
}

console.log(numArr(myArr));
console.log(numArr([1, 2, 3]));

function checkLength(arr, num) {
  if (arr.length === num) {
    return;
  }
}

console.log(checkLength([1, 2, 3], 3));
