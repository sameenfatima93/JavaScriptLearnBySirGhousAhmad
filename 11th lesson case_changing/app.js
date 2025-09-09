//________chapter_21___________________
//)_______canging case_________________//
//___to single ord capitalization/////////

// var fullName = "sameen";
// fullName = fullName.slice(0,1).toUpperCase() + fullName.slice(1).toLowerCase() 
// console.log(fullName);


//_______first latter capital of any word using loop_____//
//_____all first latter caputlze in a word________/////

var fullName = prompt("enter your full name")
var result = "";
var temp = "";
for (var i = 0; i < fullName.length; i++) {
    if (i === 0) {
        result += fullName[i].toUpperCase();
    } else if (fullName[i] === " ") {
        temp = fullName[i + 1].toUpperCase();
        result += fullName[i];
    }
    else {
        if (temp) {
            result += temp;
            temp = "";
        } else {

            result += fullName[i];
        }
    }
}
console.log(result);

