let age = 25;
switch(age) {
    case age <= 12:
        console.log("Child");
        break;
    case (age > 12 && age <= 18):
        console.log("Teen");
        break;
    default :
        console.log("Adult");
}