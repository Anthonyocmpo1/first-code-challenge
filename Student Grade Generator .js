// Determine the grade based on the marks
let marks=65
if (marks >= 79 && marks <= 100) {
    console.log("A");
}
else if(marks >=60 && marks<=79){
    console.log("B");
    

}
else if(marks>=49 && marks<=59){
    console.log("C");
    
}
else if(marks>=40 && marks<=49){
    console.log("grade D");
    
}
else if(marks>=0 && marks<=40){
    console.log("grade E");
    
}
else{
    console.log("Inavlid input");
    
}