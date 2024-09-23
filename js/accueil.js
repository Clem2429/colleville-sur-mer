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