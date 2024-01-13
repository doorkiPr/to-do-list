import renderProjectContent from "./RenderProjectContent"
import { allTasks } from "./defaultProjects/AllTasks"
import { finishedTasks } from "./defaultProjects/Finished";
import { nextWeekTasks } from "./defaultProjects/NextWeek";
import { todayTasks } from "./defaultProjects/Today";

export default function initializeDefaultProjects(array) {
    renderProjectContent(allTasks(array), true); // show the all Tasks Proejct on load;

    document.querySelector("#allTasks").addEventListener("click", () => {
        renderProjectContent(allTasks(array), true)
    });

    document.querySelector("#finished").addEventListener("click", () => {
        renderProjectContent(finishedTasks(array), true)
    });

    document.querySelector("#today").addEventListener("click", () => {
        renderProjectContent(todayTasks(array), true)
    });

    document.querySelector("#nextDays").addEventListener("click", () => {
        renderProjectContent(nextWeekTasks(array), true)
    });
}