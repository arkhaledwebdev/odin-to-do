import { loadInbox } from "./inboxView";
import { loadToday } from "./todayView";
import { loadUpcoming } from "./upcomingView";
import { loadCompleted } from "./completedView";
import { loadProjectView } from "./projectView";

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

function updateUI() {

    const selectedView = getSelectedView();
    const selectedProject = getSelectedProject();

    switch (selectedView) {

        case 'Inbox':
            loadInbox();
            break;
        case 'Today':
            loadToday();
            break;
        case 'Upcoming':
            loadUpcoming();
            break;
        case 'Completed':
            loadCompleted();
            break;
        case 'Project':
            loadProjectView(selectedProject);
            break;
        default:
            loadInbox();
    }
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
    updateUI, clearSelection
}