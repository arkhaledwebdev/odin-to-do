import './style.css'
import html from "./template.html"
import { loadInbox } from './inbox'
import { loadToday } from './today'
import { loadUpcoming } from './upcoming'
import Task from './task'

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

addTaskButton.addEventListener('click',()=>{
    addTaskDialog.showModal();
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