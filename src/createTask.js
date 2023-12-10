import completeTask from "./completeTask";

export default function createTask(task){

const content = document.getElementById('content');

// Create the main container
const taskContainer = document.createElement('div');
taskContainer.classList.add('task-container');

// Create the checkbox
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.name = 'task-check';
checkbox.classList.add('task-check');
checkbox.dataset.id = task.id;
if(task.isChecked){
    checkbox.checked = true;
}
else{
    checkbox.checked = false;
}
checkbox.addEventListener('click',()=>{
    if(checkbox.checked){
        completeTask(checkbox.dataset.id, true);
    }
    else{
        completeTask(checkbox.dataset.id, false);
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

// Append the elements to the main container
taskContainer.appendChild(checkbox);
taskContainer.appendChild(taskName);
taskContainer.appendChild(taskDescription);
taskContainer.appendChild(taskLocation);
taskContainer.appendChild(taskPriority);
taskContainer.appendChild(taskDate);

content.appendChild(taskContainer)
}