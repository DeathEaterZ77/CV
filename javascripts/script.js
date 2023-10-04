/* quand le dom est chargé */
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('header a');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (e) {
            /* on scroll vers l'element - la taille du header */
            e.preventDefault();
            let element = document.querySelector(this.getAttribute('href'));
            let headerHeight = document.querySelector('header').offsetHeight;
            let elementPosition = element.offsetTop;
            let offsetPosition = elementPosition - headerHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

        });
    }
});