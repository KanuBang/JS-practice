const charString = parseInt("This is the srting");
console.log("\"This is the string\" is " + charString + " In the parseInt");

const age = parseInt(prompt("how old are you?"));

if(isNaN(age)) {
    console.log ("Please wirte a number not a string or character.")
}

else {
    console.log ("you entered " + age +". right?");
}
