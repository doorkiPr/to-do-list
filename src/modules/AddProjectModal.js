import Project from "./Project";
import renderProjects from "./RenderProjects";

function renderAddProjectModal(arrayOfProjects) {
    const main = document.querySelector(".main");

    const projectDialog = document.createElement("dialog");
    const projectForm = document.createElement("form");
    const projectLabel = document.createElement("label");
    const projectInput = document.createElement("input");
    const projectModalBtnWrapper = document.createElement("div");
    const projectSubmitBtn = document.createElement("button");
    const projectCancelBtn = document.createElement("button");

    projectDialog.classList.toggle("projectDialog");
    projectForm.classList.toggle("projectForm");
    projectLabel.classList.toggle("projectLabel");
    projectInput.classList.toggle("projectInput");
    projectModalBtnWrapper.classList.toggle("projectModalBtnWrapper");
    projectSubmitBtn.classList.toggle("projectDialogSubmit");
    projectCancelBtn.classList.toggle("projectDialogCancel");

    projectSubmitBtn.type = "submit";
    projectForm.method = "dialog";

    projectLabel.htmlFor = "newProjectTitle";
    projectInput.name = "newProjectTitle";
    projectInput.setAttribute("id", "newProjectTitle");
    projectInput.placeholder = "Title ..."
    projectInput.type = "text";
    projectInput.required = true;
    projectInput.maxLength = 15;

    projectSubmitBtn.textContent = "Confirm";
    projectCancelBtn.textContent = "Cancel";

    projectForm.addEventListener("submit", () => {
        arrayOfProjects.push(Project(projectInput.value))
        projectInput.value = "";
        renderProjects(arrayOfProjects);
    })

    projectCancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        projectInput.value = "";
        projectDialog.close();
    })

    projectForm.appendChild(projectLabel);
    projectForm.appendChild(projectInput);
    projectModalBtnWrapper.appendChild(projectSubmitBtn);
    projectModalBtnWrapper.appendChild(projectCancelBtn);
    projectForm.appendChild(projectModalBtnWrapper);

    projectDialog.appendChild(projectForm);

    main.appendChild(projectDialog);
    projectDialog.showModal()
}
export default renderAddProjectModal