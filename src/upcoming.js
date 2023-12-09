function loadUpcoming(){

    const header_title = document.getElementById('main-content-header');
    header_title.textContent = "Upcoming"

    const content = document.getElementById('content');
    content.replaceChildren();

}

export {loadUpcoming}