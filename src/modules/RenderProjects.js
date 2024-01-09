import deleteElement from "./DeleteArrayElement";
import css from "../styles/project.css";

function renderProjects(arrayOfProjects) {
    const projectsWrapper = document.querySelector(".projectsWrapper");
    projectsWrapper.innerHTML = "";

    arrayOfProjects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.toggle("project");
        projectElement.setAttribute("id", project.getId());

        const projectLogo = document.createElement("div");
        projectLogo.classList.toggle("projectLogo");

        const projectTitle = document.createElement("div");
        projectTitle.classList.toggle("projectTitle");
        projectTitle.textContent = project.getTitle();

        const projectButtonWrapper = document.createElement("div");
        projectButtonWrapper.classList.toggle("projectButtonWrapper");


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
        
        projectSubmitBtn.type="submit";
        projectForm.method = "dialog";

        projectLabel.htmlFor = "newProjectTitle";
        projectInput.name = "newProjectTitle";
        projectInput.setAttribute("id", "newProjectTitle");
        projectInput.placeholder="Title ..."
        projectInput.type = "text";
        projectInput.required = true;
        projectInput.maxLength = 15;

        projectSubmitBtn.textContent="Confirm";
        projectCancelBtn.textContent="Cancel";


        projectForm.addEventListener("submit",()=>{
            project.setTitle(projectInput.value);
            renderProjects(arrayOfProjects);
        })

        projectCancelBtn.addEventListener("click",()=>{
            e.preventDefault();
            projectDialog.close();
        })

        projectForm.appendChild(projectLabel);
        projectForm.appendChild(projectInput);
        projectModalBtnWrapper.appendChild(projectSubmitBtn);
        projectModalBtnWrapper.appendChild(projectCancelBtn);
        projectForm.appendChild(projectModalBtnWrapper);

        projectDialog.appendChild(projectForm);

        const editProjectTitle = document.createElement("button");
        editProjectTitle.setAttribute("id", "editProjectBtn");
        editProjectTitle.textContent = "edit";

        editProjectTitle.addEventListener("click", () => {
            projectDialog.showModal()
        });


        const deleteProject = document.createElement("button");
        deleteProject.setAttribute("id", "deleteProjectBtn");
        deleteProject.textContent = "delete";

        deleteProject.addEventListener("click", () => {
            deleteElement(arrayOfProjects, project.getId());
            renderProjects(arrayOfProjects);
        });

        projectButtonWrapper.appendChild(editProjectTitle);
        projectButtonWrapper.appendChild(deleteProject);

        projectElement.appendChild(projectLogo);
        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectButtonWrapper);

        projectElement.appendChild(projectDialog);

        projectsWrapper.appendChild(projectElement);

    });
}

export default renderProjects