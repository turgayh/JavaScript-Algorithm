const binarySearch  = require('../algorithm/binarySearch');
test("[], 2",()=>{
    expect(binarySearch([], 2)).toBe(-1)
})
test("[1], 1",()=>{
    expect(binarySearch([1], 1)).toBe(0)
})
test("[1], 2",()=>{
    expect(binarySearch([1], 2)).toBe(-1)})
test("[1,2,3], 2",()=>{
    expect(binarySearch([1,2,3], 2)).toBe(1)
})
test("[1,2,3], 3",()=>{
    expect(binarySearch([1,2,3], 3)).toBe(2)
})
test("[1,2,3], 4",()=>{
    expect(binarySearch([1,2,3], 4)).toBe(-1)
})
test("[1,2,3,7], 3",()=>{
    expect(binarySearch([1,2,3,7], 3)).toBe(2)
})