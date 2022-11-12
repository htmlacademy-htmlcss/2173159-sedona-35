document.querySelector('.modal-close-button').addEventListener('click', () => {
  document.querySelector('.modal-container').classList.add('modal-container-close');
});

document.querySelector('.user-button').addEventListener('click', () => {
  document.querySelector('.modal-container').classList.remove('modal-container-close');
});
