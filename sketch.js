const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe'); // Adiciona essa linha para selecionar o elemento do cano

const jump = () => {
  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
};

document.addEventListener('keydown', jump);

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft; // Corrige a variável pipePosition
  const marioPosition = parseInt(window.getComputedStyle(mario).bottom.replace('px', '')); // Corrige a função window.getComputedStyle e define a propriedade bottom
  
  if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none'; // Corrige a propriedade de estilo
    pipe.style.left = `${pipePosition}px`; // Corrige a interpolação de string
  }
}, 10);

document.addEventListener('keydown', jump); // Remove essa linha se não for necessária
