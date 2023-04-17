const formularioUsuarios = document.querySelector(".rg-conteiner")
const contenedorUsuarios = document.querySelector("#usuariosConteiner")
const usuarios = []

formularioUsuarios.addEventListener("submit", (event) =>{
    event.preventDefault()

        usuarios.push({
        nombre: formularioUsuarios.nombre.value,
        apellido: formularioUsuarios.apellido.value,
        email: formularioUsuarios.email.value,
        provincia: formularioUsuarios.provincia.value,
        date: formularioUsuarios.date.value,
        usuario: formularioUsuarios.usuario.value,
        password: formularioUsuarios.password.value,
        
    })
    renderizarUsuarios()
} )


const renderizarUsuarios = () =>{
    contenedorUsuarios.innerHTML = ""
    for(const usuario of usuarios){
        contenedorUsuarios.innerHTML += `
        <div class="user-card">
            <h2>${usuario.usuario}</h2>
            <p>Email: ${usuario.email}</p>
            <p>Nombre: ${usuario.nombre} ${usuario.apellido}<p>
            <p>Fecha de Nacimiento: ${usuario.date}</p>
            <p>Provincia: ${usuario.provincia}</p>
        </div>
        `
    }
}
    
    
