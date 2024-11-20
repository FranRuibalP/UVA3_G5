const presupuestoForm = document.getElementById('presupuestoForm');
const presupuestoModal = new bootstrap.Modal(document.getElementById('presupuestoModal'));
const userNameSpan = document.getElementById('userName');
const selectedMailSpan = document.getElementById('selectedMail');
const selectedService = document.getElementById('selectedService');
const costSpan = document.getElementById('cost');

presupuestoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario si hay errores

    // Obtenemos los valores de los campos
    const nombreInput = document.getElementById('nombreInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const checkboxes = document.querySelectorAll('input[name="servicio"]:checked');
    const serviciosSeleccionados = Array.from(checkboxes).map(checkbox => checkbox.value);

    calcularServicio(nombreInput, emailInput, serviciosSeleccionados)    
});

function calcularServicio(nombre, mail, servicios) {
    let totalCost = 0;

    servicios.forEach(servicio => {
        switch (servicio) {
            case 'Chapa y Pintura':
                totalCost += 65000;
                break;
            case 'Mantenimiento general':
                totalCost += 20000;
                break;
            case 'Reparaciones mecanicas':
                totalCost += 40000;
                break;
            case 'Repuestos':
                totalCost += 50000;
                break;
            case 'Inspeccion y mantenimiento de neumaticos':
                totalCost += 28000;
                break;
            case 'Restauracion':
                totalCost += 100000;
                break;
            default:
                break;
        }
    });
    document.getElementById('userName').textContent = nombre;
    document.getElementById('selectedService').textContent = servicios.join(', ');
    document.getElementById('cost').textContent = totalCost;
    document.getElementById('selectedMail').textContent = mail;

    presupuestoModal.show()
}
