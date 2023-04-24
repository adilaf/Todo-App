/*Get Element by ID*/
    let addTaskButton = document.getElementById("add-task");
    let newTaskInput = document.getElementById("task-input");
    let todoListContainer = document.getElementById("todo-list");
    let templateElement = document.getElementById("list-item-template");
    let template = templateElement.innerHTML;

    var showActiveButton = document.getElementById("show-active")
    var showAllButton = document.getElementById("show-all")
    var showCompletedButton = document.getElementById("show-completed")

    function saveTasks(name, isCompleted){
        localStorage.setItem(name, isCompleted);
    }
    
/* Step 2. Lets write the function to handle the 'click' event
 ---------------------------------------------------------------*/
    function onAddTaskClicked(event) {
        let taskName = newTaskInput.value;
        /* Now clear the text box */
        newTaskInput.value = "";

        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);

        todoListContainer.insertAdjacentHTML('beforeend', taskHTML);

        saveTasks(taskName, false)
    }

    function showActiveTasks(){
        var tasks = document.getElementsByClassName('task')
        for (let i=0; i < tasks.length; i++){
            
            if (tasks[i].classList.contains("completed")){
                var element = tasks[i]
                element.getElementsByClassName.display = 'none';
            }else{
                tasks[i].getElementsByClassName.display = "block";
            }
        }
    }

    function showAllTasks(){
        var tasks = document.getElementsByClassName('task')
        for (let i=0; i < tasks.length; i++){
            
            if (tasks[i].style.display = 'block');
        }
    }


    function showCompleted(){
        var tasks = document.getElementsByClassName('task')
        for (let i=0; i < tasks.length; i++){
            
            if (tasks[i].classList.contains("completed")){
                var element = tasks[i]
                element.getElementsByClassName.display = 'block';
            }else{
                tasks[i].getElementsByClassName.display = "none";
            }
        }
    }
    
    //add an event onClick //
    function onTodolistClicked(event) {
        let targetElement = event.target;
    
        while (!targetElement.classList.contains("task")) {
            targetElement = targetElement.parentElement;
        }
    
        let checkbox = targetElement.querySelector(".checkbox");
    
        if (checkbox.checked) {
            targetElement.classList.add("completed");
        } else {
            targetElement.classList.remove("completed");
        }
    }
    
    var taskNameElement = targetElement.querySelector(".task-name")
    var taskName = taskNameElement.innerText;

    saveTasks(taskName, checkbox.checked)

    function renderTasks() {
        for (i = 0; i < localStorage.length; i++){
            var taskName = localStorage.key(i);
            var isCompleted = localStorage.getItem(taskName) = "true";
            var taskHTML = template.replace("<!--TASK NAME-->", taskName);

            todoListContainer. insertAdjacentHTML('beforeend', taskHTML);
            var latestTask = todoListContainer.lastElementChild;

            if (isCompleted){
                latestTask.classList.add("completed");
                latestTask.querySelector(".checkbox").checked = true;
            }
        }
    }


    
    /* Step 3 make the event trigger our functions
    -----------------------------------------------*/ 

    addTaskButton.addEventListener('click', onAddTaskClicked);
    todoListContainer.addEventListener('click', onTodolistClicked);
    showActiveButton.addEventListener('click', shiwActiveTasks);
    showAllButton.addEventListener('click', showAllTasks);
    showCompletedButton.addEventListener('click', showCompleted);