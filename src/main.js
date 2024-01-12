import Project from "./modules/Project"
import renderProjects from "./modules/RenderProjects";
import task from "./modules/Task";
import css from "./styles/layout.css"
import inbox from "./media/inbox.png"

const allTasksIcon = document.createElement("img");
allTasksIcon.src = inbox
document.querySelector("#allTasks").appendChild(allTasksIcon);



const hiddenMenu = document.querySelector(".menu")

hiddenMenu.addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("hidden")
})

const newProject =  Project("myTitle")
 const secondProject =  Project("someTitle");

const firstTask = task('firsttask','blalablablablabla',new Date('August 19, 1975'))
 const secondTask = task('secondTask','blblblpepepe',new Date('January 12, 2025'))

secondProject.addTask(firstTask)
secondProject.addTask(secondTask)

const projectArray = [newProject,secondProject];


    renderProjects(projectArray)



// secondProject.setTitle("secondTitle")
// secondProject.addTask(secondTask)

// console.log(newProject.getTitle()+" first pro");
// // console.log(secondProject.getTitle()+" second pro");

// newProject.getTasksArray().forEach(task => {
//     task.toggleStatus();
//     console.log(task.getStatus());
// });

// newProject.deleteTask(firstTask.getId())

// newProject.getTasksArray().forEach(task => {
//     console.log(task);
// });
