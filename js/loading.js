function stars() {
    let count = 50;
    let scene = document.querySelector('.scene');
    let i = 0;
    while (i < count) {
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;
        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = 50 + h + 'px';
        star.style.animationDuration = duration + 's';

        scene?.appendChild(star);
        i++
    }
}
stars();


let redirected = false;
window.addEventListener('message', (event) => {
    // 1. Vérifiez l'origine (très bonne pratique de sécurité)
    if (event.origin !== window.location.origin) {
        return;
    }

    // 2. Assurez-vous que l'objet de données contient bien la clé 'target'
    if (!event.data || !event.data.target) {
        // Si c'est un autre message sans target, on l'ignore
        return;
    }

    // 3. Empêcher la double redirection
    if (redirected) return;
    redirected = true;

    const target = event.data.target;
    console.log("Animation en cours...");
    console.log("Redirection vers:", target);

    window.top.location.href = target;
});
