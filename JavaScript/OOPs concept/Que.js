//convert number into string in funtion

function convertNumberToString(num){
    return num.toString();
}
console.log(convertNumberToString(5));


//find the reaminder of two numbers

function findRemainder(num1,num2){
    return num1 % num2;
}
console.log(findRemainder(10,3));


//convert a string to lower case

function convertToLowerCase(str){
    return str.toLowerCase();
}
console.log(convertToLowerCase('HELLO'));


//remove spaces from a string in array

function removeSpaces(str){
    return str.split(' ').join('');
}
console.log(removeSpaces('Hello World'));

//find the last element of the array

function findLastElement(arr){
    return arr[arr.length-1];
}
console.log(findLastElement([1,2,3,4,5]));