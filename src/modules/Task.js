import { format } from "date-fns";
import { uid } from "uid";

function Task(title, desc, date) {
    let status = false;

    const id = uid();

    const getTitle = () => {
        return title
    };

    const setTitle = (newTitle) => {
        title = newTitle;
    };

    const getDesc = () => {
        return desc
    };

    const setDesc = (newDesc) => {
        desc = newDesc;
    };

    const getDate = () => {
        return date
    };

    const setDate = (newDate) => {
        date = format(newDate, "MMM/dd/yyyy");
    };

    const getStatus = () => {
        return status
    };

    const toggleStatus = () => {
        status ? status = false : status = true;
    };

    const getId = () => {
        return id
    }

    return { getTitle, setTitle, getDesc, setDesc, getDate, setDate, getStatus, toggleStatus, getId }
}

export default Task;