//Activity 1 ****************************************************************
//Task 1
for(let i = 1; i <= 10; i++)
    console.log(i)

//Task 2
for(let i = 1; i <= 10; i++)
    console.log("5 x " + i + " = " + (5 * i))

//Activity 2 ****************************************************************
//Task 3
let i = 1
let sum = 0
while(i <= 10){
    sum += i
    i++
}
console.log(sum)

//Task 4
i = 10
while(i > 0){
    console.log(i)
    i--
}

//Activity 3 ****************************************************************
//Task 5
i = 1
do{
    console.log(i)
    i++
} while(i <= 5)

//Task 6
function factorialCalculation(n){
    let fact = 1
    let i = 1
    do{
        fact *= i
        i++
    } while(i <= n)
    console.log(fact)
}
factorialCalculation(5)

//Activity 4 ****************************************************************
//Task 7
for(let i = 1; i <= 5; i++){
    let s = ""
    for(let j = 1; j <= i; j++){
        s += "*"
    }
    console.log(s)
}

//Activity 5 ****************************************************************
//Task 8
for(let i = 1; i <= 10; i++){
    if(i == 5) continue
    else console.log(i)
}

//Task 9
for(let i = 1; i <= 10; i++){
    if(i == 7) break
    else console.log(i)
}