export function Navbar(){

    const header  = document.createElement("header");
    header.innerHTML = 
    `
    <ul>
        <li><a href="#/">Home</a></li>
        <li><a href="#/tasks">Tasks</a></li>
        <li><a href="#/newTask">Add new task</a></li>
    </ul>

    `
    return header;
}