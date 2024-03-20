function findRotatedIndex(arr, x) {
    for (let i=0; i<arr.length; i++) {
        if  (arr.includes(x)) return arr.indexOf(x)
    }
    return -1;
}

module.exports = findRotatedIndex