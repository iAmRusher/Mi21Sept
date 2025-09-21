// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
const lyricsData = [
  { text: "It was just two lovers", time: 15.61 },
  { text: "Sittin' in the car, listening to Blonde", time: 17.57 },
  { text: "Fallin' for each other", time: 19.48 },
  { text: "Pink and orange skies, feelin' super childish", time: 21.41 },
  { text: "No Donald Glover", time: 23.20 },
  { text: "Missed call from my mother", time: 25.18 },
  { text: 'Like, "Where you at tonight?" Got no alibi', time: 27.04 },
  { text: "I was all alone with the love of my life", time: 28.99 },
  { text: "She's got glitter for skin", time: 34.08 },
  { text: "My radiant beam in the night", time: 36.40 },
  { text: "I don't need no light to see you", time: 41.06 },
  { text: "Shineee", time: 46.20 },
  { text: "It's your golden hour (oh)", time: 50.11 },
  { text: "You slow down time", time: 58.89 },
  { text: "In your golden hour (oh)", time: 65.36 },
  { text: "We were just two lovers", time: 76.81 },
  { text: "Feet up on the dash, drivin' nowhere fast", time: 78.72 },
  { text: "Burnin' through the summer", time: 80.62 },
  { text: "Radio on blast, make the moment last", time: 82.55 },
  { text: "She got solar power", time: 84.41 },
  { text: "Minutes feel like hours", time: 86.42 },
  { text: "She knew she was the baddest, can you even imagine", time: 88.30 },
  { text: "Fallin' like I did?", time: 90.17 },
  { text: "For the love of my life", time: 91.56 },
  { text: "She's got glow on her face", time: 95.18 },
  { text: "A glorious look in her eyes", time: 97.82 },
  { text: "My angel of light", time: 102.12 },
  { text: "I was all alone with the love of my life", time: 105.32 },
  { text: "She's got glitter for skin", time: 110.46 },
  { text: "My radiant beam in the night", time: 112.79 },
  { text: "I don't need no light to see you", time: 117.46 },
  { text: "Shineee", time: 122.43 },
  { text: "It's your golden hour (oh)", time: 126.43 },
  { text: "You slow down time", time: 134.87 },
  { text: "In your golden hour (oh)", time: 141.53 },
  { text: "Golden Hour-JVKE", time: 147 }
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = null;

  // Encuentra la última línea cuyo tiempo sea menor o igual al actual
  for (let i = 0; i < lyricsData.length; i++) {
    if (time >= lyricsData[i].time) {
      currentLine = lyricsData[i];
    } else {
      break;
    }
  }

  if (currentLine) {
    lyrics.style.opacity = 1;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}
setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 14000);

// Funcion del greetings
window.addEventListener("pageshow", () => {
  const letters = document.querySelectorAll(".greetings > span");

  if (letters.length) {
    letters.forEach((letter) => {
      letter.style.animation = "none"; // quitar animación
    });

    void document.body.offsetWidth; // forzar reflow

    letters.forEach((letter) => {
      letter.style.animation = ""; // volver a activar animación
    });
  }
});