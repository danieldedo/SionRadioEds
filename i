<script>
  emailjs.init("ymntp5Kznj5IcWZ8e"); // Remplacez par votre clé publique EmailJS

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    emailjs.sendForm('service_zcooc5v', 'template_5b5pr0v', this)
      .then(function () {
        // Initialiser le toast
        var toastEl = document.querySelector('.toast');
        var toast = new bootstrap.Toast(toastEl);
        toast.show();
      }, function (error) {
        alert('Erreur lors de l\'envoi du message : ' + error.text);
      });
  });
</script>