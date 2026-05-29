// =======================
// 🎧 AUDIO CONTROL (AUTO STEALTH)
// =======================
const audio = document.getElementById("audio");

let started = false;

function startAudio() {
  if (!started) {
    audio.volume = 0;
    audio.play();

    // fade in
    let vol = 0;
    const fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        audio.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 100);

    started = true;
  }
}

screen.orientation.lock("portrait").catch(() => {});

// trigger random interaction
document.body.addEventListener("touchstart", startAudio, { once: true });
document.body.addEventListener("click", startAudio, { once: true });
document.addEventListener("click", startAudio);
document.addEventListener("touchstart", startAudio);
document.addEventListener("scroll", startAudio);
audio.play().then(() => {
  console.log("Audio jalan");
}).catch(err => {
  console.log("Audio gagal:", err);
});
window.addEventListener("load", () => {
  document.body.addEventListener("click", () => {
    audio.play();
  }, { once: true });
});


// =======================
// 🖼️ IMAGE PREVIEW
// =======================
const cards = document.querySelectorAll(".card");
const preview = document.getElementById("preview");
const previewImg = document.getElementById("previewImg");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    preview.style.display = "flex";
    previewImg.src = img.src;
  });
});

preview.addEventListener("click", () => {
  preview.style.display = "none";
});


// =======================
// 🎵 DATA LAGU
// =======================
const song = {
  title: "Perfect",
  artist: "Ed Sheeran"
};

document.getElementById("songTitle").innerText = song.title;
document.getElementById("artistName").innerText = song.artist;


// =======================
// 🎤 LIRIK SYNC
// =======================
const lyricsBox = document.getElementById("lyricsBox");

const lyricsData = [
  { time: 0, text: "'Cause we were just kids when we fell in love" },
  { time: 4, text: "Not knowin' what it was" },
  { time: 8, text: "I will not give you up this time" },

  { time: 15, text: "Oh, darling, just kiss me slow" },
  { time: 19, text: "Your heart is all I own" },
  { time: 23, text: "And in your eyes, you're holding mine" },

  { time: 30, text: "Baby, I'm dancin' in the dark with you between my arms" },
  { time: 40, text: "Barefoot on the grass while listenin' to our favourite song" },

  { time: 49, text: "When you said you looked a mess, I whispered underneath my breath" },
  { time: 56, text: 'But you heard it, "Darling, you look perfect tonight"' }
];

audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime;

  for (let i = 0; i < lyricsData.length; i++) {
    if (
      currentTime >= lyricsData[i].time &&
      (i === lyricsData.length - 1 || currentTime < lyricsData[i + 1].time)
    ) {
      lyricsBox.innerText = lyricsData[i].text;
      break;
    }
  }
});


// =======================
// 🚫 ANTI DOWNLOAD BASIC
// =======================
document.addEventListener("contextmenu", e => e.preventDefault());