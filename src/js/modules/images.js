export const images = () => {
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.works');
  const bigImg = document.createElement('img');
  const body = document.querySelector('body');

  imgPopup.classList.add('popup');
  workSection.appendChild(imgPopup);

  const closeModal = () => {
    imgPopup.style.display = 'none';
  };

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';

  bigImg.style.width = '60%';
  bigImg.style.height = '70%';

  closeModal();

  imgPopup.appendChild(bigImg);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      body.style.overflow = 'hidden';
      const path = target.getAttribute('src');
      bigImg.setAttribute('src', path);
    }
    if (target && target.matches('div.popup')) {
      closeModal();
      body.style.overflow = 'visible';
    }
  });
};
