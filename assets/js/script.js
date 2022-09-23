let heads = 0;
let tails = 0;

const updateScoreboard = () => {
  const total = heads + tails;

  const headsPercentage = total > 0 ? Math.round((heads * 100) / total) : 0;
  const tailsPercentage = total > 0 ? Math.round((tails * 100) / total) : 0;
  document.getElementById('heads').textContent = heads;
  document.getElementById('heads-percent').textContent = `${headsPercentage}%`;
  document.getElementById('tails').textContent = tails;
  document.getElementById('tails-percent').textContent = `${tailsPercentage}%`;
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('flip').addEventListener('click', () => {
    const isHeads = Math.random() > 0.5;
    document.getElementById('penny').src = `./assets/images/penny-${
      isHeads ? 'heads' : 'tails'
    }.jpg`;

    if (isHeads) heads++;
    else tails++;

    document.querySelector('.message-container').textContent = `You rolled ${
      isHeads ? 'Heads' : 'Tails'
    }!!`;

    updateScoreboard();
  });

  document.getElementById('clear').addEventListener('click', () => {
    heads = tails = 0;
    updateScoreboard();
  });
});
