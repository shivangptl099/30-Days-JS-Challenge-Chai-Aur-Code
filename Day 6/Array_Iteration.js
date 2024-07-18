let arr = [1,2,3,4,5]
console.log("*** printing array using for loop ***")
for(let i = 0; i < arr.length; i++)
    console.log(arr[i])
console.log("*** printing array using forEach loop ***")
arr.forEach(x => console.log(x))