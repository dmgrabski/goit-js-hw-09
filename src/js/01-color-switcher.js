// Funkcja generująca losowy kolor w formacie heksadecymalnym
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  // Zmienne do przechowywania identyfikatora interwału i stanu zmiany koloru
  let colorChangeInterval;
  let isColorChanging = false;
  
  // Znajdowanie przycisków w dokumencie
  const startButton = document.querySelector('button[data-start]');
  const stopButton = document.querySelector('button[data-stop]');
  
  // Dodanie nasłuchiwania dla przycisku "Start"
  startButton.addEventListener('click', function() {
    if (!isColorChanging) {
      // Ustawienie flagi i wyłączenie przycisku "Start"
      isColorChanging = true;
      startButton.disabled = true;
  
      // Ustawienie interwału zmiany koloru co sekundę
      colorChangeInterval = setInterval(function() {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
    }
  });
  
  // Dodanie nasłuchiwania dla przycisku "Stop"
  stopButton.addEventListener('click', function() {
    // Sprawdzenie, czy zmiana koloru jest aktywna
    if (isColorChanging) {
      // Zatrzymanie zmiany koloru i wyczyszczenie interwału
      clearInterval(colorChangeInterval);
  
      // Umożliwienie ponownego kliknięcia przycisku "Start"
      startButton.disabled = false;
  
      // Ustawienie flagi na false
      isColorChanging = false;
    }
  });
  
