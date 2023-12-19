export default class Task {
    constructor(id = null, name, date, priority, description, location = 'inbox', isChecked = false){
        this.id = id;
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.description = description;
        this.location = location;
        this.isChecked = isChecked;
    }
}