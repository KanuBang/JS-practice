const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title = document.getElementsByTagName("h1");
console.log(title);

const title1 = document.querySelector(".hello h1");
console.log(title1);

const title2 = document.querySelector(".hello h2");
console.log(title2);

const title3 = document.querySelectorAll(".hello h2");
console.log(title3);

const sameId1 = document.querySelector("#searchId");
const sameId2 = document.getElementById("searchId");

console.log(sameId1);
console.log(sameId2);

const change = document.querySelector(".hello h2");
change.innerText = "change";
console.log(change);


