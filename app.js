function introduction (name) {
   console.log("i'm "+ name);
}

introduction("chanwu");
introduction("messi");
introduction("ronaldo");

function nan(a,b) {
    console.log(a+b);
}

nan();

function plus(first, second) {
    console.log(first+second);
}

function divide (first, second) {
    console.log(first/second);
}

plus(2,2);
divide(60,15);


const player = {
    name: "messi",
    sayHello: function(position) {
        console.log( player.name +" is ont the most best" + position);
    },
}

player.sayHello("Forward");






