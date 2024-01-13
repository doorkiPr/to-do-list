import { differenceInDays, getDate } from "date-fns";
import Project from "../Project";

export function nextWeekTasks(arrayOfProjects) {
    const nextWeekTasksArray = [];
    const nextWeekTasksProject = Project("Next 7 days Tasks");

    arrayOfProjects.forEach(element => {
        nextWeekTasksArray.push(... (element.getTasksArray().filter( (task) => {
            const today = new Date();
            const dayDifferences =  differenceInDays(task.getDate(),today) ;
            return dayDifferences <= 7  && dayDifferences >= 0;
        } )));

    });

    nextWeekTasksArray.forEach(task => {
        nextWeekTasksProject.addTask(task)
    });

    return nextWeekTasksProject
}