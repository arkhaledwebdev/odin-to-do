import './style.css'
import html from "./template.html"
import { loadInbox } from './inbox'
import { loadToday } from './today'
import { loadUpcoming } from './upcoming'
import Task from './task'
import saveTask from './saveTask'

import IconInbox from './images/icon-inbox.svg'
import IconInboxOutline from './images/icon-inbox-outline.svg'
import IconToday from './images/icon-today.svg'
import IconTodayOutline  from './images/icon-today-outline.svg'
import IconUpcoming from './images/icon-upcoming.svg'
import IconUpcomingOutline  from './images/icon-upcoming-outline.svg'

const button_inbox = document.getElementById('inbox-container');
const img_inbox = document.getElementById('img-inbox');
const button_today = document.getElementById('today-container');
const img_today = document.getElementById('img-today');
const button_upcoming = document.getElementById('upcoming-container');
const img_upcoming = document.getElementById('img-upcoming');
const addTaskButton = document.getElementById('add-task-button');
const addTaskDialog = document.getElementById('add-task-dialog');
const addTaskForm = document.getElementById('add-task-form');
const confirmAddTask = document.getElementById('confirmButton');
const discardAddTask = document.getElementById('discardButton');


addTaskButton.addEventListener('click',()=>{
    addTaskDialog.showModal();
})

discardAddTask.addEventListener('click',(e)=>{
    e.preventDefault();
    addTaskDialog.close();
})

addTaskForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let task = new Task(
        document.getElementById('form-task-name').value,
        document.getElementById('form-task-date').value,
        document.querySelector('input[name = "priority"]:checked').value,
        document.getElementById('form-task-description').value);

    console.log(task);

    saveTask(task);

    console.log(localStorage.getItem('1'));

    loadInbox();

    addTaskDialog.close();

})

button_inbox.addEventListener('click', ()=>{
    clearSelection();
    button_inbox.classList.add('selected');
    img_inbox.src = IconInbox;
    loadInbox();
})

button_today.addEventListener('click', ()=>{
    clearSelection();
    button_today.classList.add('selected');
    img_today.src = IconToday;
    loadToday();
})


button_upcoming.addEventListener('click', ()=>{
    clearSelection();
    button_upcoming.classList.add('selected');
    img_upcoming.src = IconUpcoming;
    loadUpcoming();
})


function clearSelection(){
    button_inbox.classList.remove('selected');
    img_inbox.src = IconInboxOutline;
    button_today.classList.remove('selected');
    img_today.src = IconTodayOutline;
    button_upcoming.classList.remove('selected');
    img_upcoming.src = IconUpcomingOutline;

}