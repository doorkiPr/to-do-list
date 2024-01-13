import loadIcons from "./modules/IconLoader";
import InitializeButtons from "./modules/InitializeButtons";
import initializeDefaultProjects from "./modules/InitializeDefaultProjects";
import css from "./styles/layout.css";

let projectArray = []; //Initialize array that contains all the projects

loadIcons();
InitializeButtons(projectArray);
initializeDefaultProjects(projectArray);