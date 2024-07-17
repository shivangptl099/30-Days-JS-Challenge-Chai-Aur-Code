const doubler = (n) => n * 2
const addFive = (n) => n + 5
function higherOrder(fun1, fun2, x){
    let res = fun1(x)
    return fun2(res)
}