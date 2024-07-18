let arr = [1, 2, 3, 4, 5]
console.log("Creation of Array => " + arr)
//First Element
console.log("First Element of array is => " + arr[0])
//Last Element
console.log("Last Element of array is => " + arr[arr.length - 1])
//Pushing Element at the end of the array
arr.push(6)
console.log("After Push function => " + arr)
//Popping Element out from the end of the array
arr.pop()
console.log("After Pop function => " + arr)
//Shifting array to the left resulting in the removal of first element
arr.shift()
console.log("After shift function => " + arr)
//using unshift to rev the process of shift with adding element in args
arr.unshift(1)
console.log("After unshit function => " + arr)