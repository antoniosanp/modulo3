import { editTask } from "../state/store.js";
import { addTask } from "../state/store.js";

export function taskCard(title){
    const taskcardDiv = document.createElement("div");
    const task = addTask(title);
    taskcardDiv.innerHTML = 
    `
        <p class=" taskTitle" > ${title}</p>
        <label for="">completed
            <input class="${task.complete ? 'checkCompleted completed' : 'checkCompleted'}" type="checkbox" name="" id="">
        </label>
    `
    const c = taskcardDiv.querySelector(".checkCompleted");
    c.addEventListener("click", ()=>{
        editTask(task.id);
        console.log("tachado")

    })
    return taskcardDiv
}