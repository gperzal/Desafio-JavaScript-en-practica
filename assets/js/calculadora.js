
document.addEventListener('DOMContentLoaded', (event) => {
    // Evento para el botón de sumar
    document.getElementById('btn-sumar').addEventListener('click', suma);
    // Evento para el botón de restar
    document.getElementById('btn-restar').addEventListener('click', resta);
});

function suma() {
    // Seleccionar los valores dentro de la función para obtener los valores actuales
    let valor_1 = document.getElementById('valor1').value;
    let valor_2 = document.getElementById('valor2').value;
    let resultado = document.querySelector('.resultado'); // Selecciona el elemento por clase

    if (valor_1.trim() === "" || valor_2.trim() === "" || isNaN(valor_1) || isNaN(valor_2)) {
        resultado.innerHTML = "Por favor, ingrese números válidos.";
    } else {
        // Realiza la suma si ambos valores son números
        let resultado_suma = parseInt(valor_1) + parseInt(valor_2);
        resultado.innerHTML = resultado_suma;
    }
}

function resta() {
    // Seleccionar los valores dentro de la función para obtener los valores actuales
    let valor_1 = document.getElementById('valor1').value;
    let valor_2 = document.getElementById('valor2').value;
    let resultado = document.querySelector('.resultado'); // Selecciona el elemento por clase

    if (valor_1.trim() === "" || valor_2.trim() === "" || isNaN(valor_1) || isNaN(valor_2)) {
        resultado.innerHTML = "Por favor, ingrese números válidos.";
    } else {
        let resultado_resta = parseInt(valor_1) - parseInt(valor_2);

        //OPerador ternario para el requerimiento del desafio
        resultado.innerHTML = (resultado_resta < 0) ? 0 : resultado_resta;
    }
}
