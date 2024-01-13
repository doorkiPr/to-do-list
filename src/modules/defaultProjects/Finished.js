import Project from "../Project";

export function finishedTasks(arrayOfProjects) {
    const finishedTasksArray = [];
    const finishdTasksProject = Project("Finished Tasks");

    arrayOfProjects.forEach(element => {
        finishedTasksArray.push(... (element.getTasksArray().filter((task) => task.getStatus() === true)));
        // check for each task in each project , if status is true , then push tasks in finishedTasksArray
    });

    finishedTasksArray.forEach(task => {
        finishdTasksProject.addTask(task)
    });

    return finishdTasksProject
}