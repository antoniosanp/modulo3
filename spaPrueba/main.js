const app = document.getElementById('app');

function Navbar() {
  return `
    <nav>
      <a href="#/home">Home</a>
      <a href="#/services">Servicios</a>
      <a href="#/contact">Contacto</a>
      <a href="#/contador">Contador</a>
    </nav>
  `;
}
 // vistas

 function Home() {
  return '<h1>🏠 Home</h1><p>Bienvenido</p>';
}

function Services() {
  return '<h1>🛠️ Servicios</h1>';
}

function Contact() {
  return '<h1>📩 Contacto</h1>';
}
let counter = 0;
function Contador(){
    return `
    <div>
    <h1> ${counter} hola </h1>
    <button id = "boton"> + </button>
 

    <script>
    
    alert("hola")

 
    
    </script>
    <div>
    `
    
}

   
 

//--------------------------------------------
// render

function render(view) {
  app.innerHTML = `
    ${Navbar()}
    <main>
      ${view}
    </main>
  `;
}

//-------------------------------------
// router

function router() {
  const route = location.hash;

  switch (route) {
    case '#/home':
      render(Home());
      break;
    case '#/services':
      render(Services());
      break;
    case '#/contact':
      render(Contact());
      break;

    case '#/contador':
      render(Contador());
      break;
    default:
      render(Home());
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

//-----------------------------------------

function decirEdad(edad){
    console.log("la edad es: " + edad)
}

let misAños = 5;

decirEdad(misAños)



