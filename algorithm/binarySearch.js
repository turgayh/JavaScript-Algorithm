/* Typical comparison function */
let defaultCompare = (a, b) =>
  a > b ? 1 : (a < b ? -1 : 0);
  
/* Version 1:
    O(n)
    Fixed memory
    Loops
*/
 export let binarySearchWithLoops = (array, element, compare = defaultCompare) => {
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


  export let binarySearchWithRecursion = (array, element, compare = defaultCompare, right = array.length - 1,left  = 0) => {
    if(left > right)
        return -1
    let middle = Math.floor((right + left ) / 2)
    if(array[middle] == element)
        return middle
    if(compare(element, array[middle])  ===  1 )
        return binarySearchWithRecursion(array, element, compare = defaultCompare, right, middle+1)
    
    if(compare(element, array[middle])  ===  -1 )
        return binarySearchWithRecursion(array, element, compare = defaultCompare, middle - 1,left)
    
}

