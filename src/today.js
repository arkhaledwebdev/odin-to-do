function loadToday(){

    const header_title = document.getElementById('main-content-header');
    header_title.textContent = "Today"

    const content = document.getElementById('content');
    content.replaceChildren();

}

export {loadToday}