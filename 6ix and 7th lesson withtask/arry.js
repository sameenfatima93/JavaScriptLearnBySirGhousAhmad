// <===**Arry (data type object)**===>
// arry formate 

//var arr = [];
 // this is empty arry initialized

// var arr =["ahmad", "sami", "asad","umer","usman"]

//if you want to find some pne so do this...
//console.log(arr [4]); // usman indexing number is 4
//console.log(arr [2]); // asad indexing number is 2
//console.log(arr [1]); // sami indexing number is 1

 // arry must have indexing start with 0,1,2,3....

 // arry list me sy ksi ek ko hume lyna hy to console.log ky ander arr ky bad sqare brecket ky ander us ki index number ko likhna hy "console.log(arr[4])

 // if i want to know how many values store in a arr //
//  console.log(arr.length);

//if you want to add a new value in arry  like we have arry  var arr =["ahmad", "sami", "asad","umer","usman"]
// now i want to add new one


// var arr =["ahmad", "sami", "asad","umer","usman"]
// arr[5] = "hunain"
// console.log(arr[6]); 
 // important note:  arry men indexing hoti hy yahan 5 pr koi nhi tha us pr hum ny hunain ko assign kr diya
   
// var arr =["ahmad", "sami", "asad","umer","usman"]
// arr = "hunain"
// console.log(arr[3]); 
// yahan pr arr ky bad [5] hata diya sirf arry likha chora to ab woh alphabate ki indexing ko dykhy ga string me bhi indexing hoti hy humain me 6 alphabet hen 0 to 5 index pr to console.log(arr[3]) krny pr hunain ky name me 3rd number ki index waly ko console me show kry ga kiune string me bhi indexing hoti 

// mix valued and data type

// var bioData = ["Ali" , 20 , "newYork" , true]
// console.log(bioData);


// var pets =[];
// pets[0] = "dog"
// pets[1] = "cat"
// pets[2] = "bird"
// pets[3] = "rabbet"


// console.log(pets[3]) rabbit
// console.log(pets[2]) bird 
// console.log(pets) all
// console.log(pets.length) 4 

//=======> arry mathod <========//
// arry hase also pre defiend mathode.

// (1) POP:-  ye arry ky aakhir sy 1 index ko remove krta hy

// var arr =["ahmad", "sami", "asad","umer","usman"]
// arr.pop(); // usman remove
// arr.pop(); // umer remove
// console.log(arr);   

// (2) PUSH:-  ye arry ky aakhir me 1 index ko barha dyta hy add kr dyta hy
// is me index number nhi btana prta jesy uper add krny pr index number bataya tha

//var arr =["ahmad", "sami", "asad","umer","usman"]
//arr.push("haniya") // haniya add
//arr.push("huzaifa");  // huzaifa add
// console.log(arr);  

//note: arry push ek sath multiple ko add kr skta hy 

//arr.push("sameen","fatima")
//console.log(arr); 

//(3) UNSHIFT:-  ye arry ky start me 1 index ko barha dyta hy add kr dyta hy

// var arr =["ahmad", "sami", "asad","umer","usman"]
// arr.unshift("haniya") // haniya add in start
// arr.unshift("huzaifa"); // huzaifa add in start
// console.log(arr);

//(3) SHIFT:-  ye arry ky start me 1 index ko hata dyta hy remove kr dyta hy

// var arr =["ahmad", "sami", "asad","umer","usman"]
// arr.shift() // ahmad remoc=ve from starting

// console.log(arr);

//arry has algorithom 1) FIFO (first in first out) 2) li
