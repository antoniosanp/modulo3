import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
import { loginView } from "../views/loginView.js";
import { nuevoProyecto } from "../views/nuevoProyectoView.js";
import { homeView } from "../views/homeView.js";
import { store } from "../store/store.js";

//----------------------------------------------------------------------
export function router() {

    let hash = location.hash || "#/login";

    if (!store.user && hash !== "#/login") {
        location.hash = "#/login";
        return;
    }

    document.body.innerHTML = "";

    switch (hash) {
        case "#/login":
            document.body.appendChild(loginView());
            break;

        case "#/home":
            document.body.append(navbar(), homeView(), footer());
            break;

        case "#/nuevoProyecto":
            document.body.append(navbar(), nuevoProyecto(), footer());
            break;
    }
}



