import hashtagIconSVG from './images/icon-hashtag.svg'
import deleteIconSVG from './images/icon-delete.svg'
import editIconSVG from './images/icon-edit.svg'
import { clearSelection, getSelectedProject, setSelectedProject, setSelectedView, updateUI } from './viewController';
export default function createProject(projectName) {

    const sidebarContent = document.querySelector('.sidebar-content');

    const sidebarContentItem = document.createElement('div');
    sidebarContentItem.classList.add('sidebar-content-item');

    // Create the icon element for hashtag
    const hashtagIcon = document.createElement('img');
    hashtagIcon.classList.add('icon');
    hashtagIcon.src = hashtagIconSVG;
    hashtagIcon.alt = 'hash-tag-icon';

    // Create the title element
    const titleElement = document.createElement('div');
    titleElement.classList.add('title');
    titleElement.textContent = projectName;

    // Create the delete icon element
    const deleteIcon = document.createElement('img');
    deleteIcon.classList.add('icon', 'delete', 'hoverable');
    deleteIcon.src = deleteIconSVG;
    deleteIcon.alt = 'delete-icon';

    // Create the edit icon element
    const editIcon = document.createElement('img');
    editIcon.classList.add('icon', 'edit', 'hoverable');
    editIcon.src = editIconSVG;
    editIcon.alt = 'edit-icon';

    // Append the child elements to their respective parent elements
    sidebarContentItem.appendChild(hashtagIcon);
    sidebarContentItem.appendChild(titleElement);
    sidebarContentItem.appendChild(deleteIcon);
    sidebarContentItem.appendChild(editIcon);
    sidebarContentItem.classList.add('selectable');

    sidebarContentItem.addEventListener('click',(e)=>{
        clearSelection();
        e.target.parentElement.classList.add('selected');

        setSelectedProject(projectName);
        setSelectedView('Project');
        updateUI();
    })

    sidebarContent.appendChild(sidebarContentItem);
}