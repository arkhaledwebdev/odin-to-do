import { parseISO, startOfDay, startOfToday } from "date-fns";
import isAfter from "date-fns/isAfter";
import { getSelectedProject, updateUI } from "./viewController";

let _selected_task_id = 0;
let _selected_task_type = 'Add';

function setSelectedTaskId(taskId) {
    _selected_task_id = taskId;
}

function setSelectedTaskType(type) {
    _selected_task_type = type;
}

function getSelectedTaskId() {
    return _selected_task_id;
}

function getSelectedTaskType() {
    return _selected_task_type;
}

function saveTask(task) {

    let taskId = 0;

    if (!localStorage.getItem('taskId')) {
        localStorage.setItem('taskId', '0');
    }
    else{
        taskId = parseInt(localStorage.getItem('taskId'));
    }
    task.id = taskId.toString();

    localStorage.setItem(taskId.toString(), JSON.stringify(task));
    
    taskId++;
    localStorage.setItem('taskId', taskId);
}

function editTask(editedTask){
    localStorage.setItem(editedTask.id,JSON.stringify(editedTask) );
}

function removeTask(task_id){
    localStorage.removeItem(task_id);
    updateUI();
}

function removeProjectTasks(projectKey){
    Object.keys(localStorage).forEach(key => {
        if (!isNaN(key)) {
            let task = JSON.parse(localStorage.getItem(key));
            if (projectKey.includes(task.location)) {
                localStorage.removeItem(key);
            }
        }
    })
}

function completeTask(taskId, isChecked){

    let task = JSON.parse(localStorage.getItem(taskId));

    task.isChecked = isChecked;

    localStorage.setItem(taskId, JSON.stringify(task));

}

function getAllTasks(location) {

    let taskList = [];
    let dateString = new Date().toLocaleDateString('en-CA');
    let dateISO = startOfToday();
    let selectedProject = getSelectedProject();

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
                if (location === 'Upcoming' && !task.isChecked && isAfter(taskDate, dateISO)) {
                    taskList.push(task);
                }
                if (location === 'Project' && !task.isChecked && task.location === selectedProject) {
                    taskList.push(task);
                }
            }
        })
    }
    return taskList;
}


export {
    saveTask, editTask, removeTask,removeProjectTasks,
    completeTask, setSelectedTaskId, getSelectedTaskId,
    setSelectedTaskType, getSelectedTaskType, getAllTasks}