document.getElementById('downloadBtn').addEventListener('click', function() {
    // Faire une requête pour récupérer le fichier PDF
    fetch('./plaquettes/Atelier_bdf.pdf')
        .then(response => response.blob())  // Lire le fichier comme un blob
        .then(fichierBlob => {
            // Créer un lien de téléchargement
            let lienTelechargement = document.createElement('a');
            lienTelechargement.href = URL.createObjectURL(fichierBlob);
            lienTelechargement.download = 'Atelier_bdf.pdf';
            
            // Simuler le clic sur le lien pour télécharger le fichier
            lienTelechargement.click();
        })
        .catch(error => {
            console.error('Erreur lors du téléchargement du fichier:', error);
        });
});
