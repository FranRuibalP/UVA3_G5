function goToPage(url){
    window.location.href = url
}
// GALERIA
// Seleccionamos todas las imágenes de la galería
const galleryImages = document.querySelectorAll('.gallery .item img');
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