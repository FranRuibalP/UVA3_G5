function goToPage(url){
    window.location.href = url
}
// GALERIA
// Seleccionamos todas las imágenes de la galería
const galleryImages = document.querySelectorAll('.gallery .item img');
if(galleryImages.length) {
    const modalImage = document.getElementById('modalImage');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));

    // Añadimos el evento de clic a cada imagen
    galleryImages.forEach((img) => {
        img.addEventListener('click', (e) => {
        const imageUrl = e.target.src; // Obtenemos la URL de la imagen
        modalImage.src = imageUrl; // Establecemos la imagen en el modal
        imageModal.show(); // Mostramos el modal
        });
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    console.log(currentPath)
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const cards = document.querySelectorAll('.card');
    const footer = document.querySelector('footer');
    const accordion = document.querySelector('.accordion');
    const logo = document.querySelector('.navbar-brand img'); 
    const logoUade = document.querySelector('footer img');

    const logoLight = currentPath == '/index.html' ? './assets/logo.png' : '../assets/logo.png'; 
    const logoDark = currentPath == '/index.html' ? './assets/logo_dark.png' : '../assets/logo_dark.png' ; 
    const logoUadeLight = currentPath == '/index.html' ? './assets/uade-logo.png' : '../assets/uade-logo.png'; 
    const logoUadeDark = currentPath == '/index.html' ? './assets/uade-logo-dark.png' : '../assets/uade-logo-dark.png'; 
    // Cargar la preferencia del modo oscuro desde localStorage
    const darkMode = localStorage.getItem('dark-mode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        cards?.forEach(card => {
            card?.classList.add('dark-mode');
        });
        accordion?.classList.add('dark-mode');
        logo.src = logoDark;
        logoUade.src = logoUadeLight;
        darkModeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    }

    // Alternar entre modo oscuro y claro
    darkModeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            navbar.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
            cards?.forEach(card => {
                card?.classList.remove('dark-mode');
            });
            accordion?.classList.remove('dark-mode');
            logo.src = logoLight;
            logoUade.src = logoUadeDark;
            localStorage.setItem('dark-mode', 'disabled');
            darkModeToggle.innerHTML = '<i class="bi bi-moon"></i>';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
            navbar.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            cards?.forEach(card => {
                card?.classList.add('dark-mode');
            });
            accordion?.classList.add('dark-mode');
            logo.src = logoDark;
            logoUade.src = logoUadeLight;
            darkModeToggle.innerHTML = '<i class="bi bi-sun"></i>';
        }
    });
});