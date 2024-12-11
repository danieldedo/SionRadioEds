document.getElementById('confirmDonation').addEventListener('click', () => {
    const amount = document.getElementById('donationAmount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (!amount || amount <= 0) {
      alert("Veuillez entrer un montant valide.");
      return;
    }

    // Initialise FeexPay et affiche le bouton de paiement dans le div "render"
    FeexPayButton.init("render", {
      id: "67585cdd7853f70e1effd25d",
      amount: parseFloat(amount),
      token: "test_Hg7Kjl3ZAM63UuIUpuudD9nKuu3ZAM67Kjl3Uuhn",
      callback: () => {
        alert("Merci pour votre don !");
        // Fermez le modal après le paiement
        const modal = bootstrap.Modal.getInstance(document.getElementById('donationModal'));
        modal.hide();
      },
      callback_url: window.location.href,
      mode: "SANDBOX", // Remplacez par "LIVE" pour la production
      custom_id: "donation_" + Date.now(),
      description: "Don à la radio",
      case: paymentMethod,
    });
  });
