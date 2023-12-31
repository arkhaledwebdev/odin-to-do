import deleteIconSVG from '../images/icon-delete.svg'
import editIconSVG from '../images/icon-edit.svg'
import { completeTask, setSelectedTaskId, setSelectedTaskType } from '../controllers/taskController';
import { updateUI, loadTaskDetails } from "../controllers/viewController";

const addTaskDialog = document.getElementById('add-task-dialog'); 
const removeTaskDialog = document.getElementById('remove-task-dialog');

export default function createTask(task) {

    const content = document.getElementById('content');

    // Create the main container
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.style.transition = 'opacity 0.5s ease-in-out';

    // Create the checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'task-check';
    checkbox.classList.add('task-check');
    checkbox.dataset.id = task.id;
    if (task.isChecked) {
        checkbox.checked = true;
    }
    else {
        checkbox.checked = false;
    }
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            completeTask(checkbox.dataset.id, true);
            taskContainer.style.opacity = 0;
            setTimeout(() => {
                updateUI();
                taskContainer.style.opacity = 1;
            }, 500);
        }
        else {
            completeTask(checkbox.dataset.id, false);
            taskContainer.style.opacity = 0;
            setTimeout(() => {
                updateUI();
                taskContainer.style.opacity = 1;
            }, 500);
        }
    })

    // Create the task name
    const taskName = document.createElement('div');
    taskName.classList.add('task-name');
    taskName.textContent = task.name;

    // Create the task description
    const taskDescription = document.createElement('div');
    taskDescription.classList.add('task-description');
    taskDescription.textContent = task.description;

    // Create the task location
    const taskLocation = document.createElement('div');
    taskLocation.classList.add('task-location');
    taskLocation.textContent = `Location: ${task.location}`;

    // Create the task priority
    const taskPriority = document.createElement('div');
    taskPriority.classList.add('task-priority');
    taskPriority.textContent = `Priority: ${task.priority}`;

    // Create the task date
    const taskDate = document.createElement('div');
    taskDate.classList.add('task-date');
    taskDate.textContent = `Date: ${task.date}`;

    //create task edit button
    const taskEditButton = document.createElement('img');
    taskEditButton.classList.add('icon', 'hoverable');
    taskEditButton.src = editIconSVG;
    taskEditButton.addEventListener('click',()=>{
        setSelectedTaskType('Edit');
        setSelectedTaskId(task.id);
        loadTaskDetails(task);
        addTaskDialog.showModal();
    })

    //create task delete button
    const taskDeleteButton = document.createElement('img');
    taskDeleteButton.classList.add('icon', 'hoverable');
    taskDeleteButton.src = deleteIconSVG;
    taskDeleteButton.addEventListener('click', () => {
        setSelectedTaskId(task.id);
        removeTaskDialog.showModal();
    })

    // Append the elements to the main container
    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskName);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskLocation);
    taskContainer.appendChild(taskPriority);
    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskEditButton);
    taskContainer.appendChild(taskDeleteButton);

    content.appendChild(taskContainer)
}