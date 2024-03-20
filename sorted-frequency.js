function sortedFrequency(arr, n) {

    function findFirst(arr, n) {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === n) {
                result = mid;
                high = mid - 1;
            } else if (arr[mid] < n) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return result;
    }
    
    function findLast(arr, n) {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === n) {
                result = mid;
                low = mid + 1; 
            } else if (arr[mid] < n) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return result;
    }

    const firstOccurrence = findFirst(arr, n);
    const lastOccurrence = findLast(arr, n);

    if (firstOccurrence === -1) return -1;

    return lastOccurrence - firstOccurrence + 1;
}
module.exports = sortedFrequency