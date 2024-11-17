const presupuestoForm = document.getElementById('presupuestoForm');
const presupuestoModal = new bootstrap.Modal(document.getElementById('presupuestoModal'));
const userNameSpan = document.getElementById('userName');
const selectedServiceSpan = document.getElementById('selectedService');
const selectedModeloSpan = document.getElementById('selectedModelo');
const selectedMailSpan = document.getElementById('selectedMail');
const costSpan = document.getElementById('cost');

presupuestoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario si hay errores

    // Obtenemos los valores de los campos
    const nombreInput = document.getElementById('nombreInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const autoSelect = document.getElementById('autoSelect').value;
    const serviceSelect = document.getElementById('serviceSelect').value;

    calcularServicio(nombreInput, emailInput, autoSelect, serviceSelect)    
});

function calcularServicio(nombre, mail, modelo, servicio){
    let cost = ''
    switch (servicio) {
        case 'chapaPintura':
            if (modelo == 'camaro'){
                cost = '30000'
            }
            if(modelo == 'chevelle'){
                cost = '25000'
            }
            if(modelo == 'corvair'){
                cost = '20000'
            }
            if(modelo == 'camino'){
                cost = '35000'
            }
            break;
        case 'general':
            cost = '15000';
            break;
        case 'repuestos':
            if (modelo == 'camaro'){
                cost = '50000'
            }
            if(modelo == 'chevelle'){
                cost = '45000'
            }
            if(modelo == 'corvair'){
                cost = '55000'
            }
            if(modelo == 'camino'){
                cost = '60000'
            }
            break;
        case 'restauracion':
            if (modelo == 'camaro'){
                cost = '200000'
            }
            if(modelo == 'chevelle'){
                cost = '150000'
            }
            if(modelo == 'corvair'){
                cost = '180000'
            }
            if(modelo == 'camino'){
                cost = '220000'
            }
            break;
        default:
            break;
    }
    userNameSpan.textContent = nombre
    selectedServiceSpan.textContent = servicio
    selectedModeloSpan.textContent = modelo
    costSpan.textContent = cost
    selectedMailSpan.textContent = mail
    presupuestoModal.show();

}
