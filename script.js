//step 1. find the elements

var addTaskbutton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todolist = document.getElementById("todo-list");

//step 2. wrtie the behaviour

function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    todolist.insertAdjacentHTML("afterbegin", taskName);
}

//step 3. link to event handler

addTaskbutton.addEventListener('click', onAddTaskClicked);