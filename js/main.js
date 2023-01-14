const form = document.querySelector(".form");
const input = document.querySelector(".inp");
const list = document.querySelector(".list");

const localData = localStorage.getItem("token");
console.log(localData);

if (!localData) {
  location.replace("register.html");
}

// TODOS
//* Function to get all information of todos...
async function getTodos() {
  const res = await fetch("http://localhost:5000/todo", {
    headers: {
      //* If no an Authorization keyword, checked by database and denied your request.
      Authorization: localData,
    },
  });
  const data = await res.json();
  renderTodo(data, list);
}
getTodos();

//* Function to render added todos..
function renderTodo(array, node) {
  node.innerHTML = "";
  array.forEach((todo) => {
    node.innerHTML += `
      <li class='list-group-item d-flex justify-content-between alig-items-center'>
      <p class='my-auto p-0'>${todo.id}. ${todo.todo_value}</p>
            <div class=''>
                <button data-todo-id='${todo.id}' class="btn btn-success todoEdit">EDIT</button>
                <button data-todo-id='${todo.id}' class="btn btn-danger todoDelete">DELETE</button>
            </div>
        </li>
    `;
  });
}

//* When you submit, the response will be sent to todo, body is required (text: input.value)
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  fetch("http://localhost:5000/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localData,
    },
    body: JSON.stringify({
      text: input.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        getTodos();
      }
    })
    .catch((err) => console.log(err));
});

//* Function to delete todos, by METHOD:DELETE
const todoDeleteFunc = (id) => {
  fetch(`http://localhost:5000/todo/${id}`, {
    method: "DELETE",
    headers: { Authorization: localData },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        getTodos();
      }
    })
    .catch((err) => console.log(err));
};

//* Function to edit todos, by METHOD:PUT, BODY and text
const todoEditFunc = (id) => {
  const newPrompt = prompt("Would you like to edit something?");
  fetch(`http://localhost:5000/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localData,
    },
    body: JSON.stringify({
      text: newPrompt,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        getTodos();
      }
    })
    .catch((err) => console.log(err));
};

//* When click the list, it tries to figure out what you clicked on
list.addEventListener("click", (evt) => {
  if (evt.target.matches(".todoDelete")) {
    const todoId = evt.target.dataset.todoId;
    todoDeleteFunc(todoId);
  }

  if (evt.target.matches(".todoEdit")) {
    const todoId = evt.target.dataset.todoId;
    todoEditFunc(todoId);
  }
});
