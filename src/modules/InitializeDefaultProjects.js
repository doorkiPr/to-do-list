import renderProjectContent from "./RenderProjectContent"
import { allTasks } from "./defaultProjects/AllTasks"
import { finishedTasks } from "./defaultProjects/Finished";

export default function initializeDefaultProjects(array) {
    document.querySelector("#allTasks").addEventListener("click",()=>{
        renderProjectContent(allTasks(array),true)
    });

    document.querySelector("#finished").addEventListener("click",()=>{
        renderProjectContent(finishedTasks(array),true)
    });
}