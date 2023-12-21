import { getAllTasks } from "./taskController";
import createTask from "../creators/createTask";
import createProject from "../creators/createProject";

let _selectedView = 'Inbox';
let _selectedProject = '';
let _areProjectsHidden = false;

function setSelectedView(view) {
    _selectedView = view;
}

function getSelectedView() {
    return _selectedView;
}

function setSelectedProject(project) {
    _selectedProject = project;
}

function getSelectedProject() {
    return _selectedProject;
}

function setAreProjectsHidden(check) {
    _areProjectsHidden = check;
}

function getAreProjectsHidden() {
    return _areProjectsHidden;
}

function _loadView(view){
    const header_title = document.getElementById('main-content-header');
    let selectedProjectName = getSelectedProject();
    if(view === 'Project'){
        header_title.textContent = selectedProjectName;
    }
    else {
        header_title.textContent = view;
    }

    const content = document.getElementById('content');
    content.replaceChildren();

    let taskList = getAllTasks(view);

    for(let task of taskList){
        createTask(task);
    }
}

function updateUI() {

    const selectedView = getSelectedView();

    switch (selectedView) {

        case 'Inbox':
            _loadView('Inbox');
            break;
        case 'Today':
            _loadView('Today');
            break;
        case 'Upcoming':
            _loadView('Upcoming');
            break;
        case 'Completed':
            _loadView('Completed');
            break;
        case 'Project':
            _loadView('Project');
            break;
        default:
            _loadView('Inbox');
    }
}


function loadProjectSidebar() {
    const sidebarContent = document.querySelector('.sidebar-content');

    sidebarContent.replaceChildren();

    Object.keys(localStorage).forEach(key => {
        if (key.includes('project_key')) {
            createProject(localStorage.getItem(key))
        }
    })
}


function loadProjectsTitles() {

    const formLocationSelect = document.getElementById('form-location');
    formLocationSelect.replaceChildren();
    const inboxOption = document.createElement("option");
    const inboxString = 'Inbox';
    inboxOption.value = inboxString;
    inboxOption.text = inboxString;
    inboxOption.setAttribute('selected', true);
    formLocationSelect.add(inboxOption);

    Object.keys(localStorage).forEach(key => {
        if (key.includes('project_key')) {
            let newOption = document.createElement('option');
            let optionValue = localStorage.getItem(key)
            newOption.value = optionValue;
            newOption.text = optionValue;
            formLocationSelect.add(newOption);
        }
    })
}

function loadTaskDetails(task) {

    const taskName = document.getElementById('form-task-name');
    taskName.value = task.name;

    const taskDate = document.getElementById('form-task-date');
    taskDate.value = task.date;

    switch (task.priority) {
        case 'low':
            document.getElementById('task-priority-low').checked = true;
            break;
        case 'medium':
            document.getElementById('task-priority-medium').checked = true;
            break;
        case 'high':
            document.getElementById('task-priority-high').checked = true;
            break;
        case 'highest':
            document.getElementById('task-priority-highest').checked = true;
            break;
        default:
            document.getElementById('task-priority-low').checked = true;
    }

    const taskDescription = document.getElementById('form-task-description');
    taskDescription.value = task.description;

    loadProjectsTitles();

    const taskLocation = document.getElementById('form-location');
    taskLocation.value = task.location;

}

function clearSelection() {

    const allSelectableItems = document.querySelectorAll('.selectable');

    allSelectableItems.forEach(element => {
        element.classList.remove('selected')
    });
}


export {
    setSelectedView, getSelectedView,
    setSelectedProject, getSelectedProject,
    setAreProjectsHidden, getAreProjectsHidden,
    updateUI, loadProjectSidebar, loadProjectsTitles, loadTaskDetails,
    clearSelection }