//Resizing für mobile Endgeräte 

document.addEventListener('DOMContentLoaded', function () {
    console.log('resize.js loaded');

    window.addEventListener('resize', adjustHeight);

    function adjustHeight() {
        let menuMobileHeight = document.querySelector('.menuMobile').offsetHeight;

        //MobileMenu.html:
        let menuMobileSiteMain = document.querySelector('#menuMobileSiteMain');

        if (menuMobileSiteMain) {
            menuMobileSiteMain.style.height = 'calc(100vh - ' + menuMobileHeight + 'px)';
        }

        //index.html:
        let welcome = document.querySelector('#welcome');
        if (welcome) {

            welcome.style.height = 'calc(100vh - ' + menuMobileHeight + 'px)';
        }
    }

    // Aufruf der Funktion beim Laden der Seite
    adjustHeight();
});