const text = 'Svi zaslužuju luksuz.';
const heroTextElement = document.getElementById('heroText');
let index = 0;

function typeEffect() {
  if (index < text.length) {
    heroTextElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 30);
  }
}

window.onload = typeEffect;
