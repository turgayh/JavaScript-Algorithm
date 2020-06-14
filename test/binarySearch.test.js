import * as binarySearch from '../algorithm/binarySearch'
describe("BinarySearch" ,() => {
    test("binarySearchWithLoops" , () =>{
        expect(binarySearch.binarySearchWithLoops([], 2)).toBe(-1)
        expect(binarySearch.binarySearchWithLoops([1], 1)).toBe(0)
        expect(binarySearch.binarySearchWithLoops([1], 2)).toBe(-1)
        expect(binarySearch.binarySearchWithLoops([1,2,3], 2)).toBe(1)
        expect(binarySearch.binarySearchWithLoops([1,2,3], 3)).toBe(2)
        expect(binarySearch.binarySearchWithLoops([1,2,3], 4)).toBe(-1)
        expect(binarySearch.binarySearchWithLoops([1,2,3,7], 3)).toBe(2)

    })
    test("binarySearchWithRecursion",()=>{
        expect(binarySearch.binarySearchWithRecursion([],2)).toBe(-1)
        expect(binarySearch.binarySearchWithRecursion([1], 1)).toBe(0)
        expect(binarySearch.binarySearchWithRecursion([1],2)).toBe(-1)
        expect(binarySearch.binarySearchWithRecursion([1,2,3], 2)).toBe(1)
        expect(binarySearch.binarySearchWithRecursion([1,2,3], 3)).toBe(2)
        expect(binarySearch.binarySearchWithRecursion([1,2,3], 4)).toBe(-1)
        expect(binarySearch.binarySearchWithRecursion([1,2,3,7], 3)).toBe(2)

    })
    test("binarySearchWithTail",()=>{
        expect(binarySearch.binarySearchWithTail([],2)).toBe(-1)
        expect(binarySearch.binarySearchWithTail([1], 1)).toBe(0)
        expect(binarySearch.binarySearchWithTail([1],2)).toBe(-1)
        expect(binarySearch.binarySearchWithTail([1,2,3], 2)).toBe(1)
        expect(binarySearch.binarySearchWithTail([1,2,3], 3)).toBe(2)
        expect(binarySearch.binarySearchWithTail([1,2,3], 4)).toBe(-1)
        expect(binarySearch.binarySearchWithTail([1,2,3,7], 3)).toBe(2)
    })


    test("binarySearchWithTail",()=>{
        expect(binarySearch.binarySearchWithArraySplitting([],2)).toBe(-1)
        expect(binarySearch.binarySearchWithArraySplitting([1], 1)).toBe(0)
        expect(binarySearch.binarySearchWithArraySplitting([1],2)).toBe(-1)
        expect(binarySearch.binarySearchWithArraySplitting([1,2,3], 2)).toBe(1)
        expect(binarySearch.binarySearchWithArraySplitting([1,2,3], 3)).toBe(2)
        expect(binarySearch.binarySearchWithArraySplitting([1,2,3], 4)).toBe(-1)
        expect(binarySearch.binarySearchWithArraySplitting([1,2,3,7], 3)).toBe(2)
    })
})