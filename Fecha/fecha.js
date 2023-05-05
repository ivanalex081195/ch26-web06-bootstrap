function calcularDia() {
const dia = parseInt(document.getElementById('dia').value);
const mes = parseInt(document.getElementById('mes').value) - 1;
const anio = parseInt(document.getElementById('anio').value);

const fecha = new Date(anio, mes, dia);
const diaSemana = fecha.getDay();

let mensaje = "";

switch (diaSemana) {
case 0:
  mensaje = "Domingo, día no laborable";
  break;
case 6:
  mensaje = "Sábado, día no laborable";
  break;
default:
  mensaje = `Día laborable, ${obtenerNombreDia(diaSemana)}`;
}

document.getElementById('resultado').textContent = mensaje;
}

function obtenerNombreDia(diaSemana) {
const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
return dias[diaSemana];
} 
