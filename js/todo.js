const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

const TODOS_KEY = "todos";
let todos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleToDoDelete(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
}

function handleToDoSubmit(event){
    event.preventDefault();

    const todo = todoInput.value;
    todoInput.value = "";

    const todoObj = {
        text: todo,
        id: Date.now()
    }

    todos.push(todoObj);
    paintToDo(todoObj);
    saveToDos();
}

function paintToDo(todo){
    const li = document.createElement("li");
    li.innerText = todo.text;
    li.id = todo.id;   

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", handleToDoDelete);

    li.appendChild(button);
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
