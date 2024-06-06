function sortedFrequency(arr, search) {
    firstN = findFirst(arr, search);

    if (firstN == -1) {
        return 0;
    }

    lastN = findLast(arr, search)


    return lastN - firstN + 1;
}

function findFirst(arr, search, low = 0, high = arr.length - 1) {
    
    if(high >= low) {
        mid = Math.floor((high + low) / 2);

        if((mid == 0 || arr[mid - 1] < search) && arr[mid] == search) {
            return mid;
        } else if(arr[mid] <  search) {
            return findFirst(arr, search, mid + 1, high);
        }
        return findFirst(arr, search, low, mid - 1);
    }

    return -1
}

function findLast(arr, search, low = 0, high = arr.length - 1) {
    
    if(high >= low) {
        mid = Math.floor((high + low) / 2);

        if((mid == arr.length - 1 || arr[mid + 1] > search) && arr[mid] == search) {
            return mid;
        } else if(arr[mid] >  search) {
            return findFirst(arr, search, low, mid - 1);
        }
        return findFirst(arr, search, mid + 1, high);
    }

    return -1
}

module.exports = sortedFrequency