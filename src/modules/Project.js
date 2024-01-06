import deleteElement from "./DeleteArrayElement";
import { uid } from "uid";

function Project(title) {
    const tasksArray = [];
    const id = uid();

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
    const getId = () => {
        return id
    }

    return { getTitle, setTitle, getTasksArray, addTask, deleteTask, getId }
}

export default Project;