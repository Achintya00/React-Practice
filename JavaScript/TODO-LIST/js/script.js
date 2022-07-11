// global selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector("#btn");
const todoList = document.querySelector(".todo-list");
const remButton = document.querySelector("#btn2");
// functions;
// creating the element
const newItem = document.createElement("li");

// deleting the element
const xtraItem = document.createElement("button");
xtraItem.innerHTML = "&times";
xtraItem.classList.add("extra");

// event listeners

todoButton.addEventListener("click", add);
remButton.addEventListener("click", remove);

function add(e) {
  e.preventDefault();
  const newItem = document.createElement("li");
  newItem.classList.add("items");
  newItem.innerHTML = todoInput.value;
  todoList.appendChild(newItem);
  // tod
  newItem.appendChild(xtraItem);
  xtraItem.addEventListener("click", deleteElement);

  console.log(todoList);
}
