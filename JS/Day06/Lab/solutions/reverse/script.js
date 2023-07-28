var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function reverseFirstWay(arr) {
  var reversedArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
function reverseSecondWay(arr) {
  //   var reversedArr = [];
  //   for (var i = arr.length - 1; i >= 0; i--) {
  //     reversedArr.push(arr[i]);
  //   }
  return arr.reverse();
}

console.log(reverseFirstWay(array)); // [9,8,7,6,5,4,3,2,1]
console.log(reverseSecondWay(array)); // [9,8,7,6,5,4,3,2,1]
