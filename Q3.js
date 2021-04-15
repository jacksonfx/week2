//Q3
const str = 'the brown fox jumped over the lazy dog';
let counter = 0;  
var l = str.length
let spaceNumber = 0 
while (counter < l){
    if (str[counter] === ' ') {
        spaceNumber ++
    }
   counter ++   
}
console.log(spaceNumber)



var i;
let spaceNumber2 = 0;
for (i = 0; i < l; i++) {
    if (str[i] === ' ') {
        spaceNumber2 ++
    }
}
console.log(spaceNumber2);