import TodoList from "./script.js";

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const todo = new TodoList();

function renderTasks() {
  taskList.innerHTML = "";
  todo.tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.completed ? "completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      todo.toggleTask(task.id);
      renderTasks();
    });

    const span = document.createElement("span");
    span.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", () => {
      todo.deleteTask(task.id);
      renderTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

addTaskButton.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text) {
    todo.addTask(text);
    renderTasks();
    taskInput.value = "";
  }
});

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const text = taskInput.value.trim();
    if (text) {
      todo.addTask(text);
      renderTasks();
      taskInput.value = "";
    }
  }
});

// Initial render
renderTasks();
