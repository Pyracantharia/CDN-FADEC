function initModal() {
    var modals = document.querySelectorAll(".modal");
    var buttons = document.querySelectorAll(".openModal");
    var spans = document.querySelectorAll(".close");

    modals.forEach(function (modal) {
        modal.style.display = "none";
        console.log("1");
    });

    buttons.forEach(function (btn) {
        btn.onclick = function () {
            var modalId = btn.getAttribute("data-modal");
            var modal = document.getElementById(modalId);
            modal.style.display = "block";
            console.log("2");
        };
    });

    spans.forEach(function (span) {
        span.onclick = function () {
            var modalId = span.closest(".modal").id;
            var modal = document.getElementById(modalId);
            modal.style.display = "none";
            console.log("3");
        };
    });
}

// Appel de la fonction pour initialiser le modal
initModal();
