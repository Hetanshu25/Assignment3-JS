// Get DOM elements
const toDoInput = document.getElementById('input');
const addButton = document.getElementById('button');
const toDoList = document.getElementById('list');

// Function to create a new to-do item
function addToDo() {
    const newToDo = document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', completeToDo);
    newToDo.appendChild(checkBox);

    const toDoText = document.createElement('span');
    toDoText.innerText = toDoInput.value;
    newToDo.appendChild(toDoText);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', removeToDo);
    newToDo.appendChild(deleteButton);

    toDoList.appendChild(newToDo);
    toDoInput.value = '';
}

// Function to mark a to-do item as complete
function completeToDo() {
    const toDoItem = this.parentElement;
    toDoItem.classList.toggle('completed');
}

// Function to remove a to-do item
function removeToDo() {
    const toDoItem = this.parentElement;
    toDoList.removeChild(toDoItem);
}

// Add event listener to the "Add" button
addButton.addEventListener('click', addToDo);

