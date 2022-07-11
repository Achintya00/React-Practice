// global variables
const nodeItem = document.querySelector("#todoList");
const button = document.querySelector("#btn");

// to-do list things
function sol() {
  const newItem = document.createElement("li");
  newItem.classList.add("items");
  newItem.innerText = "Banana";

  nodeItem.appendChild(newItem);
}
button.addEventListener("click", sol);
