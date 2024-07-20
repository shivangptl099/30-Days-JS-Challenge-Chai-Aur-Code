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
for(const key in book1){
    if(typeof(book1[key]) != 'function') // This Condition is for excluding functions
    console.log(key + ": " + book1[key])
}
console.log(Object.keys(book1))
console.log(Object.values(book1))