document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
const sgMail = require('@sendgrid/mail');
const API_KEY = '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';
sgMail.setApiKey(API_KEY);

var nombre = document.getElementById('nombre').value;
var email = document.getElementById('email').value;
var asunto = document.getElementById('asunto').value;
var mensaje = document.getElementById('mensaje').value;

// Construye el cuerpo del correo electrónico
var cuerpo = "Nombre: " + nombre + "\n";
cuerpo += "Email: " + email + "\n";
cuerpo += "Asunto: " + asunto + "\n";
cuerpo += "Mensaje: " + mensaje + "\n";

const msg = {
  to: 'erick100520@gmail.com', // Cambiar a tu dirección de correo electrónico
  from: 'zeroryper@hotmail.com', // Cambiar al remitente verificado en SendGrid
  subject: asunto,
  text: cuerpo
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email enviado');
  })
  .catch((error) => {
    console.error(error);
  });
});