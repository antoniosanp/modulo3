

import { router } from "./router/router.js";

export const app = document.getElementById("app");
app.style.background = "grey";
window.location.hash = "#/"

window.addEventListener("hashchange",router)
window.addEventListener("load",router)


