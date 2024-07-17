//Activity 1 *************************************************************
//Task 1
function evenOrOdd(n){
    return (n % 2 == 0) ? "Even" : "Odd"
}
let n = 3
// console.log("It is " + evenOrOdd(n))

//Task 2
function squareCalculation(n){
    return n * n
}
n = 5
//console.log("The Square of " + n + " is " + squareCalculation(n))

//Activity 2 *************************************************************
//Task 3
let a = 2
let b = 3
function findMaximum(a, b){
    return (a > b ? a : b)
}
// console.log("The Maximum of " + a + " & " + b + " is " + findMaximum(a,b))

//Task 4
let s1 = "Shiva"
let s2 = "XD"
function concatenation(s1, s2){
    return s1 + s2
}
let s = s1 + s2;
//console.log("The Concatenated String is " + concatenation(s1, s2))

//Activity 3 *************************************************************
//Task 5
a = 34
b = 35
const sumCalculationArrow = (a, b) => a + b;
// console.log(sumCalculationArrow(a, b))

//Task 6
s = "shivang"
const findCharInString = (s, c) => (s.indexOf(c) == -1 ? false : true)
let c = 'x'
// console.log(findCharInString(s, c))
// c = 'a'
// console.log(findCharInString(s, c))

//Activity 4 *************************************************************
//Task 7
function multiplication(a, b = 1){
    return a * b
}
// a = 10
// console.log(multiplication(a))
// b = 5
// console.log(multiplication(a, b))

//Task 8
function Greeting(name, age = 18){
    return "Hi " + name + "!"
}
// console.log(Greeting("Shivang"))
// console.log(Greeting("Shivang", 21))

//Activity 5 *************************************************************
//Task 9
function sayHi(){
    console.log("Hi")
}
function callingFunTimes(functionName, n){
    for(let i = 0; i < n; i++)
        functionName();
}
// callingFunTimes(sayHi, 3)

//Task 10
//Taking example of 2*value+5
let x = 10
const doubler = (n) => n * 2
const addFive = (n) => n + 5
function higherOrder(fun1, fun2, x){
    let res = fun1(x)
    return fun2(res)
}
// console.log(higherOrder(doubler, addFive, x))
// console.log(higherOrder(addFive, doubler, x))