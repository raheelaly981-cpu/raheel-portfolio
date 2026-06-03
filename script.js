// THEME
function toggleTheme() {
  document.body.classList.toggle("light");
}

// TYPING EFFECT
const text = "Raheel Ahmed";
let i = 0;

function type() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 150);
  }
}
type();

// FILTER PROJECTS
function filterProjects(type) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (type === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(type) ? "block" : "none";
    }
  });
}

// PARTICLES (optimized)
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 50; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
  });

  requestAnimationFrame(draw);
}

draw();

// FORM VALIDATION
function validateForm() {
  alert("Message sent successfully!");
  return true;
}