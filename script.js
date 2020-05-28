const inputField = document.getElementById("input-field");
const todoInput = document.getElementById("todoInput");
const todobutton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todobutton.addEventListener("click", addtodo);

function addtodo(event) {
  if (document.getElementById("input-field").value === "") {
    alert("NOOOO");
  } else {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    todoList.appendChild(todoDiv);

    const newTodo = document.createElement("li");
    newTodo.innerText = inputField.value;
    newTodo.classList.add("newTodo");
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.classList.add("newButton");
    todoDiv.appendChild(completedButton);
    completedButton.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      item.remove();
    });

    inputField.value = "";

    console.log(inputField.value);
  }
}

// async function deleteme() {
//   var deleteBtn = await 100;
//   // let deleteBtn = document.querySelector(".but");
//   // const item = e.target.parentElement;

//   // item.remove();

//   console.log(deleteBtn);
// }

// deleteme();
