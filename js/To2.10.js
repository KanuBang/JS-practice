/*2.0 first Js project*/
console.log("2.0 first Js project")
console.log("Excute Jsfile through html file. Js is already embedded in the browser");
console.log("So you should embed the jsfile to html")
/*2.1 Basic Data types*/
console.log("2.1 Basic Data types")
console.log("2<= Integer");
console.log("'a'<= A character");
console.log(" /*im chanwu/* <= A character String");
console.log("And the basic data types can be used with operator like +");

/*2.2 Variables 2.3 const and let*/
console.log("2.2 Variables 2.3 const and let")
var oldVersion = 2;
console.log("'var' is used in the past. 'var' can't show programmer's intention");

const fixed = null;
let canBeChanged = null;
console.log("Const means the variable should never be changed, only read.");
console.log("let means the variable can be changed");
console.log("So you should try to notice the meaning of variables when you write and read code");

/*2.4 Booleans*/
console.log("2.4 Booleans");
const a = true;
const b = false;
const c = null;
let d;
console.log(a,b,c,d);
console.log("a,b,c is a value. Especially, null means nothing and unknown");
console.log("Undefined is not a value. Undefined means just literally");

/*2.5 Array*/
console.log("2.5 Array");
const king = "spain";
const europe = ["serbia", "germany", undefined, false, null, king];
console.log(europe);
console.log("You can insert all the values like flase, null ans so on..")
console.log("To Access the index of an array, try like europe[index]")
console.log(europe[1]);
console.log("A computer count numbers from zero");
europe[2] = "italy";
console.log(europe);
console.log("You can update the array like europe[2] = \"italy\"");
europe.push("Romania");
console.log(europe);
console.log("You can also add one more values to an array like europe.push(\"Romania\")");
console.log("And the added values will be placed at the end of the array");

/*2.6 object*/
console.log("2.6 object")
console.log("As you can see, All the elements of an array holds the same meanings.");
console.log("Use an object if you try to put various properties");

const player = {
    name: "gavi",
    age: 20,
    nat: "spain"
}

console.log(player);
console.log("How to access an object?");
console.log("objectName.property => follow this rule. ")
console.log("player.name => access the element of an object");
console.log(player.name);
console.log("player[\"age\"] => access the element of an object");
console.log(player["age"]);
console.log("You can update and read values through accessing");
console.log("player.club=\"FCB\" => Add the element of an object");
player.club="FCB"
console.log(player);

/* cf. what is console.log? */
console.log("what is console.log?");
console.log("The answer is objectName.property");

/*2.7 2.8 function*/
console.log("2.7 2.8 function");

function hi ( ) {
    console.log("hi");
}
hi();
hi("hello");
console.log("function can be worked usefully when the saem code reepated");
console.log("The way of declare is function name (variable) { } ");
console.log("hi() => play and press on the button");
console.log("hi(\"hello\") => toss the data to inside of the function from outside of the function");

function print (text) {
    console.log(text);
}

print("Im chanWu");
console.log("A variable is necessary to receive data in inside of the function");
console.log("And A variable is only available in inside of the function");

/*update not const array, const object but the element of const array, const object */
console.log("2.9/2.10 update not const array, const object but the element of const array, const object");
console.log("we can update the element of const array and const object");
console.log("plz don't misunderstand we have been trying to update const array and const object");











