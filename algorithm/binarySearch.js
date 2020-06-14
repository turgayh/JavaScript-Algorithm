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


export let binarySearchWithRecursion = (array, element, compare = defaultCompare, left  = 0, right = array.length - 1) => {
    if(left > right)
        return -1
    let middle = Math.floor((right + left ) / 2)
    if(array[middle] == element)
        return middle
    if(compare(element, array[middle])  ===  1 )
        return binarySearchWithRecursion(array, element, compare = defaultCompare, middle+1,right)
    
    if(compare(element, array[middle])  ===  -1 )
        return binarySearchWithRecursion(array, element, compare = defaultCompare,left, middle - 1)
    
}

//Optimize recursion by the JS engine
export let binarySearchWithTail = (array, element, compare = defaultCompare ,left  = 0, right = array.length - 1) => {
    if(left > right)
        return -1
    
    let middle = Math.floor((right + left ) / 2)
    const comparison = compare(element,array[middle]);
    if(comparison === 0)
        return middle
    
    const bound = comparison === -1
    ? [left , middle - 1]
    : [middle + 1 , right];

    return binarySearchWithTail(array,element,compare = defaultCompare , ...bound)
}



export let binarySearchWithArraySplitting = (array, element, compare = defaultCompare) => {
    if(array.length === 0) return -1

    let middle = Math.floor(array.length / 2)
    const comparison = compare(element,array[middle]);
    if(comparison === 0)
        return middle

    const [left,right] = comparison === -1
    ? [0 , middle - 1]
    : [middle + 1 , array.length];

    const index =  binarySearchWithArraySplitting(array.slice(left,right),element,compare = defaultCompare)
    return index === -1
    ? -1
    : left + index;
    
}




