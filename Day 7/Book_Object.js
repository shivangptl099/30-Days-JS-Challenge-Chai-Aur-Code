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

console.log(book1)
console.log(book1.title)
console.log(book1.author)
console.log(book1.year)
console.log(book1.getTitleAndAuthor())
book1.setYear(2025)
console.log(book1.year)