class TodoList {
  constructor(storage = localStorage) {
    this.storage = storage;
    this.tasks = JSON.parse(this.storage.getItem("tasks")) || [];
  }

  addTask(text) {
    const task = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.tasks.push(task);
    this.saveTasks();
    return task;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveTasks();
  }

  toggleTask(id) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.saveTasks();
  }

  saveTasks() {
    this.storage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

export default TodoList;
