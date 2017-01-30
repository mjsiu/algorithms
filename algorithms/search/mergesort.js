// First iteration ** Needs fixing **
// function merge(numsArray) {
//   if (numsArray.length <= 2) {
//     return numsArray;
//   }
//
//   var midpoint = Math.floor(numsArray.length/2);
//   var left = numsArray.slice(0,midpoint);
//   var right = numsArray.slice(midpoint);
//
//   return mergeSort(merge(left), merge(right));
// }
//
// function mergeSort(left, right) {
//   var smaller = [];
//   var larger = [];
//
//   while (left.length !== 0 && right.length !== 0) {
//     if (left[0] <= right[0]) {
//       smaller.push(left.shift());
//     } else {
//       smaller.push(right.shift());
//     }
//   }
//   return smaller.concat(larger).concat(left).concat(right);
// }
