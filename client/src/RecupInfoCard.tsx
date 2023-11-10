function recupInfoCard(): Promise<string | null> {
    return new Promise((resolve) => {
        const elementHover = document.getElementById('Hoverable');

        // Ajoutez un écouteur d'événements pour le survol
        if (elementHover) {
            elementHover.addEventListener('mouseover', handleHover);
        }

        // Fonction pour gérer le survol
        function handleHover(event: MouseEvent) {
            const targetElement = event.target as HTMLElement;
            
            // Vérifiez si l'élément survolé a l'attribut data-info égal à "Hoverable"
            const dataInfoValue = targetElement.getAttribute('data-info');
            
            if (dataInfoValue === 'Hoverable') {
                // Récupérez l'ID de l'élément survolé
                const ID = targetElement.getAttribute('data-id');
                resolve(ID);
            }
        }
    });
}

// Exemple d'utilisation
recupInfoCard().then((ID) => {
    if (ID) {
        console.log('ID récupéré :', ID);
        // Faites quelque chose avec l'ID ici
    } else {
        console.log('Aucun ID récupéré');
    }
});