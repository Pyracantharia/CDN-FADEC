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
        window.modalUsed = modalUsed;
        window.dispatchEvent(new CustomEvent('modalUsed', { detail: modalUsed }));
    }
}

// Appel de la fonction pour initialiser le modal
initModal();