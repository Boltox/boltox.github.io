let sections = document.getElementsByTagName('section');
// tracks index of current section
let currentSectionIndex = 0;

document.addEventListener('wheel', e => {
  if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
    // wheel up
    sections[currentSectionIndex].className = '';
    currentSectionIndex--;
    sections[currentSectionIndex].className = 'active';
  } else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
    // wheel down
    sections[currentSectionIndex].className = '';
    currentSectionIndex++;
    sections[currentSectionIndex].className = 'active';
  }
});

function onClickLolWorlds() {
  url = 'https://lol.fandom.com/wiki/2023_Season_World_Championship/Main_Event';
  window.open(url);
}
function onClickLolT1() {
  url = 'https://lol.fandom.com/wiki/T1';
  window.open(url);
}
