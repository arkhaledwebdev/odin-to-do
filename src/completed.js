function loadCompleted(){
    const header_title = document.getElementById('main-content-header');
    header_title.textContent = "Completed";

    const content = document.getElementById('content');
    content.replaceChildren();
}

export {loadCompleted}