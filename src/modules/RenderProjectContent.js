function renderProjectContent(project) {
    const mainWrapper = document.querySelector(".mainWrapper");
    const mainHeader = document.querySelector(".mainHeader");

    mainHeader.textContent = project.getTitle();

    const addTaskBtn = document.createElement("button");

    addTaskBtn.classList.toggle("addTaskBtn");
    addTaskBtn.textContent = "+ ADD task";

}