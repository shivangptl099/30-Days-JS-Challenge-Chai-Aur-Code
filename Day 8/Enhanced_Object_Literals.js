let property1 = "title"
let property2 = "author"
let property3 = "year"

let book1 = {
    [property1] : "Atomic Habits",
    [property2] : "James Clear",
    [property3] : 2024
}

function getAuthorName(){
    return this.author
}

book1 = {...book1, getAuthorName}
console.log(book1)
console.log(book1.getAuthorName())