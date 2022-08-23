/*
const loginForm = document.getElementById("login-from");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"

function onSubmit(event) {
    event.preventDefault( );
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    /*greeting.innerText = "hello " + username;*/
    localStorage.setItem("username", username);
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



loginForm.addEventListener("submit", onSubmit);




