import { editTask, removeProjectTasks, saveTask } from "./taskController";
import {  setSelectedProject, setSelectedView } from "./viewController";
import { loadProjectSidebar } from "./viewController";
import { updateUI } from "./viewController";

function saveProject(projectName) {
    let project_key = `project_key_${projectName}`;
    localStorage.setItem(project_key, projectName);
}

function editProject(oldName, newName) {

    Object.keys(localStorage).forEach(key => {
        if (!isNaN(key)) {
            let task = JSON.parse(localStorage.getItem(key));
            if (task.location === oldName) {
                task.location = newName;
                editTask(task);
            }
        }
    })
    saveProject(newName);
    let oldNameKey = `project_key_${oldName}`;
    localStorage.removeItem(oldNameKey);
    setSelectedProject(newName);
    setSelectedView('Project');
    loadProjectSidebar();
    updateUI();
}

function removeProject(project_key) {
    localStorage.removeItem(project_key);
    removeProjectTasks(project_key);
    setSelectedView('Inbox');
    loadProjectSidebar();
    updateUI();
}

export {saveProject, editProject, removeProject}
