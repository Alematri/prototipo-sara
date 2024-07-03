document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM completamente caricato e analizzato');

  const colorOptions = document.querySelectorAll('.color-option');
  const buyButton = document.querySelector('.buy-button');
  const carouselInner = document.querySelector('.carousel-inner');
  const sizeSelectorContainer = document.querySelector('.size-rows');
  const selectedColorElement = document.getElementById('selectedColor');
  const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46];
  const sizesPerRow = 4;
  let selectedSize = 35;

  const sizeModalElement = document.getElementById('sizeModal');
  const confirmationModalElement = document.getElementById('confirmationModal');

  if (sizeModalElement && confirmationModalElement) {
    const sizeModal = new bootstrap.Modal(sizeModalElement);
    const confirmationModal = new bootstrap.Modal(confirmationModalElement);

    console.log('Modali Bootstrap inizializzati correttamente');

    function updateCarousel(color) {
      console.log(`Aggiornamento carosello per il colore: ${color}`);

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

      carouselInner.innerHTML = '';

      images[color].forEach((src, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('carousel-item');
        if (index === 0) itemDiv.classList.add('active');

        const img = document.createElement('img');
        img.src = src;
        img.classList.add('d-block', 'w-100');
        itemDiv.appendChild(img);

        carouselInner.appendChild(itemDiv);
      });
    }

    colorOptions.forEach(option => {
      option.addEventListener('click', () => {
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        const color = option.dataset.color;
        selectedColorElement.textContent = color.charAt(0).toUpperCase() + color.slice(1);
        updateCarousel(color);
      });
    });

    for (let i = 0; i < sizes.length; i += sizesPerRow) {
      const sizeRow = document.createElement('div');
      sizeRow.classList.add('row', 'justify-content-center');

      for (let j = i; j < i + sizesPerRow && j < sizes.length; j++) {
        const sizeCol = document.createElement('div');
        sizeCol.classList.add('col-auto');

        const sizeButton = document.createElement('button');
        sizeButton.classList.add('size-button');
        sizeButton.textContent = sizes[j];

        sizeButton.addEventListener('click', () => {
          document.querySelector('.size-title').textContent = `Taglia: ${sizes[j]}`;
          selectedSize = sizes[j];

          document.querySelectorAll('.size-button').forEach(button => {
            button.style.backgroundColor = '#f3f3f3';
            button.style.color = '#000';
          });

          sizeButton.style.backgroundColor = '#000';
          sizeButton.style.color = '#fff';
        });

        sizeCol.appendChild(sizeButton);
        sizeRow.appendChild(sizeCol);
      }

      sizeSelectorContainer.appendChild(sizeRow);
    }

    // Preseleziona il colore blu
    document.querySelector('.color-option[data-color="blue"]').classList.add('selected');
    selectedColorElement.textContent = 'Blue';
    updateCarousel('blue');

    // Preseleziona la taglia 35
    const preselectedSizeButton = document.querySelector('.size-button');
    if (preselectedSizeButton) {
      preselectedSizeButton.style.backgroundColor = '#000';
      preselectedSizeButton.style.color = '#fff';
      document.querySelector('.size-title').textContent = 'Taglia: 35';
    }

    buyButton.addEventListener('click', () => {
      console.log('Pulsante di acquisto cliccato');
      window.location.href = 'checkout-page.html';
    });

    document.getElementById('continueShoppingButton').addEventListener('click', () => {
      console.log('Continuare a comprare cliccato');
      window.location.href = 'index.html';
    });

    document.getElementById('proceedCheckoutButton').addEventListener('click', () => {
      console.log('Procedi con il checkout cliccato');
      window.location.href = 'checkout-page.html';
    });
  } else {
    console.error('Uno o entrambi i modali non sono stati trovati.');
  }
});
