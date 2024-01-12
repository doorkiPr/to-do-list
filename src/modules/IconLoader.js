import inbox from "../media/inbox.png";
import week from "../media/week.png";
import star from "../media/star.png";

function loadIcons() {
    const allTasksIcon = document.createElement("img");
    allTasksIcon.src = inbox;
    document.querySelector("#allTasks").appendChild(allTasksIcon);

    const thisWeekIcon = document.createElement("img");
    thisWeekIcon.src = week;
    document.querySelector("#nextDays").appendChild(thisWeekIcon);

    const favoriteIcon = document.createElement("img");
    favoriteIcon.src = star;
    
    document.querySelector("#finished").appendChild(favoriteIcon);

}
export default loadIcons