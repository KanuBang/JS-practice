const age = parseInt(prompt("Enter an age"));

if(isNaN(age) || age <0) {
    console.log("Please Enter a real postive number!");
}

else if (age < 18) {
    console.log("You are too young!");
}

else if (age>=18 && age <50 ) {
    console.log("Drink as much as you drink possible!");
}

else if (age>=50 && age <80) {
    console.log("You can drink but drinking is not good for your age");
}

else if (age === 100) {
    console.log("WOWWWWWW!");
}

else {
    console.log("I know you quit drinking a long time ago");
}

/*
javaScript can bring and chagne html.
How?
The browser gives you documets that have many objects.
So The connection between javascript and html already exists through
objects that browesr offered 

*/