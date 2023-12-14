export default function saveProject(projectName){

    let projectKey = `project_key_${projectName}`;

    localStorage.setItem(projectKey, projectName);

}