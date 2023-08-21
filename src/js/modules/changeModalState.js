import checkNumInput from './checkNumInput';

export const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInput('#width');
  checkNumInput('#height');

  const bindActionToElems = ({ event, elements, prop }) => {
    elements.forEach((element, i) => {
      element.addEventListener(event, () => {
        switch (element.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case 'INPUT':
            if (element.getAttribute('type') === 'checkbox') {
              i === 0 ? (state[prop] = 'Холодное') : (state[prop] = 'Теплое');
              elements.forEach((box, j) => {
                box.checked = false;
                if (i == j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = element.value;
            }
            break;
          case 'SELECT':
            state[prop] = element.value;
            break;
        }
      });
    });
  };

  bindActionToElems({
    event: 'click',
    elements: windowForm,
    prop: 'form'
  });
  bindActionToElems({
    event: 'input',
    elements: windowHeight,
    prop: 'height'
  });
  bindActionToElems({
    event: 'input',
    elements: windowWidth,
    prop: 'width'
  });
  bindActionToElems({
    event: 'change',
    elements: windowType,
    prop: 'type'
  });
  bindActionToElems({
    event: 'change',
    elements: windowProfile,
    prop: 'profile'
  });
};
