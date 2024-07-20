//Activity 1 ******************************************************
//Task 1
let book1 = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2024,
}
// console.log(book1)

//Task 2
// console.log(book1.title)
// console.log(book1.author)

//Activity 2 ******************************************************
//Task 3
book1 = {
    title : "Atomic Habits",
    author : "James Clear",
    year : 2024,
    getTitleAndAuthor : function(){
        return this.title + "'s Author's name is " + this.author + ".";
    },
    setYear : function(year){
        this.year = year
    }
}
// console.log(book1.getTitleAndAuthor())

//Task 4
// book1.setYear(2025)
// console.log(book1)

//Activity 3 ******************************************************
//Task 5
let library = {
    name : "LDCE",
    books : ["Atomic Habits", "Subtle Art of Not Giving a Fuck"]
}
// console.log(library)

//Task 6
// console.log(library.name)
// console.log(library.books)

//Activity 4 ******************************************************
//Task 7
//As mentioned above
// getTitleAndAuthor : function(){
//     return this.title + "'s Author's name is " + this.author + ".";
// }
// console.log(book1.getTitleAndAuthor())

//Activity 5 ******************************************************
//Task 8
// for(const key in book1){
//     if(typeof(book1[key]) != 'function') // This Condition is for excluding functions
//     console.log(key + ": " + book1[key])
// }

//Task 9
// console.log(Object.keys(book1))
// console.log(Object.values(book1))