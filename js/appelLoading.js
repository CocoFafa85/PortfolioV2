// Fonction intelligente pour choisir le fichier de chargement (Aller ou Retour)
function getLoadingPath(isBackNavigation) {
    const currentPath = window.location.pathname;
    
    // Vérifie si on est à la racine (index) ou dans un sous-dossier (html/)
    // Note: l'index peut être "/" ou "/index.html"
    const isRoot = currentPath.endsWith('/') || currentPath.includes('index.html');

    // Définition du nom du fichier à charger
    const filename = isBackNavigation ? 'loadingBack.html' : 'loading.html';

    if (isRoot) {
        // Depuis la racine, on va chercher dans le dossier html/
        return `html/${filename}`;
    } else {
        // Depuis un sous-dossier, on remonte d'un cran
        return `../html/${filename}`;
    }
}

document.querySelectorAll('a.page-link, a.button-back').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 1. DÉTECTION : Est-ce un bouton de retour ?
        const isBack = this.classList.contains('button-back');
        
        // 2. GESTION DU SKIP ANIMATION (Pour votre problème de Flytext)
        if (isBack) {
            // On force l'enregistrement immédiat avant toute animation
            sessionStorage.setItem('skipAnimation', 'true');
            console.log("Mode retour activé : Animation d'accueil sera désactivée.");
        }

        // 3. CHOIX DU FICHIER DE TRANSITION
        // On passe l'information 'isBack' à la fonction
        const loadingPath = getLoadingPath(isBack);

        // Récupération de l'URL absolue (votre correction précédente)
        const targetHref = this.href;

        if (!loadingPath) {
            console.error('Chemin de chargement invalide.');
            return;
        }

        // Création de l'iframe
        const iframe = document.createElement('iframe');
        iframe.src = loadingPath;
        iframe.style.position = 'fixed';
        iframe.style.top = 0;
        iframe.style.left = 0;
        iframe.style.width = '100vw';
        iframe.style.height = '100vh';
        iframe.style.border = 'none';
        iframe.style.zIndex = 9999;
        document.body.appendChild(iframe);

        iframe.onload = () => {
            // On envoie la destination à l'iframe
            iframe.contentWindow.postMessage({ target: targetHref }, window.location.origin);
        };
    });
});

// === GESTION DU RETOUR NAVIGATEUR (Bouton Précédent) ===
window.addEventListener('pageshow', function(event) {
    // Nettoyage des iframes si on revient via l'historique
    const existingIframes = document.querySelectorAll('iframe');
    existingIframes.forEach(iframe => {
        // On supprime n'importe quelle iframe de chargement (loading ou loadingBack)
        if (iframe.src.includes('loading')) {
            iframe.remove();
        }
    });

    // Si on revient via l'historique (bfcache), on veut aussi skipper l'anim
    if (event.persisted) {
        sessionStorage.setItem('skipAnimation', 'true');
        // Parfois nécessaire pour forcer le réaffichage sans anim
        // window.location.reload(); 
    }
});