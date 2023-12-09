export default class Task {
    constructor(name, date, priority, description, location = 'inbox', isChecked = false, id = null){
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.description = description;
        this.location = location;
        this.isChecked = isChecked;
        this.id = id;
    }
}