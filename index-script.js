document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM completamente caricato e analizzato');

  // Riferimenti agli elementi della pagina
  const colorOptions = document.querySelectorAll('.color-option');
  const buyButton = document.querySelector('.buy-button');
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselElement = document.getElementById('carouselExampleControls');

  const dots = document.querySelectorAll('.dots .fa-circle');
  const prevIcon = document.querySelector('.carousel-control-prev-icon');
  const nextIcon = document.querySelector('.carousel-control-next-icon');
  const prevControl = document.querySelector('.carousel-control-prev');
  const nextControl = document.querySelector('.carousel-control-next');

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
      if (index === 0) itemDiv.classList.add('active'); // Imposta l'immagine attiva sempre sulla prima

      const img = document.createElement('img');
      img.src = src;
      img.classList.add('d-block', 'w-100');
      itemDiv.appendChild(img);

      carouselInner.appendChild(itemDiv);
    });

    updateDots(0); // Aggiorna i pallini, impostando sempre il primo come attivo
    updateControls(0); // Aggiorna la visibilità dei controlli
    updateControlColors(color); // Aggiorna il colore dei controlli
  }

  // Funzione per aggiornare i cerchi
  function updateDots(activeIndex) {
    dots.forEach((dot, index) => {
      dot.classList.remove('fa-solid', 'fa-regular');
      if (index === activeIndex) {
        dot.classList.add('fa-solid');
      } else {
        dot.classList.add('fa-regular');
      }
    });
  }

  // Funzione per aggiornare la visibilità dei controlli del carosello
  function updateControls(activeIndex) {
    if (activeIndex === 0) {
      prevControl.style.display = 'none';
    } else {
      prevControl.style.display = 'block';
    }

    if (activeIndex === images.blue.length - 1) {
      nextControl.style.display = 'none';
    } else {
      nextControl.style.display = 'block';
    }
  }

  // Funzione per aggiornare i colori dei controlli del carosello
  function updateControlColors(color) {
    if (color === 'black') {
      prevIcon.style.color = 'white';
      nextIcon.style.color = 'white';
    } else {
      prevIcon.style.color = '';
      nextIcon.style.color = '';
    }
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

  // Ascoltatore di eventi per il carosello
  carouselElement.addEventListener('slid.bs.carousel', () => {
    const activeItemIndex = Array.from(carouselInner.children).findIndex(item => item.classList.contains('active'));
    updateDots(activeItemIndex);
    updateControls(activeItemIndex);
  });

  // Inizializzazione dello stato dei controlli del carosello al caricamento della pagina
  updateControls(0); // Assicura che il pulsante prev sia nascosto all'inizio
  updateControlColors('blue'); // Aggiorna il colore dei controlli per il colore iniziale
});
