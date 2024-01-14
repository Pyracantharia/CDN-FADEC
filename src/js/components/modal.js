document.addEventListener("DOMContentLoaded", function () {
    function initModal() {
        var modalUsed;
        var modals = document.querySelectorAll(".modal");
        var buttons = document.querySelectorAll(".openModal");
        var spans = document.querySelectorAll(".close");

        buttons.forEach(function (btn, index) {
            btn.onclick = function () {
                modals[index].style.display = "block";
            }
        });

        spans.forEach(function (span, index) {
            span.onclick = function () {
                modals[index].style.display = "none";
            }
        });

        modalUsed = true;
    }

    // Appel de la fonction pour initialiser le modal
    initModal();
});