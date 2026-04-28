function filtrar(categoria) {
    let imagenes = document.querySelectorAll(".galeria img");

    imagenes.forEach(img => {
        if (categoria === "todos") {
            img.style.display = "";
        } else {
            if (img.classList.contains(categoria)) {
                img.style.display = "";
            } else {
                img.style.display = "none";
            }
        }
    });
}
function toggleMenu() {
    let menu = document.getElementById("menuContacto");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}