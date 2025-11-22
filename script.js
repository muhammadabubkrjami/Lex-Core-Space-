// Matrix Animation
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const chars = "01<>[]{}#@*&$";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({length: columns}, () => 1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0,0,canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, x) => {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, x*fontSize, y*fontSize);
    drops[x] = (y*fontSize > canvas.height && Math.random() > 0.975) ? 0 : y+1;
  });
}
setInterval(drawMatrix, 40);
window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

// Open placeholder links
function openLink(url) { window.open(url,'_blank'); }

// Modal functions
function openModal(id) {
  document.getElementById(id).style.display = "block";
}
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}
window.onclick = function(event) {
  ['aboutModal','contactModal','privacyModal'].forEach(id=>{
    let modal = document.getElementById(id);
    if(event.target == modal) modal.style.display = "none";
  });
}
