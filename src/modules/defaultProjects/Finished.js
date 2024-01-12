export function finishedTasks(arrayOfProjects) {
    const finishedTasksArray = [];

    arrayOfProjects.forEach(element => {
        finishedTasksArray.push(... (element.getTasksArray().filter((task) => task.getStatus === true)) );
        // check for each task in each project , if status is true , then push tasks in finishedTasksArray
    });

    return finishedTasksArray
}