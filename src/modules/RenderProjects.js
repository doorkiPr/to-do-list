import deleteElement from "./DeleteArrayElement";
import css from "../styles/project.css";

function renderProjects(arrayOfProjects) {
    const projectsWrapper = document.querySelector(".projectsWrapper");

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


        const editProjectTitle = document.createElement("button");
        editProjectTitle.setAttribute("id","editProjectBtn");    
        editProjectTitle.textContent = "edit";

        editProjectTitle.addEventListener("click", () => {
            //logic that pops modal with form and submit and exit button
        });


        const deleteProject = document.createElement("button");
        deleteProject.setAttribute("id","deleteProjectBtn");
        deleteProject.textContent = "delete";

        deleteProject.addEventListener("click", () => {
            deleteElement(arrayOfProjects, project.getId());
            projectsWrapper.innerHTML = "";
            renderProjects(arrayOfProjects);
        });

        projectButtonWrapper.appendChild(editProjectTitle);
        projectButtonWrapper.appendChild(deleteProject);

        projectElement.appendChild(projectLogo);
        projectElement.appendChild(projectTitle);
        projectElement.appendChild(projectButtonWrapper);

        projectsWrapper.appendChild(projectElement);

    });
}

export default renderProjects