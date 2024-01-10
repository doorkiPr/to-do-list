import deleteElement from "./DeleteArrayElement";

function renderTasks(arrayOfTasks) {
    const taskList = document.querySelector("taskList");
    taskList.innerHTML = "";

    arrayOfTasks.forEach(task => {
        const taskElement = document.createElement("div");
        const taskStatus = document.createElement("input");
        const taskTitle = document.createElement("h4");
        const taskDesc = document.createElement("p");
        const taskDate = document.createElement("div");
        const taskBtnWrapper = document.createElement("div");
        const editTask = document.createElement("button");
        const deleteTask = document.createElement("button");

        taskElement.classList.toggle("task");
        taskStatus.classList.toggle("taskStatus");
        taskTitle.classList.toggle("taskTitle");
        taskDesc.classList.toggle("taskDesc");
        taskDate.classList.toggle("taskDate");
        taskBtnWrapper.classList.toggle("taskBtnWrapper");
        editTask.classList.toggle("editTask");
        deleteTask.classList.toggle("deleteTask");

        taskStatus.type = "checkbox";
        taskTitle.textContent = task.getTitle();
        taskDesc.textContent = task.getDesc();
        taskDate.textContent = tesk.getDate();
        editTask.textContent = "edit";
        deleteTask.textContent = "delete";

        taskStatus.addEventListener("click", () => {
            // logic that sets the status on the task   
            task.toggleStatus();
            renderTasks();
        });

        editTask.addEventListener("click", () => {
            // logic that pops up the modal to input and submit and apply said inputs to the task
        })

        deleteTask.addEventListener("click", () => {
            // logic that deletes task
            deleteElement(arrayOfTasks,task.getId());
            renderTasks(arrayOfTasks);
        })

        taskBtnWrapper.appendChild(editTask);
        taskBtnWrapper.appendChild(deleteTask);

        taskElement.appendChild(taskStatus);
        taskElement.appendChild(taskTitle);
        taskElement.appendChild(taskDesc);
        taskElement.appendChild(taskDate);
        taskElement.appendChild(taskBtnWrapper);

        taskList.appendChild(taskElement);

    });

}