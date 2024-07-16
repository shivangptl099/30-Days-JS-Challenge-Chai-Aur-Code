let marks = 60
switch (true) {
    case (marks >= 90): console.log("Grade A"); break;
    case (marks >= 80): console.log("Grade B"); break;
    case (marks >= 60): console.log("Grade C"); break;
    case (marks >= 40): console.log("Grade D"); break;
    case (marks < 40): console.log("Grade F"); break;
    default: console.log("Enter Valid Marks"); break;
}