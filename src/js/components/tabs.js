document.addEventListener("DOMContentLoaded", function () {
    // Ajoutez des gestionnaires d'événements aux boutons
    var tabButtons = document.querySelectorAll('.tablinks');
    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var tabName = button.getAttribute('data-tab');
            openTab(tabName);
        });
    });

    // Fonction pour afficher le contenu de l'onglet
    function openTab(tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        document.getElementById(tabName).style.display = "block";
        tabButtons.forEach(function (button) {
            if (button.getAttribute('data-tab') === tabName) {
                button.classList.add("active");
            }
        });
    }
});
