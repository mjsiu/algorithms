// First iteration
function binarySeach (array, target) {
  var midpointIdx = Math.floor(array.length/2),
      midpointValue = array[midpointIdx];

      if (midpointValue === target) {
        return true;
      } else if (target < midpointValue && array.length > 1) {
        return binarySeach(array.slice(0, midpointIdx), target);
      } else if (target > midpointValue && array.length > 1){
        return binarySeach(array.slice(midpointIdx), target)
      } else {
        return false;
      }
}

/*


Improvements:
Does not return index but instead returns true or false dep on whether
or not the target is found within the array. Also assumes array is sorted.

/*
