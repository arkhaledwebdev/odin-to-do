export default function completeTask(taskId, isChecked){

    let task = JSON.parse(localStorage.getItem(taskId));

    task.isChecked = isChecked;

    localStorage.setItem(taskId, JSON.stringify(task));

}