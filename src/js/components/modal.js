function initModal() {
    var modalUsed;
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("openModal");
    var span = document.getElementsByClassName("close")[0];

    if (modal && btn && span) {
        btn.onclick = function () {
            modal.style.display = "block";
        }

        span.onclick = function () {
            modal.style.display = "none";
        }
        modalUsed = true;
    } else {
        modalUsed = false;
    }
}

// Appel de la fonction pour initialiser le modal
initModal();