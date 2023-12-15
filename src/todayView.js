import createTask from "./createTask";


function loadToday(){

    const header_title = document.getElementById('main-content-header');
    header_title.textContent = "Today"

    const content = document.getElementById('content');
    content.replaceChildren();

    if(localStorage.getItem("taskId")){

        Object.keys(localStorage).forEach(key=>{
            if(key != 'taskId' && !isNaN(key)){
                let task = JSON.parse(localStorage.getItem(key));

                let date = new Date().toLocaleDateString('en-CA');

                // console.log(task.date);
                // console.log(date);

                if(date === task.date && task.isChecked === false){
                    createTask(task);  
                }
            }
        })
    }

}

export {loadToday}