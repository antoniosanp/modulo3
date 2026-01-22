import { store } from "../store/store.js";
export function loginView(){
    document.body.className = "auth-body";
    const login = document.createElement("div")
    login.innerHTML = 
    
    `



  <main class="auth-container">
    <section class="auth-card">

      <header class="auth-header">
        <h1>Observatorio Urbano y Ambiental</h1>
        <p>Acceso a plataforma GovTech</p>
      </header>

      <form class="auth-form" >
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input id="email" type="email" placeholder="admin@govtech.com" required />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input id="password" type="password" placeholder="••••••••" required />
        </div>

        <button type="submit" class="btn btn-primary">
          Iniciar sesión
        </button>

        <p class="auth-error hidden">
          Credenciales inválidas. Intenta nuevamente.
        </p>
      </form>

      <footer class="auth-footer">
        <p>Proyecto educativo – Riwi GovTech</p>
      </footer>

    </section>
  </main>


    `
    const formLogin = login.querySelector("form");
  formLogin.addEventListener("submit", (e) =>{
    e.preventDefault();

    if (!formLogin.checkValidity()) {
      formLogin.reportValidity(); return
    }

    store.user = "antonio";
    location.hash = "#/home"

  } )


    
    ;
    return login
    
}




