export function allTasks(arrayOfProjects) {
    const allTasksArray = [];
    arrayOfProjects.forEach(element => {
        allTasksArray.push(...element.getArrayOfTasks());
        // iiterate through each project and push the tasks inside all task array
    });
    return allTasksArray
}