import TodoList from "./TodoList/script";

describe("TodoList", () => {
  let mockStorage;
  let todo;

  beforeEach(() => {
    mockStorage = {
      getItem: jest.fn(() => null),
      setItem: jest.fn(),
    };
    todo = new TodoList(mockStorage);
  });

  test("should add a task", () => {
    const task = todo.addTask("Learn Jest");
    expect(todo.tasks.length).toBe(1);
    expect(task.text).toBe("Learn Jest");
    expect(mockStorage.setItem).toHaveBeenCalled();
  });

  test("should delete a task", () => {
    const task = todo.addTask("Delete me");
    todo.deleteTask(task.id);
    expect(todo.tasks.length).toBe(0);
  });

  test("should toggle task completion", () => {
    const task = todo.addTask("Toggle me");
    todo.toggleTask(task.id);
    expect(todo.tasks[0].completed).toBe(true);
  });
});
