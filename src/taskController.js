import { parseISO, startOfDay, startOfToday } from "date-fns";
import isAfter from "date-fns/isAfter";
import { updateUI } from "./viewController";

function saveTask(task) {

    let task_id = 0;

    if (!localStorage.getItem('taskId')) {
        localStorage.setItem('taskId', '0');
    }
    else {
        task_id = parseInt(localStorage.getItem('taskId'));
    }

    task.id = task_id.toString();
    localStorage.setItem(task_id.toString(), JSON.stringify(task));
    task_id++;
    localStorage.setItem('task_id', task_id);
}

function editTask(task){
    localStorage.setItem(task.id, JSON.stringify(task));
}

function removeTask(task_id){
    localStorage.removeItem(task_id);
    updateUI
}

function setSelectedTask(task) {
    localStorage.setItem('selected_task', JSON.stringify(task));
}

function getSelectedTask() {
    return JSON.parse(localStorage.getItem('selected_task'));
}

function getAllTasks(location) {

    let taskList = [];
    let dateString = new Date().toLocaleDateString('en-CA');
    let dateISO = startOfToday();

    if (localStorage.getItem("taskId")) {

        Object.keys(localStorage).forEach(key => {
            if (!isNaN(key)) {
                let task = JSON.parse(localStorage.getItem(key));
                let taskDate = startOfDay(parseISO(task.date));
                if (location === 'Inbox' && !task.isChecked) {
                    taskList.push(task);
                }
                if (location === 'Completed' && task.isChecked) {
                    taskList.push(task);
                }
                if (location === 'Today' && !task.isChecked && task.date === dateString) {
                    taskList.push(task);
                }
                if (location === 'Inbox' && !task.isChecked && isAfter(taskDate, dateISO)) {
                    taskList.push(task);
                }
            }
        })
    }
    return taskList;
}


export {saveTask, editTask, removeTask, setSelectedTask, getSelectedTask, getAllTasks}