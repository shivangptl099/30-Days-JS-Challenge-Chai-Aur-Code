//Activity 1 ************************************************
//Task 1
let name = "Shivang"
let age = 21
//Using Back ticks `` to include ' or " both in string
let text = `Hello, My Name's ${name} and my age is ${age}.`
// console.log(text)

//Task 2
text = `My Name's ${name} and
my age is ${age}.
I am Currently in 4th Year at LDCE pursuing IT.`
// console.log(text)

//Activity 2 ************************************************
//Task 3
let arr = [10, 20, 30, 40, 50]
// Array Destructuring
let [n1, n2, n3, n4] = arr
// console.log(`n1 = ${n1}
// n2 = ${n2}
// n3 = ${n3}
// n4 = ${n4}`)

//Task 4
let books = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2024
}
//Object Destructuring
let {title, author, year} = books
console.log(`${title}' Author is ${author} and it was read by me in ${year}.`)

//Activity 3 ************************************************
//Task 5
arr = [1,2,3]
let newArray = [...arr, 4, 5]
// console.log(newArray)

//Task 6
function sumAll(...inputs){
    let sum = 0
    for(i of inputs)
        sum += i
    return sum
}
// console.log(sumAll(1,2,3,4,5))

//Activity 4 ************************************************
//Task 7
function multiply(a, b = 1){
    return a * b
}
// console.log(multiply(2,3))
// console.log(multiply(2))

//Activity 5 ************************************************
//Task 8
let dname = "Tony"
let dcolor = "white"
let dage = 8

function bark(){
    return "Woof!"
}

let dog = {dname, dcolor, dage, bark}
// console.log(dog)

//Task 9
let property1 = "name"
let property2 = "age"

let human = {
    [property1] : "Shivang",
    [property2] : 21
}

// console.log(human)