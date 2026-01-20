import { states } from "../state/store.js";
import { taskCard } from "../components/TaskCard.js";

export function Tasks(){
    const tasks = document.createElement("div");
    states.tasks.forEach(element => {
        tasks.appendChild(taskCard(element.title))
    });

    return tasks
}