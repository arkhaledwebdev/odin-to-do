import { parseISO, startOfDay, startOfToday } from "date-fns";
import createTask from "./createTask";
import isAfter from "date-fns/isAfter";

function loadUpcoming(){

    const header_title = document.getElementById('main-content-header');
    header_title.textContent = "Upcoming"

    const content = document.getElementById('content');
    content.replaceChildren();

    if(localStorage.getItem("taskId")){

        Object.keys(localStorage).forEach(key=>{
            if(key != 'taskId'){
                let task = JSON.parse(localStorage.getItem(key));

                let date = startOfToday();
                let taskDate = startOfDay(parseISO(task.date));
                
                // console.log(taskDate);
                // console.log(date);

                if(isAfter(taskDate, date) && task.isChecked === false){
                    createTask(task);  
                }
            }
        })
    }
}

export {loadUpcoming}