import Project from "../Project";

export function allTasks(arrayOfProjects) {
    const allTasksArray = [];
    arrayOfProjects.forEach(element => {
        allTasksArray.push(...element.getTasksArray());
        // iiterate through each project and push the tasks inside all task array
    });
    return allTasksArray
}
/// isntead of just an array this should be a project witht he title All taskks that contains an array of tasks containing every single task 