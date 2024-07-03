document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM completamente caricato e analizzato');

  const optionButtons = document.querySelectorAll('.option-btn');
  const confirmButton = document.querySelector('.confirm-btn');
  const confirmationModalElement = document.getElementById('confirmationModal');
  const accountModalElement = document.getElementById('accountModal');
  const accessModalElement = document.getElementById('accessModal');
  const confirmationModal = new bootstrap.Modal(confirmationModalElement);
  const accountModal = new bootstrap.Modal(accountModalElement);
  const accessModal = new bootstrap.Modal(accessModalElement);

  // Preselect "Alto"
  const preselectedOption = document.querySelector('.option-btn.selected');

  // Add event listener to option buttons
  optionButtons.forEach(button => {
    button.addEventListener('click', () => {
      optionButtons.forEach(btn => btn.classList.remove('selected'));
      button.classList.add('selected');
    });
  });

  // Add event listener to confirm button
  confirmButton.addEventListener('click', () => {
    console.log('Conferma cliccato');
    confirmationModal.show();
  });

  document.getElementById('continueShoppingButton').addEventListener('click', () => {
    console.log('Continuare a comprare cliccato');
    window.location.href = 'index.html';
  });

  document.getElementById('proceedCheckoutButton').addEventListener('click', () => {
    console.log('Procedi con il checkout cliccato');
    confirmationModal.hide();  // Hide confirmation modal
    accountModal.show();       // Show account modal
  });

  document.getElementById('openAccessModalButton').addEventListener('click', () => {
    console.log('Accedi cliccato');
    accountModal.hide(); // Hide the account modal
    accessModal.show(); // Show the access modal
  });

  document.getElementById('loginButtonInAccessModal').addEventListener('click', () => {
    console.log('Accedi cliccato nella modale di accesso');
    // Handle login action here
  });

  document.getElementById('registerButtonInAccessModal').addEventListener('click', () => {
    console.log('Accedi con Google cliccato nella modale di accesso');
    // Handle registration action here
  });

  document.getElementById('continueWithoutRegisteringButtonInAccessModal').addEventListener('click', () => {
    console.log('Continua senza registrarti cliccato nella modale di accesso');
    window.location.href = 'checkout-page.html'; // Proceed to checkout
  });
});
