// JavaScript para el efecto de scroll
        const navbar = document.getElementById('navbar');
        const logo = document.getElementById('logo');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shrink');
                logo.src = '../img/logo.png'; // Cambia al nuevo logo
            } else {
                navbar.classList.remove('shrink');
                logo.src = '../img/log.png'; // Vuelve al logo original
            }
        });