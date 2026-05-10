const flowers = ['🌸','🌺','🌹','🌷','💐','🌼'];

function spawnFF(){
  const el = document.createElement('div');

  el.className = 'ff';

  el.textContent =
    flowers[Math.floor(Math.random()*flowers.length)];

  el.style.left = Math.random()*100 + '%';

  el.style.fontSize =
    (13 + Math.random()*14) + 'px';

  const dur = 6 + Math.random()*9;

  el.style.animationDuration = dur + 's';

  el.style.animationDelay =
    (Math.random()*3) + 's';

  document
    .getElementById('floatingFlowers')
    .appendChild(el);

  setTimeout(() => {
    el.remove();
  }, (dur + 4) * 1000);
}

for(let i = 0; i < 18; i++) {
  setTimeout(spawnFF, i * 120);
}

setInterval(spawnFF, 280);

const confColors = [
  '#b03060',
  '#ffb8d0',
  '#e0406a',
  '#fde0ea',
  '#7d1f43',
  '#ff8fb0',
  '#ffd0e0'
];

function boom(x, y){

  const burst =
    document.getElementById('burst');

  burst.style.left = x + 'px';
  burst.style.top = y + 'px';

  burst.style.display = 'block';

  setTimeout(() => {
    burst.style.display = 'none';
  }, 700);

  const scene =
    document.getElementById('scene');

  for(let i = 0; i < 36; i++){

    const c = document.createElement('div');

    c.className = 'confetti-p';

    const size = 5 + Math.random()*8;

    c.style.width = size + 'px';
    c.style.height = size + 'px';

    c.style.background =
      confColors[
        Math.floor(Math.random()*confColors.length)
      ];

    c.style.left =
      (x + (Math.random()-0.5)*180) + 'px';

    c.style.top =
      (y + (Math.random()-0.5)*80) + 'px';

    c.style.animationDuration =
      (0.8 + Math.random()*0.8) + 's';

    c.style.animationDelay =
      (Math.random()*0.25) + 's';

    c.style.borderRadius =
      Math.random() > 0.4 ? '50%' : '2px';

    scene.appendChild(c);

    setTimeout(() => {
      c.remove();
    }, 2500);
  }
}

function openGift(){

  document
    .getElementById('lid')
    .classList.add('open');

  const gr =
    document
      .getElementById('gift')
      .getBoundingClientRect();

  const sr =
    document
      .getElementById('scene')
      .getBoundingClientRect();

  setTimeout(() => {

    boom(
      gr.left - sr.left + gr.width/2,
      gr.top - sr.top + gr.height/2
    );

  }, 280);

  setTimeout(() => {

    document
      .getElementById('stageGift')
      .style.display = 'none';

    document
      .getElementById('stageMsg')
      .style.display = 'flex';

  }, 750);
}

function replay(){

  document
    .getElementById('lid')
    .classList.remove('open');

  document
    .getElementById('stageMsg')
    .style.display = 'none';

  document
    .getElementById('stageGift')
    .style.display = 'flex';
}

const gift = document.getElementById('gift');

gift.addEventListener('click', openGift);

gift.addEventListener(
  'touchstart',
  function(){},
  { passive:true }
);