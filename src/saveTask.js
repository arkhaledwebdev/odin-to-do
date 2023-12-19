export default function saveTask(task){

    const confirmAddTask = document.getElementById('confirmButton-task');


    let taskId = 0;

    if (!localStorage.getItem('taskId')) {
        localStorage.setItem('taskId', '0');
    }
    else{
        taskId = parseInt(localStorage.getItem('taskId'));
    }

    console.log(task.id);
    console.log(taskId);

    if(confirmAddTask.dataset.type = 'edit'){
        
        localStorage.setItem(task.id, JSON.stringify(task));
    }
    if(confirmAddTask.dataset.type = 'add'){
        task.id = taskId.toString();
        localStorage.setItem(taskId.toString(), JSON.stringify(task));
    }
    taskId++;
    localStorage.setItem('taskId', taskId);
}