const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const TODO_KEY = "todos"
let todos = [];

function saveTodos() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    const delText = document.createElement("del");
    delText.appendChild(li.querySelector("span"));
    li.appendChild(delText);
    li.appendChild(li.querySelector("button"));
    // li.remove()
}


function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    span.innerText = newTodo + " ";
    btn.innerText = "✅"
    btn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    paintTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    // todoList.appendChild()
}

todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODO_KEY);

if (savedTodos!==null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}