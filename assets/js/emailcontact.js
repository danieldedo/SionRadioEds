emailjs.init("wl1-VUH-NMJXmHWhi"); // Remplacez par votre clé publique EmailJS

    document.getElementById('contact-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent page reload

      // Get the submit button
      const submitButton = this.querySelector('button[type="submit"]');

      // Disable the button and show loading state
      submitButton.disabled = true;
      submitButton.innerHTML = `
    <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
    Envoi en cours...
  `;

      emailjs.sendForm('service_dxnoxpg', 'template_zvka09q', this)
        .then(function () {
          // Reset form
          event.target.reset();

          // Initialise le toast de succès
          var toastEl = document.querySelector('.toast');
          var toast = new bootstrap.Toast(toastEl);
          toast.show();
        }, function (error) {
          // Show error alert
          alert('Erreur lors de l\'envoi du message : ' + error.text);
        })
        .finally(function () {
          // Re-enable the button regardless of success or failur
          submitButton.disabled = false;
          submitButton.innerHTML = 'Envoyer un message';
        });
    });