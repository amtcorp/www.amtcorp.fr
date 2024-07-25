	    var lat = 43.936995;
	    var lon = 3.707257;
	    var macarte = null;
            var markerClusters; // Servira à stocker les groupes de marqueurs
            // Nous initialisons une liste de marqueurs
            var villes = {
                "Cie Zouak": { "lat": 43.936995, "lon": 3.707257 }
            };
	    // Fonction d'initialisation de la carte
            function initMap() {
                // Nous définissons le dossier qui contiendra les marqueurs
                var iconBase = './assets/icons/';
		// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
                macarte = L.map('map').setView([lat, lon], 20);
                markerClusters = L.markerClusterGroup(); // Nous initialisons les groupes de marqueurs
                // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
                L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    // Il est toujours bien de laisser le lien vers la source des données
                    //attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(macarte);
			document.querySelector('.leaflet-control-attribution').innerHTML = "En savoir plus sur les données de la carte";

                // Nous parcourons la liste des villes
                for (ville in villes) {
	            // Nous définissons l'icône à utiliser pour le marqueur, sa taille affichée (iconSize), sa position (iconAnchor) et le décalage de son ancrage (popupAnchor)
                    var myIcon = L.icon({
                        iconUrl: iconBase + "location1.png",
                        iconSize: [50, 50],
                        iconAnchor: [25, 50],
                        popupAnchor: [-3, -76],
                    });
                    var marker = L.marker([villes[ville].lat, villes[ville].lon], { icon: myIcon }); // pas de addTo(macarte), l'affichage sera géré par la bibliothèque des clusters
                    marker.bindPopup(ville);
                    markerClusters.addLayer(marker); // Nous ajoutons le marqueur aux groupes
                }
                macarte.addLayer(markerClusters);

document.querySelector('a.leaflet-control-zoom-in').innerHTML = "<img src='./assets/icons/zoom.png'>";
document.querySelector('a.leaflet-control-zoom-out').innerHTML = "<img src='./assets/icons/zoomout.png'>";

            }

        function openLocation() {
            var latitude = lat ;
            var longitude = lon ;

            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {

                window.location.href = "http://maps.apple.com/?q=" + latitude + "," + longitude;

            } else if (/Android/.test(navigator.userAgent)) {

                window.location.href = "https://www.google.com/maps/search/?api=1&query=" + latitude + "," + longitude;

            } else {

                window.open("https://www.google.com/maps/search/?api=1&query=" + latitude + "," + longitude, "_blank");

            }
        }