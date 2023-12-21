import { removeProjectTasks, saveTask } from "./taskController";
import {  setSelectedView } from "./viewController";

function saveProject(projectName) {

    let project_key = `project_key_${projectName}`;
    localStorage.setItem(project_key, projectName);

}

function editProject(oldName, newName) {

    Object.keys(localStorage).forEach(key => {
        if (!isNaN(key) && key != 'taskId') {
            let task = JSON.parse(localStorage.getItem(key));
            if (task.location === oldName) {
                task.location = newName;
                saveTask(task);
            }
        }
    })
    saveProject(newName);
    let oldNameKey = `project_key_${oldName}`;
    localStorage.removeItem(oldNameKey);
}

function removeProject(project_key) {
    localStorage.removeItem(project_key);
    removeProjectTasks(project_key);
    setSelectedView('Inbox');
    loadProjectSidebar();
    updateUI();
}

export {saveProject, editProject, removeProject}
