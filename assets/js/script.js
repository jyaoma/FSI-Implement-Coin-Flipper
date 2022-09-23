const headsImage = './assets/images/penny-heads.jpg';
const tailsImage = './assets/images/penny-tails.jpg';

let heads = 0;
let tails = 0;

const updateScoreboard = () => {
  const total = heads + tails;

  const headsPercentage = total > 0 ? heads / total : 0;
  const tailsPercentage = total > 0 ? tails / total : 0;
  document.getElementById('heads').textContent = heads;
  document.getElementById('heads-percent').textContent = `${Math.round(
    headsPercentage * 100
  )}%`;
  document.getElementById('tails').textContent = tails;
  document.getElementById('tails-percent').textContent = `${Math.round(
    tailsPercentage * 100
  )}%`;
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('flip').addEventListener('click', () => {
    const isHeads = Math.random() > 0.5;
    document.getElementById('penny-image').src = isHeads
      ? headsImage
      : tailsImage;

    if (isHeads) heads++;
    else tails++;

    document.querySelector('.message-container').textContent = `You rolled ${
      isHeads ? 'Heads' : 'Tails'
    }!!`;

    updateScoreboard();
  });

  document.getElementById('clear').addEventListener('click', () => {
    heads = 0;
    tails = 0;
    updateScoreboard();
  });
});
