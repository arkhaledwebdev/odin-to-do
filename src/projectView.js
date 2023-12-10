import createTask from "./createTask";


function loadProject(location){

    const header_title = document.getElementById('main-content-header');
    header_title.textContent = location;

    const content = document.getElementById('content');
    content.replaceChildren();

    if(localStorage.getItem("taskId")){

        Object.keys(localStorage).forEach(key=>{
            if(key != 'taskId'){
                let task = JSON.parse(localStorage.getItem(key));

                if(task.location === location){
                    createTask(task);  
                }
            }
        })
    }

}

export {loadProject}