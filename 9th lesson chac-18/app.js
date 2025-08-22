//____revision of palandrom taask

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

var arr =  [11,12,13,15,16,18,20] 

for (var i = 0 ; i < arr.length; i++) {
    var deff = arr[i + 1] - arr[i] // 2
  if (deff > 1) { // true
    for (let j = 1; j < deff ; j++) {
      arr.splice(i + j,0,arr[i] + j);  
    }  
}
}
console.log(arr);

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
