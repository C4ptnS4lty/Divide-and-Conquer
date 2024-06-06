function countZeroes(arr) {
    firstZ = findFirst(arr);
    
    if (firstZ == -1) {
        return 0;
    }

    return arr.length - firstZ;
}

function findFirst(arr, low = 0, high = arr.length - 1) {
    
    if(high >= low) {
        mid = low + Math.floor((high - low) / 2);

        if((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0) {
            return mid;
        } else if(arr[mid] == 1) {
            return findFirst(arr, mid + 1, high);
        }
        return findFirst(arr, low, mid - 1)
    }

    return -1
}

module.exports = countZeroes