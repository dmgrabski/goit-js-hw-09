// Importowanie flatpickr i Notiflix
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// Znajdowanie elementów DOM
const startButton = document.querySelector('button[data-start]');
const daysSpan = document.querySelector('.value[data-days]');
const hoursSpan = document.querySelector('.value[data-hours]');
const minutesSpan = document.querySelector('.value[data-minutes]');
const secondsSpan = document.querySelector('.value[data-seconds]');

// Początkowo wyłączenie przycisku start
startButton.disabled = true;

// Funkcja dodająca prowadzące zera
function pad(value) {
  return String(value).padStart(2, '0');
}

// Ustawienia dla flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0].getTime();
    const currentTime = new Date().getTime();
    if (selectedTime <= currentTime) {
      Notiflix.Notify.failure("Please choose a date in the future");
      startButton.disabled = true; // Wyłączenie przycisku start
    } else {
      startButton.disabled = false; // Włączenie przycisku start
    }
  },
};

// Inicjalizacja flatpickr i przypisanie instancji do zmiennej
const fpInstance = flatpickr("#datetime-picker", options);

// Dodanie nasłuchiwania zdarzeń do przycisku start
startButton.addEventListener('click', () => {
  // Użycie instancji flatpickr do pobrania wybranej daty i czasu
  const selectedTime = fpInstance.selectedDates[0].getTime();
  startCountdown(selectedTime);
});

// Funkcja rozpoczynająca odliczanie
function startCountdown(endTime) {
  function updateCountdown() {
    const currentTime = new Date().getTime();
    const ms = endTime - currentTime;
    if (ms <= 0) {
      clearInterval(intervalId);
      // Zaktualizuj wartości na 00 po zakończeniu odliczania
      updateDisplay(0, 0, 0, 0);
      Notiflix.Notify.success('The countdown has finished!');
      return;
    }
    // Obliczenie pozostałego czasu i aktualizacja wyświetlacza
    const timeParts = convertMs(ms);
    updateDisplay(timeParts.days, timeParts.hours, timeParts.minutes, timeParts.seconds);
  }

  updateCountdown(); // Natychmiastowa aktualizacja interfejsu
  const intervalId = setInterval(updateCountdown, 1000);
}

// Funkcja aktualizująca wartości na wyświetlaczu
function updateDisplay(days, hours, minutes, seconds) {
  daysSpan.textContent = pad(days);
  hoursSpan.textContent = pad(hours);
  minutesSpan.textContent = pad(minutes);
  secondsSpan.textContent = pad(seconds);
}

// Funkcja konwertująca milisekundy na dni, godziny, minuty, sekundy
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

