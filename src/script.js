/*Get Element by ID*/
    let addTaskButton = document.getElementById("add-task");
    let newTaskInput = document.getElementById("task-input");
    let todoListContainer = document.getElementById("todo-list");
    
/* Locate where <script> tag which contains our template  */
    let templateElement = document.getElementById("list-item-template");
/* Lets get the template, which is just all the HTML beteen the <script> tag */
    let template = templateElement.innerHTML;

/* Step 2. Lets write the function to handle the 'click' event
 ---------------------------------------------------------------*/
    function onAddTaskClicked(event) {
        /* We don't need any information about what triggered the event
        so we can ignore the 'event' parameter.
          
        Now lets get what was typed in the text box on the form*/
        let taskName = newTaskInput.value;
        /* Now clear the text box */
        newTaskInput.value = "";

        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);

        todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
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
    
    
    /* Step 3 make the event trigger our functions
    -----------------------------------------------*/ 
    
    addTaskButton.addEventListener('click', onAddTaskClicked);
    todoListContainer.addEventListener('click', onTodolistClicked);