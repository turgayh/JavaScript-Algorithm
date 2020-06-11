/* Typical comparison function */
let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);
  
/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
    let left = 0;
    let right = array.length - 1;
    
    while (left <= right) {
        let middle = Math.floor((right + left) / 2);
        
        switch (compare(element, array[middle])) {
            case -1: {
                right = middle - 1;
                break;
            }
            case 1: {
                left = middle + 1;
                break;
            }
            default: {
                return middle;
            }
        }
    }
    
    return -1;
};

module.exports = binarySearchWithLoops;