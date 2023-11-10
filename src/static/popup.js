document.addEventListener('DOMContentLoaded', function () {
    var openaiButton = document.getElementById('openaiButton');

    openaiButton.addEventListener('click', function () {
        // Récupérer le texte de l'input
        var inputText = document.getElementById('inputText').value;

        // Faire l'appel API à OpenAI
        callOpenAPI(inputText);
    });
});

function callOpenAPI(text) {
    // Remplacez "VOTRE_CLE_API" par votre clé API OpenAI
    var apiKey = "";
    var apiUrl = "https://api.openai.com/v1/engines/davinci/completions";

    // Construire la requête
    var requestData = {
        prompt: text,
        max_tokens: 150
    };

    // Faire l'appel API avec fetch
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiKey
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            console.log(response);
            alert(response)
        }
        )
        .catch(error => {
            console.error('Error:', error);
        });
}
