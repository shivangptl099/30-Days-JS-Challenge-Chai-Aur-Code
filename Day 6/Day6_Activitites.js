//Activity 1 ***************************************************************************
//Task 1
let arr = [1, 2, 3, 4, 5]
// console.log(arr)

//Task 2
// console.log(arr[0])
// console.log(arr[arr.length - 1])

//Activity 2 ***************************************************************************
//Task 3
arr.push(6)
// console.log(arr)

//Task 4
arr.pop()
// console.log(arr)

//Task 5
arr.shift()
// console.log(arr)

//Task 6
arr.unshift(1)
// console.log(arr)

//Activity 3 ***************************************************************************
//Task 7
let newArray = arr.map(x => x * 2)
// console.log(newArray)

//Task 8
newArray = arr.filter(x => x % 2 == 0)
// console.log(newArray)

//Task 9
let sum = arr.reduce((temp, x) => {
    temp += x
    return temp
}, 0)
// console.log(sum)

//Activity 4 ***************************************************************************
//Task 10
// for(let i = 0; i < arr.length; i++)
//     console.log(arr[i])

//Task 11
// arr.forEach(x => console.log(x))

//Activity 5 ***************************************************************************
//Task 12
let twoDimArray = [[1,2,3], [4,5,6]]
// console.log(twoDimArray)

//Task 13
// for(let i = 0; i < twoDimArray.length; i++)
//     for(let j = 0; j < twoDimArray[0].length; j++)
//         console.log(twoDimArray[i][j])