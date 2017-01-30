// First iteration of QS
var quickSort = function (numsArray) {
  // Number at first index is pivot
  var pivot = numsArray[0];
  var leftArray = [];
  var rightArray = [];

  // Base case, return if no more elements to compare
  if (numsArray.length <= 1) {
    return numsArray;
  }

  // Iterate from after pivot and compare numbers to pivot
  // Sort either smaller or bigger than pivot
  for (var i = 1; i < numsArray.length; i++) {
    if (numsArray[i] <= pivot) {
      leftArray.push(numsArray[i]);
    } else {
      rightArray.push(numsArray[i]);
    }
  }
  // Recursive call to QS function and concat results
  return quickSort(leftArray).concat([pivot]).concat(quickSort(rightArray));
}

/* Analysis

Time complexity: O(nlogn)

Loop requires N iterations for partitioning portion.
Recursive call allows you to split the work in half during
each recursive call, so logn. Result is nlogn.

Space complexity: O(n)

Improvements:

Quicksort can be done in place to reduce space to O(logn).
Pivot can be randomized to reduce worst case scenario.

/*
