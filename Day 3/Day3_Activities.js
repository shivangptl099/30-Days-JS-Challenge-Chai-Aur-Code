//Activity 1 **************************************************************************
//Task 1
let a = 0;
let b = 1;
let c = -1;
function numberCheck(a){
    if(a > 0) console.log("It is Positive")
    else if(a < 0) console.log("It is Negative")
    else console.log("It is Zero")
}
numberCheck(a)
numberCheck(b)
numberCheck(c)

//Task 2
let age = 19
function votingEligibility(age){
    if(age >= 18) console.log("Eligible for voting")
    else console.log("Not Eligible")
}
votingEligibility(age)


//Activity 2 *********************************************************************
//Task 3
a = 1
b = 2
c = 3
function LargestOfThree(a, b, c){
    if(a > b) {
        if(a > c) return a
        else return c
    } else {
        if(b > c) return b
        else return c
    }
}
let ans = LargestOfThree(a, b, c)
console.log(ans + " is the largest.")

//Activity 3 **************************************************************************
//Task 4
let day = 1
switch (day) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Enter a number from 1 - 7"); break;
}

//Task 5

//Activity 4 **************************************************************************
//Task 6
a = 3
console.log((a % 2 == 0) ? "Even" : "Odd")

//Activity 5 **************************************************************************
//Task 7
let year = 2024
function leapYearCheck(year){
    if(year % 4 != 0) console.log("Not a Leap year")
    else {
        if(year % 100 == 0){
            if(year % 400 == 0) console.log("A Leap Year")
            else console.log("Not a Leap Year")
        } else console.log("A Leap Year")
    }
}
leapYearCheck(year)