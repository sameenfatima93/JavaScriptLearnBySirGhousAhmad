// for loops//
// id ka syntex hota hy pehly "for" use hota phir phir "var" or is ki vakue hoti hy "i" koch or bhi rkh skty hen lekin stenderd hy i rkhna ' var i = 0 ' or var ky bad semi coln ; ata phir lagty condition jesy if me lgti hy jesy 1 > 7 wagera yahan is tarha hogi " i < 8 ;" (is condition ka matlb i chota hy 8 sy to ye tru hy) us ky semi coln ky bad aagy lgaty increement ya decreement " i++" (i++ its called ubdation ) ye true base pr hy jb tk loop chlta hy jb tk condition true hoti hy jesy hi fals hogi condition loop rok jaye ga


// for (var i = 0; i < 7; i++){
//     console.log(i);

// jb tk loop chly ga us ki condition last pr fals hogi to loop rok jaye ga 6 pr rok jaye ga 
// break 
// break jb loop ko milta hy woh wahen rok jata hy bilkol aagy nhi chalta 

// }
// console.log(i); 
// lekin jb loop ky bahar console hy us me i ki velue 7 aaye gi kiune ky jahan loop roka woh last 7 thi loop nhi chly ga baahr wala consol chaly ga 

// js me lop ko rokny ky 2 tariqy hen 1) ya to break lagao ya condition false kr dovar

//------example-2---------//

// for (var i = 0; i <= 7; i++){
//     console.log(i); 
// }
// console.log(i);


// task plandiram words jo sedha prho ya ulta same hi parha jaata hy

// var word = prompt("Enter word");

// for(var i = 0 ; i < word.length; i++){


// console.log(i);
//let explan agr consol.log (i); krty to jo prompt me name aya hy us ki sari indexing bta dya jesy 'sameen' to lop ny chl kr bta dia 0 sy 5 tk number 6 nhi btaya kiunke 6 pr conditio fals ho rhi hy

// console.log(word[i]); 
// ye kia to us ny har alphabet ko alg line me likh diya 
// }

//now hum ko ab name ky alphabet ulty chahiye last wala sb sy uper is ko kehty hen reverse letter

// concrinate  this empoty screen is a bag 

// var reverse = "";

// for(var i = word.length - 1; i >= 0 ; i--){
//  reverse += word[i]
//     // console.log(word[i]);

// }

// var palandrom = prompt("enter any letter");
// for (let i = 0; i < palandrom.length; i++) {
//     console.log(palandrom[i]);
//     ;  
// }
// its a simple loop

// var palandrom = prompt("enter any letter");
// var reverse = ""
// for (var i = palandrom.length - 1 ; i >= 0 ; i--) {
//     reverse += palandrom[i]


// }
// // console.log(reverse);
// if (palandrom === reverse) {
//     console.log("its a palandrom");

// }else{
//     console.log("it's not a palandrom");

// }

// var number = [23,50,60,34,12,67,80]
// minNumber = number[0]
// for (let i = 0; i < number.length; i++) {
//     if (minNumber > number[i] ) {
//         minNumber = number[i]

//     }

// }
// console.log(minNumber);

// var number = [23,50,60,34,12,67,80]
// maxNumber = number[0]
// for (let i = 0; i < number.length; i++) {
//     if (maxNumber < number[i] ) {
//         maxNumber = number[i]

//     }

// }
// console.log(maxNumber);

// console.log(reverse);
//loop bnany ky bad ab humen if ki condition lgani hy

//  if(word === reverse){
//     console.log("it's a palindrom")
//  }
// else{
//     console.log("it's not a palindrom")
// }




// final syntex of palindrom task


// var word = prompt("Enter Any word")
// var reverse = ""

// for(var i = word.length -1 ; i >= 0 ; i-- ){
// reverse += word[i] 
// }

// if(word === reverse ){
//     console.log("it is a plandirom ");

// }else{
//     console.log("it's not a plandirom ");

// }

// arry men sy min or max fine krna hy

// sb sy pehly min find krna hy
//  var arr  = [12, 65 , 99 , 43 , 10 , 11 , 98 ] 
//  var minNum = arr[0];
//  var maxNum = arr[0];
// dosry var men ksi bhi ek number ko arry ky assign krna hy 

//  for(var i = 0 ; i < arr.length ; i++){
// if( minNum > arr[i]){
//     minNum = arr[i]
// }
//     if( maxNum < arr[i]){
//         maxNum = arr[i]
//     }
//  }
//  console.log(maxNum);

// final syntex minimum number finding 

//  var arr  = [12, 65 , 99 , 43 , 10 , 11 , 98 ] 
//  var minNum = arr[0]

//  for(var i = 0 ; i < arr.length ; i++){
//     if(minNum > arr[i])
//         minNum = arr[i]
//  }
// console.log(minNum);

//   final syntex maximum number finding 

// var arr  = [12, 65 , 99 , 43 , 10 , 11 , 98 ] 
//  var maxNum = arr[0]

//  for(var i = 0 ; i < arr.length ; i++){
//     if(maxNum < arr[i])
//         maxNum = arr[i]
//  }
// console.log(maxNum);

//ksi series men sy koi number missing hy or usy find krna ho to is liye loop un istimal krty hen

// var arr = [11 , 12 , 14 , 15 , 16 , 17 , 18 , 19 , 20]
// for (var i = 0 ; i < arr.length; i++){

// console.log(arr[i] );
//simple itna kia to console me pori line sy series aa gaye ab agr chahty hen ky do number brabar me aayen to  is tarha likhna hy 

// console.log(arr[i] , arr[i + 1]);
// 
// is ka answer un aaye ga ek line me 11 12 phir 12 13 do do number kr ky 
// ab agr ye janna ho ky kon a number missing hy to minus kia jaye ga 11 - 12 = 1  12 - 14 = 2 to jaan mius krny pr 1 aaye ga woh thek hy or jahan 2 answer me aa raha hy woh galat hy us ky liye arr[i +1] or arr[i] ky drmiyan koma hata kr minus krna hy arr[i+1] - arr[i]  to jawab me jahan 1 ana hy aaye gaor jahan 2 answer jawba aaye ga woh show ho jae ga
// console.log( arr [i + 1] - arr[i]);
// ab 2 pr conditon lagani hy jb 2 aaye to pta chaly kon sa number missing hy  us ky liye 

// if(arr [i + 1] - arr[i] === 2){
// console.log(arr[i]);
// is ky jwab me aaye ga woh number jis ko aagy waly sy plus krny pr 2 aya tha jesy yahan aaye ga 12 ab missing ky liye 12 + 1 kr do to missing word mil jaye ga
//     console.log(arr[i] + 1);  
// }
// }

// now full syntex of find the missing word 


// var arr = [31 , 32 , 34 , 35 , 36 , 37 , 38 , 39 , 40]
// for (var i = 0 ; i < arr.length; i++){
//     if(arr [i + 1] - arr[i] === 2){
//         console.log(arr[i] + 1); 
//     }
// }


// agr ek sy ziada missing hen  to 
//yehi formula hy woh tamam show ho jaye gi jo missing hy  

// var arr = [31 , 32 , 34 , 35 , 36 ,  38 , 39, 40]
// for (var i = 0 ; i < arr.length; i++){
//     if(arr [i + 1] - arr[i] === 2){
//         console.log(arr[i] + 1); 
//     }
// }

//lekin ye fomula ziada missing pr jb work kry ga jb alg alg jaghon sy koi number missing ho do qareb qareb ek sath ky na hon hesy 34 or 39 missing hy to ye formula chal jaye ga lekin agr do qareb ky number missing hen jesy 34 or 35 tb humari === 2 wali condition fail ho jaye gi is liye jb ek sy ziada missing ho to

// var arr = [31  , 35 , 36 , 37, 38 , 39, 40]

// for (var i = 0 ; i < arr.length; i++){
//     var diff = arr [i + 1] - arr[i]
//     if(diff > 1){
//         for(var j = 1 ; j < diff ; j++)
//         console.log(arr[i] + j); 
//     }
// }
//ye formula b ka hy jb series ky ander ek sy ziada missing hon series sy bahar waly pr nhi chly ga

//_____prectice____

// var number = [11, 13,14,17,18,20];
//  var missingNum = [];
// for (var i = 0; i < number.length; i++) {
//     var diff = number[i + 1] - number[i];
//      if (diff > 1) {
//         for(var j=1 ; j < diff; j++ ){
//             // console.log(number[i] + j);
//             // missingNum.push(number[i] + j)
//             number.splice( i+j , 0 ,number[i] + j)
            
//         }
        
//     }
// }
// console.log(number)

//____agr first 0index pr missing ho to ye kren gy________//

var number = [13, 14, 17, 18, 20];
var start = 11; // starting number jahan se sequence hona chahiye
var missingNum = [];

// Step 1: check agar first element hi bada hai
if (number[0] > start) {
  for (var k = start; k < number[0]; k++) {
    number.unshift(k); // missing ko start me insert karo
  }
}

// Step 2: beech ke missing numbers fill karo
for (var i = 0; i < number.length; i++) {
  var diff = number[i + 1] - number[i];
  if (diff > 1) {
    for (var j = 1; j < diff; j++) {
      number.splice(i + j, 0, number[i] + j);
    }
  }
}

console.log(number);
