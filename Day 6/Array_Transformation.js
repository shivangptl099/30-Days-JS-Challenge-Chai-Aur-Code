let arr = [1,2,3,4,5]
console.log("At First, the Array is => " + arr)
//map function which accepts a callback function and applies on elements and map it to another array
let newArray = arr.map(x => x * 2)
console.log("The New Array After Using map fn => " + newArray)
//filter function takes a condition by which it filters and adds elements to another array
newArray = arr.filter(x => x % 2 == 0)
console.log("The New Array After Using filter fn => " + newArray)
//reduce function takes a callback function which will perform operations on all elements and aggregates the result
let sum = arr.reduce((temp, x) => {
    temp += x
    return temp
}, 0)
console.log("After Using Reduce fn, sum => " + sum)