function task(title, desc, date, status) {
    status = false;

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

    const getStatus = () => {
        return status
    };

    const setStatus = (newStatus) => {
        status = newStatus;
    };

    return { getTitle, setTitle, getDesc, setDesc, getStatus, setStatus }
}

export default task;