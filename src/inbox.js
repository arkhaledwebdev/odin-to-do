function loadInbox(){

    const header_title = document.getElementById('main-content-header');
    const content = document.getElementById('content');
    header_title.textContent = "Inbox"

    let text = document.createElement('div');
    
    if(localStorage.getItem("taskId")){
        text.textContent = localStorage.getItem('1');
        content.appendChild(text);
    }

}

export {loadInbox}