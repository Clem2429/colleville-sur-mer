// MAP

function changeIframe(url, activeButtonId) {
    // Changer l'URL de l'iframe
    document.getElementById('iframe').src = url;

    // Retirer la classe 'active' de tous les boutons
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Ajouter la classe 'active' au bouton cliqué
    var activeButton = document.getElementById(activeButtonId);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// ACTUALITES

const toggleButton = document.getElementById('toggleButton');
const hiddenBoxes = document.querySelectorAll('.hidden');

toggleButton.addEventListener('click', () => {
    hiddenBoxes.forEach(box => {
        box.classList.toggle('hidden');
    });

    if (toggleButton.innerText === 'Afficher +') {
        toggleButton.innerText = 'Afficher -';
    } else {
        toggleButton.innerText = 'Afficher +';
    }
});

// AGENDA

const buttons = document.querySelectorAll('.month-btn');
const months = document.querySelectorAll('.month-box');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const month = button.getAttribute('data-month');
        
        // Masquer tous les mois
        months.forEach(box => {
            box.style.display = 'none';
        });

        // Afficher le mois sélectionné
        document.getElementById(month).style.display = 'flex';

        // Supprimer la classe active de tous les boutons
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Ajouter la classe active au bouton cliqué
        button.classList.add('active');
    });
});

