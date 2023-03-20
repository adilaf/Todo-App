//step 1. find the elements

var addTaskbutton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todolist = document.getElementById("todo-list");
var templateContainer = document.getElementById("list-item-template");
var template = templateContainer. innerHTML

//step 2. wrtie the behaviour

function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput.value = "";
    var taskHTML = template.replace("<!--TASK NAME -->", taskName)
    templateContainer.insertAdjacentElementHTML("afterbegin", taskHTML);
}

function onTodoListContainer.insertAdjacentElementHTML(event){
    while(!targetElement.classList.container("task")){
        targetElement = targetElement.parentElement;
    }
    var checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked){
        targetElement.classList.add("completed")
    } else {
        targetElement.classList.remove("completed")
    }
}


//step 3. link to event handler
addTaskButton.addEventListener('click', onAddTaskClicked);
onTodoListContainer.addEventListener('click', onAddTaskClicked);