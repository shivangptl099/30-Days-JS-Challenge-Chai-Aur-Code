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