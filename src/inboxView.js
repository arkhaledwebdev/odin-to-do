import createTask from "./createTask";

function loadInbox(){

    const header_title = document.getElementById('main-content-header');
    header_title.textContent = "Inbox"

    const content = document.getElementById('content');
    content.replaceChildren();

    if(localStorage.getItem("taskId")){

        Object.keys(localStorage).forEach(key=>{
            if(key != 'taskId' && !isNaN(key)){
                let task = JSON.parse(localStorage.getItem(key));
                if(!task.isChecked){
                    createTask(task);  
                }  
            }
        })
    }
}

export {loadInbox}