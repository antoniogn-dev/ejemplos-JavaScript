function editarPerfil() {
    let nuevoNombre = prompt("Nuevo nombre:");
    let nuevaDescripcion = prompt("Nueva descripción:");

    if (nuevoNombre) {
        document.getElementById("nombre").innerText = nuevoNombre;
    }

    if (nuevaDescripcion) {
        document.getElementById("descripcion").innerText = nuevaDescripcion;
    }
}