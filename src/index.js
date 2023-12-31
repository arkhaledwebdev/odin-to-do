import './style.css'
import html from "./template.html"

import UpIcon from './images/icon-up.svg';
import DownIcon from './images/icon-down.svg';
import Task from './model/task'
import { editTask, getSelectedTaskId, getSelectedTaskType, removeTask, saveTask, setSelectedTaskType } from './controllers/taskController';
import { 
    loadProjectSidebar, loadProjectsTitles,
    clearSelection, getAreProjectsHidden,
    setAreProjectsHidden, setSelectedView,
    updateUI, 
    getSelectedProject} from './controllers/viewController'
import { saveProject, editProject, removeProject } from './controllers/projectController';

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
const discardButtonRemoveProject = document.getElementById('discardButton-removeProject');;
const discardButtonRemoveTask = document.getElementById('discardButton-removeTask');

updateUI();
loadProjectSidebar();

addTaskButton.addEventListener('click', () => {
    setSelectedTaskType('Add');
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

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (confirmAddTask.classList.contains('submitted')) {
        let type = getSelectedTaskType();

        if(type === 'Add'){
            let task = new Task(
                document.getElementById('form-task-name').value,
                document.getElementById('form-task-date').value,
                document.querySelector('input[name = "priority"]:checked').value,
                document.getElementById('form-task-description').value,
                document.getElementById('form-location').value,
            );
            saveTask(task);
        }
        if(type === 'Edit'){
            let selectedTaskId = getSelectedTaskId();
            let isSelectedTaskChecked = JSON.parse(localStorage.getItem(selectedTaskId)).isChecked;
            let editedTask = new Task(
                document.getElementById('form-task-name').value,
                document.getElementById('form-task-date').value,
                document.querySelector('input[name = "priority"]:checked').value,
                document.getElementById('form-task-description').value,
                document.getElementById('form-location').value,
                isSelectedTaskChecked,
                selectedTaskId,
            )
            editTask(editedTask);
        }
        updateUI();
        confirmAddTask.classList.remove('submitted');
    }

    addTaskDialog.close();
})

removeTaskForm.addEventListener('submit', ()=>{
    removeTask(getSelectedTaskId());
    removeTaskDialog.close();
})

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let projectName = document.getElementById('form-project-name').value;
    let oldName = getSelectedProject();
    let oldNameKey = `project_key_${oldName}`;

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
    removeProject(`project_key_${getSelectedProject()}`);
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