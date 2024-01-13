import { isToday } from "date-fns";
import Project from "../Project";

export function todayTasks(arrayOfProjects) {
    const todayTasksArray = [];
    const todayTasksProject = Project("Today's Tasks");

    arrayOfProjects.forEach(element => {
        todayTasksArray.push(... (element.getTasksArray().filter( (task) => isToday(task.getDate()) )));

    });

    todayTasksArray.forEach(task => {
        todayTasksProject.addTask(task)
    });

    return todayTasksProject
}