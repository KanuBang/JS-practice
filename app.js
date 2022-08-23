/*
const loginForm = document.getElementById("login-from");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");

function onSubmit(event) {
    event.preventDefault( );
    console.log(event);
}

function onLink(event) {
    event.preventDefault();
    console.log(event);
    /* alert("clicked!"); */
}

loginForm.addEventListener("submit", onSubmit);
link.addEventListener("click",onLink);



