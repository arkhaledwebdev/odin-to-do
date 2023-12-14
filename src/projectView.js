import createProject from "./createProject";

function loadProjectView(location){

    const header_title = document.getElementById('main-content-header');
    header_title.textContent = location;

    const content = document.getElementById('content');
    content.replaceChildren();

    if(localStorage.getItem("taskId")){

        Object.keys(localStorage).forEach(key=>{
            if(key != 'taskId' || !isNaN(key)){
                let task = JSON.parse(localStorage.getItem(key));
                if(!task.isChecked && task.location === location){
                    createTask(task);  
                }  
            }
        })
    }

}


function loadProjectSidebar(){
    const sidebarContent = document.querySelector('.sidebar-content');
    
    sidebarContent.replaceChildren();

    if(localStorage.getItem("taskId")){

        Object.keys(localStorage).forEach(key=>{
            if(key != 'taskId' || isNaN(key)){
                createProject(localStorage.getItem(key))
            }
        })
    }
}

export {loadProjectView, loadProjectSidebar}