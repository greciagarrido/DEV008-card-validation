import validator from './validator.js';

//PRIMERAMENTE MANDAMOS A LLAMAR A LOS IMPUTS CON LOS VALORES QUE PROPORCIONARA NUESTRO USUARIO Y LOS REFLEJAMOS EN LA BASE DE DATOS DEL CONSOLE
document.getElementById("validar").addEventListener("click", validarTarjeta);
function validarTarjeta(){
  const tarjeta = document.getElementById("numeroTAR").value;

  const tarjetavalida = validator.isValid(tarjeta);
  alert(tarjetavalida);

  document.getElementById("numeroTAR").value = validator.maskify(tarjeta);
}
//let numeroTAR = document.getElementById("numeroTAR")
//SEGUNDO PASO ES INVERTIR LA CADENA QUE EL USUARIO INGRESA PARA ESTO UTILIZAREMOS UNA FUNCION  QUE DENOMINARE "INVERTIRCADENA"Y UN SPLIT.