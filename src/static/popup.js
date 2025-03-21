document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('startButton');
    var saveApiKeyButton = document.getElementById('saveApiKeyButton');
    var deleteApiKeyButton = document.getElementById('deleteApiKeyButton');
    var quizButtons = document.querySelectorAll('.quizButton');

    startButton.addEventListener('click', function () {
        showPage('apiKeyPage');
    });

    saveApiKeyButton.addEventListener('click', function () {
        var apiKey = document.getElementById('apiKeyInput').value;
        if (apiKey) {
            chrome.storage.sync.set({ 'openaiApiKey': apiKey }, function () {
                showPage('quizSelectionPage');
            });
        } else {
            alert('Veuillez entrer une clé API.');
        }
    });

    deleteApiKeyButton.addEventListener('click', function () {
        chrome.storage.sync.remove('openaiApiKey', function () {
            alert('Clé API supprimée.');
            showPage('apiKeyPage');
        });
    });

    quizButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var quizType = button.getAttribute('data-quiz');
            console.log('Quiz type selected:', quizType);
            // Ajoutez ici la logique pour récupérer les questions de la page
        });
    });

    function showPage(pageId) {
        document.getElementById('welcomePage').style.display = 'none';
        document.getElementById('apiKeyPage').style.display = 'none';
        document.getElementById('quizSelectionPage').style.display = 'none';
        document.getElementById(pageId).style.display = 'block';
    }

    // Vérifiez si c'est la première utilisation ou si la clé API est déjà enregistrée
    chrome.storage.sync.get('openaiApiKey', function (data) {
        if (!data.openaiApiKey) {
            showPage('welcomePage');
        } else {
            showPage('quizSelectionPage');
        }
    });
});