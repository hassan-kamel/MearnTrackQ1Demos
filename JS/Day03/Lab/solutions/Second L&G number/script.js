var array = [3, 5, 52, 7, 34, 2, 4, 22, 26, 2, 5, 62, 21, 11, 950, 1, 301];

array.sort(function (a, b) {
  return a - b;
});

console.log('array: ', array);

console.log('The Second Lowest : ', array[1]);
console.log('The Second Greatest : ', array[array.length - 2]);
