document.addEventListener("DOMContentLoaded", () => {

  // =======================
  // 🎧 AUDIO (SIMPLE & STABLE)
  // =======================
  const audio = document.getElementById("audio");

  if (audio) {
    document.addEventListener("click", () => {
      audio.volume = 0;
      audio.play();

      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 1) {
          vol += 0.05;
          audio.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 100);
    }, { once: true });
  }

  // =======================
  // 🖼️ IMAGE PREVIEW
  // =======================
  const cards = document.querySelectorAll(".card");
  const preview = document.getElementById("preview");
  const previewImg = document.getElementById("previewImg");

  if (cards && preview && previewImg) {
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
  }

  // =======================
  // 🎵 DATA LAGU
  // =======================
  const songTitle = document.getElementById("songTitle");
  const artistName = document.getElementById("artistName");

  if (songTitle && artistName) {
    songTitle.innerText = "Sempurna";
    artistName.innerText = "Andra and The Backbone";
  }

  // =======================
  // 🎤 LIRIK SYNC
  // =======================
  const lyricsBox = document.getElementById("lyricsBox");

  const lyricsData = [
    { time: 0, text: "Kau begitu sempurna, dimataku kau begitu indah" },
    { time: 9, text: "Kau membuat diriku akan selalu memujamu" },
    { time: 19, text: "Di setiap langkahku, ku kan slalu memikirkan dirimu" },

    { time: 28, text: "Tak bisa ku bayangkan, hidupku tanpa cintamu" },
    { time: 39, text: "Janganlah kau tinggalkan diriku" },
    { time: 43, text: "Tak mampu tuk hadapi semua" },

    { time: 48, text: "Hanya bersamamu ku akan bisa" },
    { time: 53, text: "Kau adalah darahku, kau adalah jantungku" },

    { time: 63, text: "Kau adalah hidupku, lengkapi diriku" },
    { time: 69, text: "Oh sayangku kau begitu..." },
    { time: 75, text: "Sempurna..." }
  ];

  if (audio && lyricsBox) {
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
  }

  // =======================
  // 🚫 ANTI DOWNLOAD BASIC
  // =======================
  document.addEventListener("contextmenu", e => e.preventDefault());

});