/*
const loginForm = document.getElementById("login-from");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onSubmit(event) {
    event.preventDefault( );
    console.log(event);
}

loginForm.addEventListener("submit", onSubmit);



