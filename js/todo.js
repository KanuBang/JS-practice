const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
//const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos( ) {
    localStorage.setItem(TODOS_KEY , JSON.stringify(toDos));
    //localStorage.setItem("todos", toDos);

}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.text;
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
      };
      toDos.push(newTodoObj);
      paintToDo(newTodoObj);
    saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);
/*
function sayHello(item) {
    console.log("this is the turn of", item);
}
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEachg(sayhello);
}
*/
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
//this is arrow fucntion 

/*
function sexyFilter() {

}

[1,2,3,4].filter(sexyFilter);

sexyFilter(1) = 1
sexyFilter(2) = 2
sexyFilter(3) x 3
sexyFilter(4) = 4

자바스크립트가 sexyFilter 1,2,3,4 부를 것
*/

/*
filter practice
const arr = ["pizza", "banana", "tomato"];
function sexyFilter(food) {return food !== "banana"};
arr.filter(sexyFilter);

자바스크립트가 sexyFilte ["pizza", "banana", "tomato"]를 부르고
food가 차례대로 "pizza", "banana", "tomato" 값을 가질 것
만약 food !== "banana"나가 false를 리턴하면 그 foods는 새 array이에 포험되지 않을 것.
*/

/*
filter practice
const arr = [1234,5454,223,122,45,6775,334];
function sexyFunction(potato) {return potato <= 1000};
arr.filter(sexyFunction);
*/

/*
filter practice
const todos = [{text:"lalala"}, {text:"lololo"}];
function sexyFilter(todo) {return todo.text !== "lololo"};
todos.filter(sexyFilter);
*/