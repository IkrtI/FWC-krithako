const list = document.getElementById("ft_list");
const newBtn = document.getElementById("new");

window.onload = loadTodos; 
newBtn.onclick = function () {
  const text = prompt("New TO DO:"); 
  if (text && text.trim() !== "") {
    addTodo(text.trim());
    saveTodos();
  }
};

function addTodo(text) {
  const div = document.createElement("div"); 
  div.textContent = text;

  div.onclick = function () {
    if (confirm("Do you want to remove this TO DO?")) {
      list.removeChild(div);
      saveTodos();
    }
  };

  list.prepend(div);
}

function saveTodos() {
  const todos = [];
  list.querySelectorAll("div").forEach(div => {
    todos.push(div.textContent);
  });
  document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos));
}

function loadTodos() {
  const cookies = document.cookie.split("; ");
  const todoCookie = cookies.find(c => c.startsWith("todos="));
  if (!todoCookie) return;

  const todos = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));
  todos.forEach(todo => addTodo(todo));
}
