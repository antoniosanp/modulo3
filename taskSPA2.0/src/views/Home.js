import { states } from "../state/store.js"

export function Home(){
    const homeDiv =  document.createElement("div")
    homeDiv.textContent = ` Bienvenido ${states.user} `
    return homeDiv
}