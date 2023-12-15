function clearSelection() {

    const allSelectableItems = document.querySelectorAll('.selectable');

    allSelectableItems.forEach(element => {
        element.classList.remove('selected')
    });
}


export {clearSelection}