import Task from "./Task";

function renderProjectContent(project) {
    const mainWrapper = document.querySelector(".mainWrapper");
    const mainHeader = document.querySelector(".mainHeader");
    const btnWrapper = document.querySelector(".addTaskWrapper");
    btnWrapper.innerHTML="";

    mainHeader.textContent = project.getTitle();

    const addTaskBtn = document.createElement("button");

    addTaskBtn.classList.toggle("addTaskBtn");
    addTaskBtn.textContent = "+ ADD task";

    const taskDialog = document.createElement("dialog");
    const taskForm = document.createElement("form");
    const taskTitleLabel = document.createElement("label");
    const taskTitleInput = document.createElement("input");
    const taskDescLabel = document.createElement("label");
    const taskDescInput = document.createElement("input");
    const taskDateLabel = document.createElement("label");
    const taskDateInput = document.createElement("input");
    const taskModalBtnWrapper = document.createElement("div");
    const taskSubmitBtn = document.createElement("button");
    const taskCancelBtn = document.createElement("button");

    taskDialog.classList.toggle("taskDialog");
    taskForm.classList.toggle("taskForm");
    taskTitleLabel.classList.toggle("taskTitleLabel");
    taskTitleInput.classList.toggle("taskTitleInput");
    taskDescLabel.classList.toggle("taskDescLabel");
    taskDescInput.classList.toggle("taskDescInput");
    taskDateLabel.classList.toggle("taskDateLabel");
    taskDateInput.classList.toggle("taskDateInput");
    taskModalBtnWrapper.classList.toggle("taskModalBtnWrapper");
    taskSubmitBtn.classList.toggle("taskDialogSubmit");
    taskCancelBtn.classList.toggle("taskDialogCancel");

    taskSubmitBtn.type = "submit";
    taskForm.method = "dialog";

    taskTitleLabel.htmlFor = "newtaskTitle";
    taskTitleInput.name = "newtaskTitle";
    taskTitleInput.setAttribute("id", "newtaskTitle");
    taskTitleInput.placeholder = "Title ..."
    taskTitleInput.type = "text";
    taskTitleInput.required = true;
    taskTitleInput.maxLength = 15;

    taskDescLabel.htmlFor = "newtaskDesc";
    taskDescInput.name = "newtaskDesc";
    taskDescInput.setAttribute("id", "newtaskDesc");
    taskDescInput.placeholder = "Description ..."
    taskDescInput.type = "text";
    taskDescInput.required = true;
    taskDescInput.maxLength = 15;

    taskDateLabel.htmlFor = "newtaskDate";
    taskDateInput.name = "newtaskDate";
    taskDateInput.setAttribute("id", "newtaskDate");
    taskDateInput.type = "date";
    taskDateInput.required = true;

    taskSubmitBtn.textContent = "Confirm";
    taskCancelBtn.textContent = "Cancel";


    taskForm.addEventListener("submit", () => {
        const newTask = Task(taskTitleInput.value, taskDescInput.value, taskDateInput.value);
        project.addTask(newTask);
        taskTitleInput.value = "";
        taskDescInput.value = "";
        taskDateInput.value = "";
        renderTasks(project.getTasksArray());
    });

    taskCancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        taskTitleInput.value = "";
        taskDescInput.value = "";
        taskDateInput.value = "";
        taskDialog.close();
    });

    taskForm.appendChild(taskTitleLabel);
    taskForm.appendChild(taskTitleInput);
    taskForm.appendChild(taskDescLabel);
    taskForm.appendChild(taskDescInput);
    taskForm.appendChild(taskDateLabel);
    taskForm.appendChild(taskDateInput);
    taskModalBtnWrapper.appendChild(taskSubmitBtn);
    taskModalBtnWrapper.appendChild(taskCancelBtn);
    taskForm.appendChild(taskModalBtnWrapper);

    taskDialog.appendChild(taskForm);

    addTaskBtn.addEventListener("click",()=>{
        taskDialog.showModal();
    });
    btnWrapper.appendChild(addTaskBtn);
    
    mainWrapper.appendChild(btnWrapper);
    mainWrapper.appendChild(taskDialog);
}
export default renderProjectContent