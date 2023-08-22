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
  closeModal();

  imgPopup.appendChild(bigImg);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  workSection.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      body.style.overflow = 'hidden';
      const path = target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
    }
    if (target && target.matches('div.popup')) {
      closeModal();
      body.style.overflow = 'visible';
    }
  });
};
