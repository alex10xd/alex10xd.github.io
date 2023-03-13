function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block"; /* Mostrar contenido */
    } else {
        content.style.display = "none"; /* Ocultar contenido */
    }
}