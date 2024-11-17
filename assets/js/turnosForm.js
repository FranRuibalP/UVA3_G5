// Bloquear fechas anteriores a la fecha actual y fines de semana
const datePicker = document.getElementById('datePicker');
const today = new Date().toISOString().split('T')[0];
datePicker.setAttribute('min', today);

// Función para verificar si una fecha es fin de semana
function isWeekend(date) {
    const day = date.getDay();
    if (day === 0) {
        return true; // Domingo
    } else if (day === 6) {
        return true; // Sábado
    }else {
        return false; // No es fin de semana
    }
}

// Listener para bloquear fines de semana
datePicker.addEventListener('input', function() {
    const selectedDate = new Date(this.value);
    if (isWeekend(selectedDate)) {
        alert("No se permiten turnos los Domingos. Por favor, elija un día hábil.");
        this.value = ''; // Limpia el valor si es fin de semana
    }
});

// Generar opciones de horarios
const timePicker = document.getElementById('timePicker');

function populateTimeOptions() {
    const startHour = 9;
    const endHour = 17;
    const interval = 30; // Intervalo de 30 minutos

    for (let hour = startHour; hour < endHour; hour++) {
        for (let min = 0; min < 60; min += interval) {
            const formattedHour = hour.toString().padStart(2, '0');
            const formattedMin = min.toString().padStart(2, '0');
            const ampm = hour < 12 ? 'am' : 'pm';
            const displayHour = hour > 12 ? hour - 12 : hour;
            const displayTime = `${displayHour}:${formattedMin} ${ampm}`;
            const option = document.createElement('option');
            option.value = `${formattedHour}:${formattedMin}`;
            option.textContent = displayTime;
            timePicker.appendChild(option);
        }
    }
}

// Inicializar opciones de horarios
populateTimeOptions();

// Manejar la confirmación del turno
const form = document.getElementById('appointmentForm');
const turnosModal = new bootstrap.Modal(document.getElementById('turnoModal'));
const userNameSpan = document.getElementById('userName');
const selectedServiceSpan = document.getElementById('selectedService');
const selectedMailSpan = document.getElementById('selectedMail');
const selectedDate = document.getElementById('selectedDate');
const selectedTime = document.getElementById('selectedTime');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const service = document.getElementById('serviceSelect').value;
    const date = document.getElementById('datePicker').value;
    const time = document.getElementById('timePicker').value;

    if (name && email && service && date && time) {
        userNameSpan.textContent = name
        selectedServiceSpan.textContent = service
        selectedDate.textContent = date
        selectedTime.textContent = time
        selectedMailSpan.textContent = email
        turnosModal.show();
    } else {
        alert("Por favor, completa todos los campos antes de confirmar el turno.");
    }
});