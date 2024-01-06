import deleteElement from "./DeleteArrayElement";

function Project(title) {
    const tasksArray = [];

    const getTitle = () => {
        return title
    };

    const setTitle = (newTitle) => {
        title = newTitle;
    };

    const getTasksArray = () => {
        return tasksArray
    };

    const addTask = (task) => {
        tasksArray.push(task);
    };

    const deleteTask = (taskId) => {
        deleteElement(tasksArray, taskId)
    };

    return { getTitle, setTitle, getTasksArray, addTask, deleteTask }
}

export default Project;