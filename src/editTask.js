import { loadProjectsTitles } from "./projectView";

export default function loadEditTask(task) {

    const taskName = document.getElementById('form-task-name');
    taskName.value = task.name;

    const taskDate = document.getElementById('form-task-date');
    taskDate.value = task.date;

    switch (task.priority) {
        case 'low':
            document.getElementById('task-priority-low').checked = true;
            break;
        case 'medium':
            document.getElementById('task-priority-medium').checked = true;
            break;
        case 'high':
            document.getElementById('task-priority-high').checked = true;
            break;
        case 'highest':
            document.getElementById('task-priority-highest').checked = true;
            break;
        default:
            document.getElementById('task-priority-low').checked = true;
    }

    const taskDescription = document.getElementById('form-task-description');
    taskDescription.value = task.description;

    loadProjectsTitles();

    const taskLocation = document.getElementById('form-location');
    taskLocation.value = task.location;

}