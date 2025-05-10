import { uiElements } from "./ui-elements.js";

document.querySelectorAll('.titlebar > ul > li').forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
      const isVisible = dropdown.style.display === 'block';
      document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
      dropdown.style.display = isVisible ? 'none' : 'block';
    }
  });
});


document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
});

async function showModal(modalHeader, modalContent, modalImage) {
  const header = document.getElementById('modalHeader');
  const content = document.getElementById('modalInner');
  const image = document.getElementById('modalImg');
  const dialog = document.getElementById('modalDialog');
  const close = document.getElementById('closeDialog');
  header.innerText = modalHeader;
  content.innerHTML = modalContent;
  if (modalImage) {
    image.style.display = 'block';
    image.src = modalImage || '';
  } else {
    image.style.display = 'none';
  }

  dialog.style.display = 'flex';
  dialog.showModal();

  close.addEventListener('click', () => {
    dialog.style.display = 'none';
    dialog.close();
  });
};

uiElements.aboutVGPPBtn.addEventListener('click', async () => {
  const modalHeader = 'Sobre o VisualG++';
  const modalContent = `
    <p>VisualG++ é um software para o ensino de algoritimos sendo uma versão melhorada do VisualG.</p>
    <p>Por Lucas Gabriel (lucmsilva)</p>
    <p>GitHub: <a href="https://github.com/visualgpp-app/visualgpp" target="_blank">github.com/visualgpp-app/visualgpp</a></p>
    <p>Site: <a href="https://visualgpp-app.github.io/" target="_blank">visualgpp-app.github.io</a></p>
  `
  const modalImage = 'icons/png/128x128.png';

  showModal(modalHeader, modalContent, modalImage);
});

uiElements.aboutVGOBtn.addEventListener('click', async () => {
  const modalHeader = 'Sobre o VisualG (original)';
  const modalContent = `
    <p>O VisualG é um editor e interpretador de algorítimos escritos em Portugol (PORTUguês, ALGOL e PascaL).</p>
    <p>Foi feito em Delphi, desenvolvido originalmente por Cláudio Morgado de Souza, sendo atualmente mantido por Antonio Carlos Nicolodi.</p>
    <p>SourceForge: <a href="https://sourceforge.net/projects/visualg30" target="_blank">sourceforge.net/projects/visualg30</a></p>
    <p>Site (desativado): <a href="https://visualg3.com.br" target="_blank">visualg3.com.br</a></p>
  `
  const modalImage = undefined;

  showModal(modalHeader, modalContent, modalImage);
});

uiElements.settingsBtn.addEventListener('click', async () => {
  const modalHeader = 'Configurações';
  const modalContent = `
    <p>config</p>
  `
  const modalImage = undefined;

  showModal(modalHeader, modalContent, modalImage);
});