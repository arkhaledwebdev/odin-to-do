import createProject from "./createProject";
import createTask from "./createTask";

function loadProjectView(location) {
    const header_title = document.getElementById('main-content-header');
    header_title.textContent = location;

    const content = document.getElementById('content');
    content.replaceChildren();

    if (localStorage.getItem("taskId")) {

        Object.keys(localStorage).forEach(key => {
            if (key != 'taskId' && !isNaN(key)) {
                let task = JSON.parse(localStorage.getItem(key));
                if (!task.isChecked && task.location === location) {
                    createTask(task);
                }
            }
        })
    }
}


function loadProjectSidebar() {
    const sidebarContent = document.querySelector('.sidebar-content');

    sidebarContent.replaceChildren();

    Object.keys(localStorage).forEach(key => {
        if (key != 'taskId' && isNaN(key)) {
            createProject(localStorage.getItem(key))
        }
    })
}


function loadProjectsTitles() {

    const formLocationSelect = document.getElementById('form-location');
    formLocationSelect.replaceChildren();
    const inboxOption = document.createElement("option");
    const inboxString = 'Inbox';
    inboxOption.value = inboxString;
    inboxOption.text = inboxString;
    inboxOption.setAttribute('selected', true);
    formLocationSelect.add(inboxOption);

    Object.keys(localStorage).forEach(key => {
        if (key != 'taskId' && isNaN(key)) {
            let newOption = document.createElement('option');
            let optionValue = localStorage.getItem(key)
            newOption.value = optionValue;
            newOption.text = optionValue;
            formLocationSelect.add(newOption);
        }
    })

}

export { loadProjectView, loadProjectSidebar, loadProjectsTitles }