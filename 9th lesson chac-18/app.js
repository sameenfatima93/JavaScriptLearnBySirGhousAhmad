//____revision of palandrom taask
//___formula to remember this Reverse string  → Compare  → Print 

// var userName = prompt("enter any name and check who is palandrom and who is not")
// var output =""

// for(var i = userName.length -1  ; i >= 0; i--) // yahan string reverse ho raha hy
  // {
  // output += userName[i] //yahan porany ky sath naya store ho raha hy take sb ek sath likhy aayen
  
// }
// console.log(output)
//  if (userName.toLowerCase() === output.toLowerCase()) // yahan compare ho raha hy 
//   {
//   console.log("this is a palandrom")
//  }else{
//   console.log("this is not palandrom");  
//  }

//____revision += formula

// var str = null;
//  str += "Saylani"
//  console.log(str);
 

// var arr =  [11 ,12, 13,16,19] 
// var missing =[]
// for (var i = 0 ; i < arr.length; i++) {
//     var deff = arr[i + 1] - arr[i]
//   if (deff > 1) {
//     for (let j = 1; j < deff ; j++) {
//         missing.push(arr[i]+ j)
        
        
//     }
    
// }

// }
// console.log(missing);

// console.log(arr);


// fixed missing number in arry series by sir Ghous Ahmad

// var arr =  [11,12,13,15,16,18,20] 

// for (var i = 0 ; i < arr.length; i++) {
//     var deff = arr[i + 1] - arr[i] // 2
//   if (deff > 1) { // true
//     for (let j = 1; j < deff ; j++) {
//       arr.splice(i + j,0,arr[i] + j);  
//     }  
// }
// }
// console.log(arr);

// fixed missing number in arry series by chatgpt

// var arr = [11, 12, 13, 15, 16, 18, 20];
// var newArr = [];

// for (var i = 0; i < arr.length - 1; i++) {
//     newArr.push(arr[i]);
//     var deff = arr[i + 1] - arr[i];
//     if (deff > 1) {
//         for (let j = 1; j < deff; j++) {
//             newArr.push(arr[i] + j); 
//         }
//     }
// }

// newArr.push(arr[arr.length - 1]);

// console.log(newArr);


//________missing number finding_________////

// var myNum = [12,13,14,16,17,18,20]
// for(var i = 0 ; i < myNum.length ; i++) // sab sy pehly simple loop chala 
//   {
// console.log(myNum[i])
// }
//__logic hum ny is sires me sy 2 number uthany hen pehli dafa loop chlny pr or is me bara number hamesha dosra wala hoga to bary number sy choty number ko minus krna hy answer me agr 2 hy matlab missing number hy agr answer 1 hy to missing number nhi hy condition ye bny gi 
// " if (myNum [ i + 1] i 0 index pr hy jo ky 12 ly kr aaye ga jo 0 index pr number hoga + 1 ka matlab hoga  index ky 0 ky bad jo number hy us ko bhi ly ga is hisab sy yahan 13 hoga yani hum 0+1 jo second wala number hy us ko utha rhy hen phir aagy if (myNum [ i + 1] - myNum[i]  hum ny is 13 kw us ys pehly waly 0index waly number sy minus kr diya "
//__ ye is tarha kam kry ga hum aagy waly ko pehly waly sy minus krwa rhy hen

//____task_perform_finding a missing number
// var myNum = [11,13,14,16,17,19,20]
// for (var i = 0; i < myNum.length; i++) {
//   if (myNum[i + 1] - myNum[i] > 1) {
//  console.log(myNum[i] + 1); 
//  // ye formula agr koi 1 number bech me sy missing ho to ye bata dyga sirf ek number ka diffence ho kiunke hum ny just +1 kia hy 
//   }
  
// }

//__ab agr sires me sy ek sath 2 ya 3 number missing ho jesy 12 , 17 , 20 to in ko find krny ka tariqa alg hy 

// var myNum = [11,13,16,19,20]
// for (var i = 0; i < myNum.length; i++) {
//   var diff = myNum[i + 1] - myNum[i]; //lop ka variable jis me i ho hamesha lopp ky ander bnta hy
//   if ( diff > 1) {
//     for (var j = 1; j < diff; j++) {

//       console.log(myNum[i] + j); 
    
      
//     }
   
//   }
  
// }

//___ missing number ki alg arry banani he to

// var myNum = [11,13,16,19,20]
// var missing = []
// for (var i = 0; i < myNum.length; i++) {
//   var diff = myNum[i + 1] - myNum[i]; //lop ka variable jis me i ho hamesha lopp ky ander bnta hy
//   if ( diff > 1) {
//     for (var j = 1; j < diff; j++) {
//       missing.push(myNum[i] + j)
      
      
//     }
    
//   }
  
// }
// console.log(myNum);

// console.log(missing);

//____jahan sy number missing hy usy wahen dalna hy jahan sy missing hy 

// var myNum = [11,13,16,19,20]
// var missing = []
// for (var i = 0; i < myNum.length; i++) {
//   var diff = myNum[i + 1] - myNum[i]; //lop ka variable jis me i ho hamesha lopp ky ander bnta hy
//   if ( diff > 1) {
//     for (var j = 1; j < diff; j++) {
//       missing.splice(myNum[i] + j)
      
      
//     }
    
//   }
  
// }
// console.log(myNum);

// console.log(missing); 

//_____ for set missing to there places________

var myNum = [11, 13, 16, 19, 20];

for (var i = 0; i < myNum.length - 1; i++) {
  var diff = myNum[i + 1] - myNum[i];

  if (diff > 1) {
    for (var j = 1; j < diff; j++) {
  
      myNum.splice(i + j, 0, myNum[i] + j);
    }
    // jump to last inserted value
    i += diff - 1;
  }
}

console.log(myNum);
