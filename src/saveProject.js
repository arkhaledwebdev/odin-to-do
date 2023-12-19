import saveTask from "./saveTask";

function saveProject(projectName){

    let projectKey = `project_key_${projectName}`;

    localStorage.setItem(projectKey, projectName);

}

function editProject(oldName, newName){

    if(oldName === newName){
        return;
    }

    Object.keys(localStorage).forEach(key=>{
        if(!isNaN(key) && key != 'taskId'){
            let task = JSON.parse(localStorage.getItem(key));
            if(task.location === oldName){
                task.location = newName;
                saveTask(task);
            }
        }
    })
    saveProject(newName);
    let oldNameKey = `project_key_${oldName}`;
    localStorage.removeItem(oldNameKey);
}

export {saveProject, editProject}