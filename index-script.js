document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM completamente caricato e analizzato');

  // Riferimenti agli elementi della pagina
  const colorOptions = document.querySelectorAll('.color-option');
  const buyButton = document.querySelector('.buy-button');
  const carouselInner = document.querySelector('.carousel-inner');

  // Oggetti per le immagini del carosello
  const images = {
    blue: [
      'https://via.placeholder.com/1000x1000/708090/ffffff?text=Blue+Shoe',
      'https://via.placeholder.com/1000x1000/708090/ffffff?text=Blue+Shoe2',
      'https://via.placeholder.com/1000x1000/708090/ffffff?text=Blue+Shoe3',
      'https://via.placeholder.com/1000x1000/708090/ffffff?text=Blue+Shoe4'
    ],
    gray: [
      'https://via.placeholder.com/1000x1000/728A95/ffffff?text=Gray+Shoe',
      'https://via.placeholder.com/1000x1000/728A95/ffffff?text=Gray+Shoe2',
      'https://via.placeholder.com/1000x1000/728A95/ffffff?text=Gray+Shoe3',
      'https://via.placeholder.com/1000x1000/728A95/ffffff?text=Gray+Shoe4'
    ],
    white: [
      'https://via.placeholder.com/1000x1000/ffffff/000000?text=White+Shoe',
      'https://via.placeholder.com/1000x1000/ffffff/000000?text=White+Shoe2',
      'https://via.placeholder.com/1000x1000/ffffff/000000?text=White+Shoe3',
      'https://via.placeholder.com/1000x1000/ffffff/000000?text=White+Shoe4'
    ],
    black: [
      'https://via.placeholder.com/1000x1000/000000/ffffff?text=Black+Shoe',
      'https://via.placeholder.com/1000x1000/000000/ffffff?text=Black+Shoe2',
      'https://via.placeholder.com/1000x1000/000000/ffffff?text=Black+Shoe3',
      'https://via.placeholder.com/1000x1000/000000/ffffff?text=Black+Shoe4'
    ]
  };

  // Funzione per aggiornare il carosello con le immagini del colore selezionato
  function updateCarousel(color) {
    console.log(`Aggiornamento carosello per il colore: ${color}`);
    
    carouselInner.innerHTML = ''; // Pulisce il carosello esistente

    images[color].forEach((src, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('carousel-item');
      if (index === 0) itemDiv.classList.add('active'); // Imposta l'immagine attiva

      const img = document.createElement('img');
      img.src = src;
      img.classList.add('d-block', 'w-100');
      itemDiv.appendChild(img);

      carouselInner.appendChild(itemDiv);
    });
  }

  // Gestione della selezione del colore
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      colorOptions.forEach(opt => opt.classList.remove('selected')); // Rimuove la selezione da tutti
      option.classList.add('selected'); // Aggiunge la selezione all'opzione cliccata
      const color = option.dataset.color;
      updateCarousel(color); // Aggiorna il carosello con il colore selezionato
    });
  });

  // Gestione del click sul pulsante "ACQUISTA"
  buyButton.addEventListener('click', () => {
    console.log('Pulsante di acquisto cliccato');
    window.location.href = 'product-page.html'; // Reindirizza alla pagina del prodotto
  });
});
