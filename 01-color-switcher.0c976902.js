!function(){let t;let e=!1,n=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");// Dodanie nasłuchiwania dla przycisku "Start"
n.addEventListener("click",function(){e||(// Ustawienie flagi i wyłączenie przycisku "Start"
e=!0,n.disabled=!0,// Ustawienie interwału zmiany koloru co sekundę
t=setInterval(function(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`},1e3))}),// Dodanie nasłuchiwania dla przycisku "Stop"
o.addEventListener("click",function(){// Sprawdzenie, czy zmiana koloru jest aktywna
e&&(// Zatrzymanie zmiany koloru i wyczyszczenie interwału
clearInterval(t),// Umożliwienie ponownego kliknięcia przycisku "Start"
n.disabled=!1,// Ustawienie flagi na false
e=!1)})}();//# sourceMappingURL=01-color-switcher.0c976902.js.map

//# sourceMappingURL=01-color-switcher.0c976902.js.map
