import { loadProjectSidebar } from "./projectView";
import { updateUI } from "./viewController";

export default function removeItem(itemId) {

    if (!isNaN(itemId)) {
        localStorage.removeItem(itemId);
        updateUI();
    }
    else {
        localStorage.removeItem(itemId);
        Object.keys(localStorage).forEach(key => {
            if (key != 'taskId' && !isNaN(key)) {
                let task = JSON.parse(localStorage.getItem(key));
                if (itemId.includes(task.location)) {
                    localStorage.removeItem(key);
                }
            }
        })
        loadProjectSidebar();
        updateUI();
    }
}