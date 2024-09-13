document.getElementById('downloadBtn').addEventListener('click', function() {
    // Faire une requête pour récupérer le contenu du fichier existant
    fetch('./exemple.txt')
        .then(response => response.text())  // Convertir en texte
        .then(contenuFichier => {
            // Créer un Blob avec le contenu du fichier
            let fichierBlob = new Blob([contenuFichier], { type: 'text/plain' });
            
            // Créer un lien de téléchargement
            let lienTelechargement = document.createElement('a');
            lienTelechargement.href = URL.createObjectURL(fichierBlob);
            lienTelechargement.download = 'exemple.txt';
            
            // Simuler le clic sur le lien pour télécharger le fichier
            lienTelechargement.click();
        })
        .catch(error => {
            console.error('Erreur lors du téléchargement du fichier:', error);
        });
})
