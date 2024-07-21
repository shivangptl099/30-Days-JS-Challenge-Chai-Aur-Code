let arr1 = [1,2]
let arr2 = [3,4]
let arr = [...arr1, ...arr2, 5]
console.log(arr)

function sumAll(...inputs){
    let sum = 0
    for(i of inputs)
        sum += i
    return sum
}
console.log(sumAll(1,2,3,4,5))