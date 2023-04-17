// Cargar el archivo JSON de usuarios
fetch("../db/database.json")
  .then(response => response.json())
  .then(data => {
    // Obtener el formulario de inicio de sesión
    const form = document.getElementById('lg-conteiner');

    // Agregar un evento de escucha para el envío del formulario
    form.addEventListener('submit', event => {
      event.preventDefault();

      // Obtener los valores del usuario y contraseña ingresados
      const usuario = document.getElementById('usuario').value;
      const contrasena = document.getElementById('contrasena').value;

      // Verificar si el usuario y contraseña coinciden con los datos en el archivo JSON
      const usuarios = data.usuarios;
      const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);

      if (usuarioEncontrado) {
        // Usuario y contraseña válidos, realizar acciones adicionales
        console.log('Inicio de sesión exitoso');
      } else {
        // Usuario y/o contraseña incorrectos, mostrar mensaje de error
        console.log('Usuario y/o contraseña incorrectos');
      }
    });
  })
  .catch(error => console.error('Error al cargar el archivo JSON de usuarios:', error));
