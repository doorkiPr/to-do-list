import deleteElement from "./DeleteArrayElement";
import css from "../styles/task.css"
function renderTasks(arrayOfTasks) {
    const taskList = document.querySelector(".taskList");
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
        task.getStatus() ? taskElement.classList.add("checked") : taskElement.classList.remove("checked");
        taskStatus.classList.toggle("taskStatus");
        taskTitle.classList.toggle("taskTitle");
        taskDesc.classList.toggle("taskDesc");
        taskDate.classList.toggle("taskDate");
        taskBtnWrapper.classList.toggle("taskBtnWrapper");
        editTask.classList.toggle("editTask");
        deleteTask.classList.toggle("deleteTask");

        taskStatus.type = "checkbox";
        taskStatus.name = "status";
        taskStatus.checked = task.getStatus();
        taskTitle.textContent = task.getTitle();
        taskDesc.textContent = task.getDesc();
        taskDate.textContent = task.getDate();
        editTask.textContent = "edit";
        deleteTask.textContent = "delete";

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
        taskTitleInput.maxLength = 25;
        taskTitleInput.value = task.getTitle();

        taskDescLabel.htmlFor = "newtaskDesc";
        taskDescInput.name = "newtaskDesc";
        taskDescInput.setAttribute("id", "newtaskDesc");
        taskDescInput.placeholder = "Description ..."
        taskDescInput.type = "text";
        taskDescInput.required = true;
        taskDescInput.maxLength = 50;
        taskDescInput.value = task.getDesc();

        taskDateLabel.htmlFor = "newtaskDate";
        taskDateInput.name = "newtaskDate";
        taskDateInput.setAttribute("id", "newtaskDate");
        taskDateInput.type = "date";
        taskDateInput.required = true;

        taskSubmitBtn.textContent = "Confirm";
        taskCancelBtn.textContent = "Cancel";


        taskForm.addEventListener("submit", () => {
            task.setTitle(taskTitleInput.value);
            task.setDesc(taskDescInput.value);
            task.setDate(Date(taskDateInput.value));
            taskTitleInput.value = "";
            taskDescInput.value = "";
            taskDateInput.value = "";
            renderTasks(arrayOfTasks);
        })

        taskCancelBtn.addEventListener("click", (e) => {
            e.preventDefault();
            taskTitleInput.value = "";
            taskDescInput.value = "";
            taskDateInput.value = "";
            taskDialog.close();
        })

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

        taskStatus.addEventListener("click", () => {
            // logic that sets the status on the task   
            task.toggleStatus();
            renderTasks(arrayOfTasks);
        });

        editTask.addEventListener("click", () => {
            // logic that pops up the modal to input and submit and apply said inputs to the task
            taskDialog.showModal();
        });

        deleteTask.addEventListener("click", () => {
            // logic that deletes task
            deleteElement(arrayOfTasks, task.getId());
            renderTasks(arrayOfTasks);
        });

        taskBtnWrapper.appendChild(editTask);
        taskBtnWrapper.appendChild(deleteTask);

        taskElement.appendChild(taskStatus);
        taskElement.appendChild(taskTitle);
        taskElement.appendChild(taskDesc);
        taskElement.appendChild(taskDate);
        taskElement.appendChild(taskBtnWrapper);
        taskElement.appendChild(taskDialog);

        taskList.appendChild(taskElement);

    });

}
export default renderTasks