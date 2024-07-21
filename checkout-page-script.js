document.addEventListener('DOMContentLoaded', () => {
  const confirmButton = document.querySelector('.confirm-btn');
  const proceedCheckoutButton = document.getElementById('proceedCheckoutButton');
  const continueShoppingButton = document.getElementById('continueShoppingButton');
  const downloadButton = document.getElementById('downloadButton');
  const videoButton = document.getElementById('videoButton');
  const openAccessModalButton = document.getElementById('openAccessModalButton');
  const registerButton = document.getElementById('registerButton');
  const continueWithoutRegisteringButton = document.getElementById('continueWithoutRegisteringButton');
  const backButton = document.getElementById('backButton');
  const backButtonInRegisterModal = document.getElementById('backButtonInRegisterModal');
  const loginButtonInAccessModal = document.getElementById('loginButtonInAccessModal');
  const registerButtonInRegisterModal = document.getElementById('registerButtonInRegisterModal');
  const loginWithGoogleButtonInAccessModal = document.getElementById('loginWithGoogleButtonInAccessModal');
  const loginWithGoogleButtonInRegisterModal = document.getElementById('loginWithGoogleButtonInRegisterModal');
  const goToCheckoutButton = document.getElementById('goToCheckoutButton');
  const goToCheckoutButtonInRegister = document.getElementById('goToCheckoutButtonInRegister');
  const infoModalCloseButton = document.getElementById('infoModalCloseButton');
  const isLoggedIn = false;

  const optionButtons = document.querySelectorAll('.option-btn');

  optionButtons.forEach(button => {
      button.addEventListener('click', () => {
          optionButtons.forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
      });
  });

  confirmButton.addEventListener('click', () => {
      const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      confirmationModal.show();
  });

  proceedCheckoutButton.addEventListener('click', () => {
      if (isLoggedIn) {
          const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
          welcomeModal.show();
      } else {
          const accountModal = new bootstrap.Modal(document.getElementById('accountModal'));
          accountModal.show();
      }
  });

  continueShoppingButton.addEventListener('click', () => {
      const confirmationModal = bootstrap.Modal.getInstance(document.getElementById('confirmationModal'));
      confirmationModal.hide();
      window.location.href = 'index.html';
  });

  openAccessModalButton.addEventListener('click', () => {
      const accountModal = bootstrap.Modal.getInstance(document.getElementById('accountModal'));
      accountModal.hide();
      const accessModal = new bootstrap.Modal(document.getElementById('accessModal'));
      accessModal.show();
  });

  registerButton.addEventListener('click', () => {
      const accountModal = bootstrap.Modal.getInstance(document.getElementById('accountModal'));
      accountModal.hide();
      const registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
      registerModal.show();
  });

  continueWithoutRegisteringButton.addEventListener('click', () => {
      const accountModal = bootstrap.Modal.getInstance(document.getElementById('accountModal'));
      accountModal.hide();
      alert('COMPLIMENTI, TEST COMPLETATO!');
  });

  backButton.addEventListener('click', () => {
      const accessModal = bootstrap.Modal.getInstance(document.getElementById('accessModal'));
      accessModal.hide();
      const accountModal = new bootstrap.Modal(document.getElementById('accountModal'));
      accountModal.show();
  });

  backButtonInRegisterModal.addEventListener('click', () => {
      const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      registerModal.hide();
      const accountModal = new bootstrap.Modal(document.getElementById('accountModal'));
      accountModal.show();
  });

  loginButtonInAccessModal.addEventListener('click', () => {
      const accessModal = bootstrap.Modal.getInstance(document.getElementById('accessModal'));
      accessModal.hide();
      const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
      welcomeModal.show();
  });

  registerButtonInRegisterModal.addEventListener('click', () => {
      const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      registerModal.hide();
      const confirmRegisterModal = new bootstrap.Modal(document.getElementById('confirmRegisterModal'));
      confirmRegisterModal.show();
  });

  loginWithGoogleButtonInAccessModal.addEventListener('click', () => {
      const accessModal = bootstrap.Modal.getInstance(document.getElementById('accessModal'));
      accessModal.hide();
      const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
      welcomeModal.show();
  });

  loginWithGoogleButtonInRegisterModal.addEventListener('click', () => {
      const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      registerModal.hide();
      const confirmRegisterModal = new bootstrap.Modal(document.getElementById('confirmRegisterModal'));
      confirmRegisterModal.show();
  });

  goToCheckoutButton.addEventListener('click', () => {
      const welcomeModal = bootstrap.Modal.getInstance(document.getElementById('welcomeModal'));
      welcomeModal.hide();
      alert('COMPLIMENTI, TEST COMPLETATO!');
  });

  goToCheckoutButtonInRegister.addEventListener('click', () => {
      const confirmRegisterModal = bootstrap.Modal.getInstance(document.getElementById('confirmRegisterModal'));
      confirmRegisterModal.hide();
      alert('COMPLIMENTI, TEST COMPLETATO!');
  });

  const showModalWithContent = (title, content) => {
      const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
      document.getElementById('infoModalTitle').innerText = title;
      document.getElementById('infoModalContent').innerText = content;
      infoModal.show();
  };

  downloadButton.addEventListener('click', () => {
      showModalWithContent('Hai scaricato l\'App e il plantare consigliato per te è "Medio"', '');
  });

  videoButton.addEventListener('click', () => {
      showModalWithContent('Hai guardato il video e il plantare consigliato per te è "Medio"', '');
  });

  infoModalCloseButton.addEventListener('click', () => {
      const infoModal = bootstrap.Modal.getInstance(document.getElementById('infoModal'));
      infoModal.hide();
  });
});
