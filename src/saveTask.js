export default function saveTask(task){

    let taskId = 0;

    if (!localStorage.getItem('taskId')) {
        localStorage.setItem('taskId', '0');
    }
    else{
        taskId = parseInt(localStorage.getItem('taskId'));
    }

    task.id = taskId.toString();

    localStorage.setItem(taskId.toString(), JSON.stringify(task));

    taskId++;
    localStorage.setItem('taskId', taskId);
}