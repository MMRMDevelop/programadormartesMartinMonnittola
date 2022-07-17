function modalDisplayInBlock() {
    // Get the modal
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

window.onclick = function (event) {
    // Get the modal
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function cerrarModal() {
    // Get the modal
    var modal = document.getElementById("myModal");
    document.getElementById("ResultadoModalNodo").remove();

    modal.style.display = "none";
}