const usuariosSection = document.querySelector(".usuarios");
const apiURL = "https://jsonplaceholder.typicode.com/users";

async function getUsuarios(){
    const res = await fetch(apiURL)
    const usuarios = await res.json()
    return usuarios;
   }

   async function renderUs() {
    const usuarios = await getUsuarios();
    let template = "";
    usuarios.forEach((usuario) => {
    template += `
    <div class="usuario">
    <h3>${usuario.name}</h3>
    <p>${usuario.email}°C</p>
    <p>${usuario.phone}</p>
    </div>
    `;
    });
    usuariosSection.innerHTML = template;
    }
    renderUs()