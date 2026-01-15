const entrada = document.getElementById("entrada");
const ulista = document.getElementById("ulista");
const btn = document.getElementById("aceptar");


const listaLocalStorage = localStorage.getItem("clave");
 

const lista = listaLocalStorage ? JSON.parse(listaLocalStorage) : [];

function render(){
    if ( lista == []) {return}
    ulista.innerHTML = "";
    for (elemento of lista){
        const li = document.createElement("li");
        li.textContent = elemento;
        ulista.appendChild(li)
    }
}


btn.onclick = () => {
    
    lista.push(entrada.value);
    entrada.value = "";
    console.log(lista) ;
    localStorage.setItem("clave", JSON.stringify(lista))   
    render()
}

window.addEventListener("load",render)


