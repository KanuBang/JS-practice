const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick ( ) {
    h1.style.color ="blue";
}
function handleMouseEnter ( ) {
    h1.innerText = "Mouse is here";
}
function handleMouseLeave( ) {
    h1.innerText = "Mouse is gone";
}

function handleWindowResize( ) {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy( ) {
    alert("Don't copy");
}
function handleWindowOffline ( ) {
    alert("SOS no wifi");
}

function handleWindowOnline ( ) {
    alert ("connected");
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);
h1.removeEventListener;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);