document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("textarea-mensaje").value;
  
    // Construye el cuerpo del correo electrónico
    var cuerpo = "Nombre: " + nombre + "\n";
    cuerpo += "Email: " + email + "\n";
    cuerpo += "Asunto: " + asunto + "\n";
    cuerpo += "Mensaje: " + mensaje + "\n";
  
    // Configura los datos del correo electrónico
    var destinatario = "erick100520@gmail.com";  
    // Construye la URL del servicio de envío de correo (puedes usar tu propio backend o un servicio de terceros)
    var url = "https://ejemplo.com/enviar_correo.php";
  
    // Crea una solicitud POST utilizando la API Fetch para enviar los datos al servidor
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        destinatario: destinatario,
        asunto: asunto,
        cuerpo: cuerpo
      })
    })
    .then(function(response) {
      if (response.ok) {
        // Redirecciona a una página de confirmación o muestra un mensaje de éxito
        window.location.href = "confirmacion.html";
      } else {
        // Muestra un mensaje de error
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.");
      }
    })
    .catch(function(error) {
      console.log(error);
      // Muestra un mensaje de error
      alert("Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.");
    });
  });