function leapYearCheck(year){
    if(year % 4 != 0) console.log("Not a Leap year")
    else {
        if(year % 100 == 0){
            if(year % 400 == 0) console.log("A Leap Year")
            else console.log("Not a Leap Year")
        } else console.log("A Leap Year")
    }
}