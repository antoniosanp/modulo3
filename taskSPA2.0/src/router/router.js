import { Login } from "../views/Login.js";
import { Navbar } from "../components/Navbar.js";
import { Home } from "../views/Home.js";
import { NewTask } from "../views/NewTask.js";
import { Tasks } from "../views/Tasks.js";
import { states } from "../state/store.js";
import { app } from "../app.js";

export function router(){


    const hash = window.location.hash;
    console.log(hash)

    if (!states.user && (hash != "#/login") ) { window.location.hash = "#/login"; return}


    switch (hash) {
        case "#/":
            app.innerHTML = "";
            app.append(Navbar(),Home())
            break;
    
        case "#/login":
            app.innerHTML = "";
            app.appendChild(Login())
            break;
    
        case "#/newTask":
            app.innerHTML = "";
            app.append(Navbar(),NewTask())
            break;
    
        case "#/tasks":
            app.innerHTML = "";
            app.append( Navbar(),Tasks())
            break;
    
        default:
            break;
    }


}