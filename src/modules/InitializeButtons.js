import renderAddProjectModal from "./AddProjectModal";

export default function InitializeButtons(arrayOfProjects) {

    document.querySelector(".menu").addEventListener("click", () => {
        document.querySelector(".sidebar").classList.toggle("hidden");
    });

    document.querySelector(".addProject").addEventListener("click", () => {
        renderAddProjectModal(arrayOfProjects);
    });

}



