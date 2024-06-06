function findRotationCount(arr) {
  location = findPivotBinary(arr);

    return location;
}

function findPivotBinary(arr, low = 0, high = arr.length - 1) {

    mid = low + Math.floor((high - low) / 2);

    if (mid == 0) return 0;

    if (arr[mid] < arr[mid - 1]) {
        return mid;
    } else if(arr[mid] > arr[mid + 1]) {
        return mid + 1;
    } 

    firstHalf = findPivotBinary(arr, low, mid);
    secondHalf = findPivotBinary(arr, mid, high);

    if(firstHalf == 0) return secondHalf;

    return firstHalf;

  }

module.exports = findRotationCount