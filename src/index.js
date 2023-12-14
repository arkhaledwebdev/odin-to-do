import './style.css'
import html from "./template.html"
import { loadInbox } from './inboxView'
import { loadToday } from './todayView'
import { loadUpcoming } from './upcomingView'
import { loadCompleted } from './completedView'
import { completeTask } from './completeTask'
import Task from './task'
import saveTask from './saveTask'

import IconInbox from './images/icon-inbox.svg'
import IconInboxOutline from './images/icon-inbox-outline.svg'
import IconToday from './images/icon-today.svg'
import IconTodayOutline from './images/icon-today-outline.svg'
import IconUpcoming from './images/icon-upcoming.svg'
import IconUpcomingOutline from './images/icon-upcoming-outline.svg'
import IconCompleted from './images/icon-checked.svg'
import IconCompletedOutline from './images/icon-checked-outline.svg'
import saveProject from './saveProject'
import { loadProjectView, loadProjectSidebar } from './projectView'

const button_inbox = document.getElementById('inbox-container');
const img_inbox = document.getElementById('img-inbox');
const button_today = document.getElementById('today-container');
const img_today = document.getElementById('img-today');
const button_upcoming = document.getElementById('upcoming-container');
const img_upcoming = document.getElementById('img-upcoming');
const button_completed = document.getElementById('completed-container');
const img_completed = document.getElementById('img-completed');
const addTaskButton = document.getElementById('add-task-button');
const addTaskDialog = document.getElementById('add-task-dialog');
const addTaskForm = document.getElementById('add-task-form');
const confirmAddTask = document.getElementById('confirmButton-task');
const discardAddTask = document.getElementById('discardButton-task');
const addProjectButton = document.getElementById('add-project-button');
const addProjectDialog = document.getElementById('add-project-dialog');
const addProjectForm = document.getElementById('add-project-form');
const confirmAddProject = document.getElementById('confirmButton-project');
const discardAddProject = document.getElementById('discardButton-project');

addTaskButton.addEventListener('click', () => {
    addTaskDialog.showModal();
})

addProjectButton.addEventListener('click', () => {
    addProjectDialog.showModal();
})

discardAddTask.addEventListener('click', (e) => {
    e.preventDefault();
    addTaskDialog.close();
})

discardAddProject.addEventListener('click', (e) => {
    e.preventDefault();
    addProjectDialog.close();
})

confirmAddTask.addEventListener('click', () => {
    confirmAddTask.classList.add('submitted');
})

// confirmAddProject.addEventListener('click', () => {
//     confirmAddProject.classList.add('submitted');
// })

loadInbox();

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let task = new Task(
        document.getElementById('form-task-name').value,
        document.getElementById('form-task-date').value,
        document.querySelector('input[name = "priority"]:checked').value,
        document.getElementById('form-task-description').value,
        document.getElementById('form-location').value
    );

    if (confirmAddTask.classList.contains('submitted')) {
        saveTask(task);

        loadInbox();

        confirmAddTask.classList.remove('submitted');

    }

    addTaskDialog.close();
})

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let projectName = document.getElementById('form-project-name');

    saveProject(projectName);

    //confirmAddProject.classList.remove('submitted');

    loadProjectSidebar();
    addProjectDialog.close();

})


button_inbox.addEventListener('click', () => {
    clearSelection();
    button_inbox.classList.add('selected');
    img_inbox.src = IconInbox;
    loadInbox();
})

button_today.addEventListener('click', () => {
    clearSelection();
    button_today.classList.add('selected');
    img_today.src = IconToday;
    loadToday();
})


button_upcoming.addEventListener('click', () => {
    clearSelection();
    button_upcoming.classList.add('selected');
    img_upcoming.src = IconUpcoming;
    loadUpcoming();
})

button_completed.addEventListener('click', () => {
    clearSelection();
    button_completed.classList.add('selected');
    img_completed.src = IconCompleted;
    loadCompleted();
})


function clearSelection() {
    button_inbox.classList.remove('selected');
    img_inbox.src = IconInboxOutline;
    button_today.classList.remove('selected');
    img_today.src = IconTodayOutline;
    button_upcoming.classList.remove('selected');
    img_upcoming.src = IconUpcomingOutline;
    button_completed.classList.remove('selected');
    img_completed.src = IconCompletedOutline;

}