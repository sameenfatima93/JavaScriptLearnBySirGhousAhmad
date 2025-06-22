// var userName = "smaeenfatima"  
// var myName= "sameen"

// var inputNum=prompt("enter any number");
// var result=0;
// document.write("multiples of:" + inputNum + "</br>");
// for(var i=1; i<=10; i++){
//     result+inputNum * i;
//     document.write(inputNum + '*' + i + '=' + result + '</br>');
// }

var inputNum = parseInt(prompt("Enter any number"), 10); // Convert input to a number
var result = 0;
document.write("Multiples of: " + inputNum + "</br>");
for (var i = 1; i <= 10; i++) {
    result = inputNum * i; // Calculate the product
    document.write(inputNum + " * " + i + " = " + result + "</br>");
}

