import createTask from "./createTask";

function loadInbox(){

    const header_title = document.getElementById('main-content-header');
    header_title.textContent = "Inbox"

    const content = document.getElementById('content');
    content.replaceChildren();

    if(localStorage.getItem("taskId")){

        Object.keys(localStorage).forEach(key=>{
            if(key != 'taskId'){
                let task = JSON.parse(localStorage.getItem(key));  
                createTask(task);  
            }
        })
    }
}

export {loadInbox}