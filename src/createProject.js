import hashtagIconSVG from './images/icon-hashtag.svg'
import { loadProjectView } from './projectView';

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
    deleteIcon.src = './images/icon-delete-outline.svg';
    deleteIcon.alt = 'delete-icon';

    // Create the edit icon element
    const editIcon = document.createElement('img');
    editIcon.classList.add('icon', 'edit', 'hoverable');
    editIcon.src = './images/icon-edit-outline.svg';
    editIcon.alt = 'edit-icon';

    // Append the child elements to their respective parent elements
    sidebarContentItem.appendChild(hashtagIcon);
    sidebarContentItem.appendChild(titleElement);
    sidebarContentItem.appendChild(deleteIcon);
    sidebarContentItem.appendChild(editIcon);

    sidebarContentItem.addEventListener('click',()=>{
        loadProjectView(projectName);
    })

    sidebarContent.appendChild(sidebarContentItem);
}