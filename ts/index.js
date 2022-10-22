var btnEnviar = document.getElementById('btnEnviar');
btnEnviar === null || btnEnviar === void 0 ? void 0 : btnEnviar.addEventListener("click", captcha);
var datoStringCaptcha;
function captcha() {

  var nombreFormID = document.getElementById('nombreFormID').value;
  if (nombreFormID.length < 3) {
    alert('No has escrito tu nombre');
    document.getElementById("nombreFormID").value = "Nombre*";
  }
  if (nombreFormID == "Nombre*") {
    alert('No has escrito tu nombre');
  }
  var apellidoFormID = document.getElementById('apellidoFormID').value;
  if (apellidoFormID.length == 0) {
    alert('No has escrito tu apellido');
    document.getElementById("apellidoFormID").value = "Apellido*";
  }
  if (apellidoFormID == "Apellido*") {
    alert('No has escrito tu apellido');
  }
  var emailFormID = document.getElementById('emailFormID').value;
  if (emailFormID.length < 5) {
    alert('No has escrito tu email');
    document.getElementById("emailFormID").value = "Email*";
  }
  if (emailFormID == "Email*") {
    alert('No has escrito tu email');
  }
  var telefonoFormID = document.getElementById('telefonoFormID').value;
  if (telefonoFormID.length < 8) {
    alert('No has escrito tu numero de telefono');
    document.getElementById("telefonoFormID").value = "Telefono*";
  }
  if (telefonoFormID == "Telefono*") {
    alert('No has escrito tu numero de telefono');
  }
  var empresaFormID = document.getElementById('empresaFormID').value;
  if (empresaFormID.length < 2) {
    alert('No has escrito el nombre de tu empresa');
    document.getElementById("empresaFormID").value = "Empresa*";
  }
  if (empresaFormID == "Empresa*") {
    alert('No has escrito el nombre de tu empresa');
  }
  var cuitFormID = document.getElementById('cuitFormID').value;
  if (cuitFormID.length < 10) {
    alert('No has escrito tu cuit');
    document.getElementById("cuitFormID").value = "Cuit*";
  }
  if (cuitFormID == "Cuit*") {
    alert('No has escrito tu cuit');
  }
  var rubroFormID = document.getElementById('rubroFormID').value;
  if (rubroFormID.length < 3) {
    alert('No has escrito el rubro de tu empresa');
    document.getElementById("rubroFormID").value = "Rubro*";
  }
  if (rubroFormID == "Rubro*") {
    alert('No has escrito el rubro de tu empresa');
  }
  var numeroDeEmpleadosFormID = document.getElementById('numeroDeEmpleadosFormID').value;
  if (numeroDeEmpleadosFormID.length == 0) {
    alert('No has escrito el número de empleados de tu empresa');
    document.getElementById("numeroDeEmpleadosFormID").value = "Número de empleados*";
  }
  if (numeroDeEmpleadosFormID == "Numero de empleados*") {
    alert('No has escrito el número de empleados de tu empresa');
  }
  var provinciaFormID = document.getElementById('provinciaFormID').value;
  if (provinciaFormID.length < 5) {
    alert('No has escrito tu Provincia');
    document.getElementById("provinciaFormID").value = "Provincia*";
  }
  if (provinciaFormID == "Provincia*") {
    alert('No has escrito tu provincia');
  }
  var mensajeFormID = document.getElementById('mensajeFormID').value;
  if (mensajeFormID.length < 8) {
    alert('No has escrito tu mensaje');
    document.getElementById("mensajeFormID").value = "Ingrese su mensaje aqui...";
  }
  if (mensajeFormID == "Ingrese su mensaje aqui...") {
    alert('No has escrito tu mensaje');
  }
  var captchaimputvalue = document.getElementById("captchaimput").value


  if (datoStringCaptcha == " " + captchaimputvalue) {
    alert("su mensaje fue enviado");
    console.log("captchaimputvalue en la función captcha es:" + captchaimputvalue);
    console.log("el datostringcaptcha en la función cpatcha es: " + datoStringCaptcha);
    console.log("prueba")
    var randomStringContainer_1 = document.getElementById("id01");
    randomStringContainer_1.innerHTML = generateRandomString(8);
  }
  else {
    console.log("captchaimputvalue en la función captcha es:" + captchaimputvalue);
    console.log("el datostringcaptcha en la funcion captcha es:" + datoStringCaptcha);
    console.log("captchaimputvalue el tipo es:" + typeof captchaimputvalue);
    console.log("el datostringcaptcha el tipo es:" + typeof datoStringCaptcha);
    var randomStringContainer_1 = document.getElementById("id01");
    randomStringContainer_1.innerHTML = generateRandomString(8);
    alert("Vuelva a intentarlo");
  }
}
var generateRandomString = function (num) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result1 = ' ';
  var charactersLength = characters.length;
  for (var i = 0; i < num; i++) {
    result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log("el result1 en generaterandomstring es:" + result1);
  datoStringCaptcha = result1;
  return result1;
};


var randomStringContainer = document.getElementById("id01");
randomStringContainer.innerHTML = generateRandomString(8);
console.log("el datoStringCaotcha en post generaterandomstring es: " + datoStringCaptcha);



//Events to delete the default values of the form
document.getElementById("nombreFormID").addEventListener("click", function () {
  document.getElementById("nombreFormID").value = "";
});
document.getElementById("apellidoFormID").addEventListener("click", function () {
  document.getElementById("apellidoFormID").value = "";
});
document.getElementById("emailFormID").addEventListener("click", function () {
  document.getElementById("emailFormID").value = "";
});
document.getElementById("telefonoFormID").addEventListener("click", function () {
  document.getElementById("telefonoFormID").value = "";
});
document.getElementById("empresaFormID").addEventListener("click", function () {
  document.getElementById("empresaFormID").value = "";
});
document.getElementById("cuitFormID").addEventListener("click", function () {
  document.getElementById("cuitFormID").value = "";
});
document.getElementById("rubroFormID").addEventListener("click", function () {
  document.getElementById("rubroFormID").value = "";
});
document.getElementById("numeroDeEmpleadosFormID").addEventListener("click", function () {
  document.getElementById("numeroDeEmpleadosFormID").value = "";
});

document.getElementById("mensajeFormID").addEventListener("click", function () {
  document.getElementById("mensajeFormID").value = "";
});
