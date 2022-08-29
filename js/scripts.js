const I = 1;
const V = 5;
const X = 10;
const L = 50;
const C = 100;
const D = 500;
const M = 1000;

//input
const input = 450;
//need to find a way to convert the array of letters to the value of the letters.
// "LXVI"
// const conversionArray = ["L", "X", "V", "I"];
// = 50, 10, 
// const romanConversion = conversionArray.reduce(function(currentValue, element) {
//   return element + currentValue;
// }, 0);

let numeralValue = 0;
let value = 0;
const romanConversion = (numeralValue) => {
//need to find syntax for .filter  if (arr[i].filter("IVXLVDM")) {
    return numeralValue;
      if (arr[i]="I") {
        const value1 = 1;
      }
  } else {
    console.log(numeralValue);
    return incrementNumeralValue(numeralValue + 1);
  }
}
return numeralValue = value1 + value2;

// const romanConversion = (numeralValue) => {
//     if (isNaN(numeralValue)) {
//       return;
//     }
//     if (numeralValue >= conversionArray.length()) {
//       return numeralValue;
//     } else {
//       console.log(numeralValue);
//       return sumNumeralValue(element + currentValue);
//     }
//   }



// function deromanize (str) {
// 	var	str = str.toUpperCase(),
// 		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
// 		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
// 		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
// 		num = 0, m;
// 	if (!(str && validator.test(str)))
// 		return false;
// 	while (m = token.exec(str))
// 		num += key[m[0]];
// 	return num;
// }