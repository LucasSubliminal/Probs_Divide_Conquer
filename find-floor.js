function findFloor(arr, x) {
    let result = -1; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= x && (result === -1 || arr[i] > result)) {
            result = arr[i]; 
        }
    }
    return result; 
}

module.exports = findFloor