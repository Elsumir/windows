export const modals = () => {
  const bindModal = ({
    triggersSelector,
    modalSelector,
    closeSelector,
    closeClickOverlay
  }) => {
    const triggers = document.querySelectorAll(triggersSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();

    const windowsClose = () => {
      windows.forEach((window) => (window.style.display = 'none'));
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }

        windowsClose();

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
      });
    });

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    close.addEventListener('click', () => {
      windowsClose();
      closeModal();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal && closeClickOverlay) {
        windowsClose();
        closeModal();
      }
    });
  };

  const showModalByTime = (selector, time) => {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = '';
    }, time);
  };

  const calcScroll = () => {
    const div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
  };

  bindModal({
    triggersSelector: '.popup_engineer_btn',
    modalSelector: '.popup_engineer',
    closeSelector: '.popup_engineer .popup_close',
    closeClickOverlay: true
  });
  bindModal({
    triggersSelector: '.phone_link',
    modalSelector: '.popup',
    closeSelector: '.popup .popup_close',
    closeClickOverlay: true
  });
  bindModal({
    triggersSelector: '.popup_calc_btn',
    modalSelector: '.popup_calc',
    closeSelector: '.popup_calc_close',
    closeClickOverlay: true
  });
  bindModal({
    triggersSelector: '.popup_calc_button',
    modalSelector: '.popup_calc_profile',
    closeSelector: '.popup_calc_profile_close',
    closeClickOverlay: false
  });
  bindModal({
    triggersSelector: '.popup_calc_profile_button',
    modalSelector: '.popup_calc_end',
    closeSelector: '.popup_calc_end_close',
    closeClickOverlay: false
  });
  showModalByTime('.popup', 60000);
};
