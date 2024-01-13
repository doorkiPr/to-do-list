import renderAddProjectModal from "./AddProjectModal";

export default function InitializeButtons(arrayOfProjects) {

    document.querySelector(".menu").addEventListener("click", () => {
        document.querySelector(".sidebar").classList.toggle("hidden");
    });

    document.querySelector(".addProject").addEventListener("click", () => {
        renderAddProjectModal(arrayOfProjects);
    });

    document.querySelector("#themeBtn").addEventListener("click", (e) => {
        const root = document.querySelector(':root');
        if (e.currentTarget.checked) {
            root.style.setProperty("--textColor", "white");
            root.style.setProperty("--bgHeaderFooter", "#22303c");
            root.style.setProperty("--bgSideBarMain", "#15202b");
            root.style.setProperty("--bgColor2", "#192734");
        }
        else{
            root.style.setProperty("--textColor", "#374958");
            root.style.setProperty("--bgHeaderFooter", "#f2f3f5");
            root.style.setProperty("--bgSideBarMain", "#fefcfe");
            root.style.setProperty("--bgColor2", "#ececec");
        };

    });
}



