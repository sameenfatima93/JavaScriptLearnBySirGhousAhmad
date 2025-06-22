// <======*comparision operator with if and else*=====>//


// var userName = prompt("Enter your user name")
// if (userName) {
//     console.log(userName);
    
// } else {
//     alert(" please Enter your name");
    
// }

// onother way to write this code  with !== is better work then === 

// var userName = prompt("Enter your user name")

// if (userName !== "" ) {
//     console.log(userName);
    
// } else {
//     alert(" please Enter your name");
    
// }

// <====*if alse If and alse*======>//

// var skills = prompt("enter your skills")

// if (skills === "html") {
//     console.log("10000");
      
// }
// else if (skills === "css") {
//     console.log("20000");
// }
// else if (skills === "javaScript") {
//     console.log("40000");
// }
// else {
//     console.log("0");
    
// }


// <====*itesting set cundition &&  *======>//
// && and

// var skills = prompt("enter your skills")
//  var exp = prompt("Enter your experionce")
//  if (skills === "html" && exp > 2) {
//     console.log("Hired")
    
//  } else {
    
//  }

 // ||  or

//  var skills = prompt("enter your skills")
//  var exp = prompt("Enter your experionce")
//  if (skills === "html" || exp > 2) {
//     console.log("Hired")
    
//  } else {
    
//  }

 var skills = prompt("enter your skills")
 var exp = +prompt("Enter your experionce")
 var city = prompt("enter your city ")
//  var salary = prompt("entre your salary")

//  if (skills === "javascript" || exp > 2 && city === "karachi") {
//     console.log("Hired")
    
//  } 
 // is me issue ho skta hy jb alg alg statement chahiye to is ka hala h brecket me dal den donon ko

  if ((skills === "javascript" || exp > 2) && city === "karachi") {
    console.log("Hired")
    
 } 