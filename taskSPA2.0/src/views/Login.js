import { validarUser } from "../state/store.js";


export function Login(){
    const loginDiv = document.createElement("div");
    loginDiv.innerHTML = 
    `
        <input id = "inputUserName" placeholder = "user" > </input>
        <input id = "inputUserPassword" placeholder = "password" type = "password" > </input>
        <button id = btnLogin> Sing In </button>
    `
    const inputUserName = loginDiv.querySelector("#inputUserName");
    const inputUserPassword = loginDiv.querySelector("#inputUserPassword");
    const btnLogin = loginDiv.querySelector("#btnLogin");

    btnLogin.addEventListener("click", ()=>{
        if (validarUser(inputUserName.value, inputUserPassword.value))
        {   console.log("login correcto")
            window.location.hash = "#/"
        }
    })

    return loginDiv;
    
}