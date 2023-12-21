import './style.css'
import html from "./template.html"

import UpIcon from './images/icon-up.svg';
import DownIcon from './images/icon-down.svg';

import { saveTask } from './controllers/taskController';

import { loadProjectSidebar, loadProjectsTitles, clearSelection, getAreProjectsHidden, setAreProjectsHidden, setSelectedView, updateUI } from './viewController'
import { saveProject, editProject } from './controllers/projectController';
import { loadProjectSidebar, loadProjectsTitles } from './projectView'
import removeItem from './removeItem';

const button_inbox = document.getElementById('inbox-container');
const button_today = document.getElementById('today-container');
const button_upcoming = document.getElementById('upcoming-container');
const button_completed = document.getElementById('completed-container');
const addTaskButton = document.getElementById('add-task-button');
const addTaskDialog = document.getElementById('add-task-dialog');
const addTaskForm = document.getElementById('add-task-form');
const confirmAddTask = document.getElementById('confirmButton-task');
const discardAddTask = document.getElementById('discardButton-task');
const hideProjectsButton = document.getElementById('hide-projects-button');
const projectsSidebar = document.querySelector('.sidebar-content');
const addProjectButton = document.getElementById('add-project-button');
const addProjectDialog = document.getElementById('add-project-dialog');
const addProjectForm = document.getElementById('add-project-form');
const confirmAddProject = document.getElementById('confirmButton-project');
const discardAddProject = document.getElementById('discardButton-project');
const removeProjectDialog = document.getElementById('remove-project-dialog');
const removeProjectForm = document.getElementById('remove-project-form');
const removeTaskDialog = document.getElementById('remove-task-dialog');
const removeTaskForm = document.getElementById('remove-task-form');
const confirmButtonRemoveProject = document.getElementById('confirmButton-removeProject');
const confirmButtonRemoveTask = document.getElementById('confirmButton-removeTask');
const discardButtonRemoveProject = document.getElementById('discardButton-removeProject');;
const discardButtonRemoveTask = document.getElementById('discardButton-removeTask');


addTaskButton.addEventListener('click', () => {
    confirmAddTask.dataset.type = 'add';
    loadProjectsTitles();
    addTaskDialog.showModal();
})

addProjectButton.addEventListener('click', () => {
    addProjectDialog.showModal();
})

hideProjectsButton.addEventListener('click', ()=>{
    let isHidden = getAreProjectsHidden();
 
    if(isHidden){ 
        projectsSidebar.style.display = 'flex';
        hideProjectsButton.src = DownIcon;
        projectsSidebar.style.transform = 'translateY(0%)'
        setAreProjectsHidden(false)
    }
    else{
        projectsSidebar.style.transform = 'translateY(-25%)'
        setAreProjectsHidden(true)
        setTimeout(()=>{
            hideProjectsButton.src = UpIcon;
            projectsSidebar.style.display = 'none';
        },500);
    }
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

discardButtonRemoveTask.addEventListener('click',(e)=>{
    e.preventDefault();
    removeTaskDialog.close();
})

confirmAddProject.addEventListener('click', () => {
    confirmAddProject.classList.add('submitted');
})

discardButtonRemoveProject.addEventListener('click', (e)=>{
    e.preventDefault();
    removeProjectDialog.close();
})

loadInbox();
loadProjectSidebar();

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let taskId = (confirmAddTask.dataset.id != null) ? confirmAddTask.dataset.id : null;

    let task = new Task(
        taskId,
        document.getElementById('form-task-name').value,
        document.getElementById('form-task-date').value,
        document.querySelector('input[name = "priority"]:checked').value,
        document.getElementById('form-task-description').value,
        document.getElementById('form-location').value,
    );

    if (confirmAddTask.classList.contains('submitted')) {
        saveTask(task);
        updateUI();
        confirmAddTask.classList.remove('submitted');
    }

    addTaskDialog.close();
})

removeTaskForm.addEventListener('submit', (e)=>{
    const taskId = confirmButtonRemoveTask.dataset.id;
    removeItem(taskId);
    removeTaskDialog.close();
})

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let projectName = document.getElementById('form-project-name').value;
    let projectNameKey = `project_key_${projectName}`;
    let oldNameKey = confirmAddProject.dataset.key;
    let oldName = localStorage.getItem(oldNameKey);

    console.log(projectNameKey);
    console.log(oldNameKey);


    if (confirmAddProject.classList.contains('submitted') && projectName !== oldName) {

        if(!localStorage.getItem(oldNameKey)){
            saveProject(projectName);
        }
        else{
            editProject(oldName, projectName);
        }

        confirmAddProject.classList.remove('submitted');
        loadProjectSidebar();
    }

    addProjectDialog.close();
    
})

removeProjectForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const projectName = confirmButtonRemoveProject.dataset.key;
    removeItem(projectName);
    removeProjectDialog.close();
})

button_inbox.addEventListener('click', () => {
    clearSelection();
    button_inbox.classList.add('selected');
    setSelectedView('Inbox');
    updateUI();
})

button_today.addEventListener('click', () => {
    clearSelection();
    button_today.classList.add('selected');
    setSelectedView('Today');
    updateUI();
})


button_upcoming.addEventListener('click', () => {
    clearSelection();
    button_upcoming.classList.add('selected');
    setSelectedView('Upcoming');
    updateUI();
})

button_completed.addEventListener('click', () => {
    clearSelection();
    button_completed.classList.add('selected');
    setSelectedView('Completed');
    updateUI();
})