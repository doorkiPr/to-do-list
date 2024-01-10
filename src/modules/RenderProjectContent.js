function renderProjectContent(project) {
    const mainWrapper = document.querySelector(".mainWrapper");
    const mainHeader = document.querySelector(".mainHeader");

    mainHeader.textContent = project.getTitle();

}