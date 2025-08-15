emailjs.init("3PkGvZgz_2xPgT9s-"); // tu Public Key

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
      "service_r48y4mn",   // tu Service ID
      "template_6zkkm1d",  // tu Template ID
      this                // el formulario actual
    )
    .then(() => {
      alert("✅ Mensaje enviado con éxito!");
      this.reset();      // limpia el formulario
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("❌ Error al enviar el mensaje.");
    });
});
