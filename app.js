const title = document.querySelector("div.hello:first-child h2");

console.log(title);
console.dir(title);

function handleTitleClick ( ) {
    title.style.color ="blue";
}

title.addEventListener("click", handleTitleClick);


