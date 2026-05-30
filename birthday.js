// =======================
// 🎧 AUDIO STEALTH
// =======================
const audio = document.getElementById("audio");

document.body.addEventListener("click", () => {
  audio.play();
}, { once: true });


// =======================
// ✍️ INPUT → RESULT
// =======================
const btn = document.getElementById("submitBtn");
const input = document.getElementById("inputText");
const result = document.getElementById("resultBox");
const inputArea = document.getElementById("inputArea");

btn.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") return;

  result.style.display = "block";
  result.innerText = text;

  inputArea.style.display = "none";
});

function toggleMenu(){

const menu =
document.getElementById("menu");

const logo =
document.querySelector(".top-img");

menu.classList.toggle("active");

logo.classList.remove("spin");

void logo.offsetWidth;

logo.classList.add("spin");

}