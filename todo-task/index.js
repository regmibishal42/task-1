/*-------------------------
| Todo list
|--------------------------
*/
const todoList = [];

renderTodo();

/*-------------------------
|  Render todo list
|--------------------------
*/
function renderTodo() {
    // Get todo wrapper
    const todoListWrapper = document.getElementById('todo-list');

    // Map through todo list
    const todoItems = todoList
        .map(function (todo, index) {
            const done = todo.done ? 'done' : '';
            const check = todo.done ? 'fas fa-check-circle' : 'far fa-circle';

            // Return todo item
            return `<li>
                    <a href="#" class="todo-content ${done}" onclick="checkUncheckTodo(${index})">
                        <i class="${check}"></i>
                        <span class="todo-text">${todo.text}</span>
                    </a>
                    <a href="#" class="trash-todo" onclick="trashTodo(${index})">
                        <i class="far fa-trash-alt"></i>
                    </a>
                </li>`;
        })
        .join('');

    // Populate todo items
    todoListWrapper.innerHTML =
        todoItems !== ''
            ? todoItems
            : `<li class="no-todo">No todo found!</li>`;
}

/*-------------------------
|  Check / Uncheck todo
|--------------------------
*/
function checkUncheckTodo(index) {
    // Get specified todo
    let todo = todoList[index];

    // Toggle check / uncheck
    todo.done = !todo.done ? true : false;

    // Re-generate todo list
    renderTodo();
}

/*-------------------------
| Add todo
|--------------------------
*/
function addTodo(event) {
    // Prevent default
    event.preventDefault();

    // Get todo text
    let todoText = document.getElementById('todo-text');

    // If todo is not empty
    if (todoText.value !== '') {
        // Add todo
        todoList.push({
            text: todoText.value,
            done: false,
        });

        // Empty todo field
        todoText.value = '';

        // Re-generate todo list
        renderTodo();
    }
}

/*-------------------------
| Trash todo
|--------------------------
*/
function trashTodo(index) {
    // Remove todo from todo list
    todoList.splice(index, 1);

    // Re-generate todo list
    renderTodo();
}