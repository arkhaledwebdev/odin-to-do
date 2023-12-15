import './style.css'
import html from "./template.html"
import { loadInbox } from './inboxView'
import { loadToday } from './todayView'
import { loadUpcoming } from './upcomingView'
import { loadCompleted } from './completedView'
import Task from './task'
import saveTask from './saveTask'
import { clearSelection } from './util'
import saveProject from './saveProject'
import { loadProjectSidebar, loadProjectsTitles } from './projectView'

const button_inbox = document.getElementById('inbox-container');
const button_today = document.getElementById('today-container');
const button_upcoming = document.getElementById('upcoming-container');
const button_completed = document.getElementById('completed-container');
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
    loadProjectsTitles();
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

confirmAddProject.addEventListener('click', () => {
    confirmAddProject.classList.add('submitted');

})

loadInbox();
loadProjectSidebar();

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

    let projectName = document.getElementById('form-project-name').value;

    if (confirmAddProject.classList.contains('submitted')) {
        saveProject(projectName);

        confirmAddProject.classList.remove('submitted');
        
        loadProjectSidebar();
    }

    addProjectDialog.close();
    
})


button_inbox.addEventListener('click', () => {
    clearSelection();
    button_inbox.classList.add('selected');
    loadInbox();
})

button_today.addEventListener('click', () => {
    clearSelection();
    button_today.classList.add('selected');
    loadToday();
})


button_upcoming.addEventListener('click', () => {
    clearSelection();
    button_upcoming.classList.add('selected');
    loadUpcoming();
})

button_completed.addEventListener('click', () => {
    clearSelection();
    button_completed.classList.add('selected');
    loadCompleted();
})