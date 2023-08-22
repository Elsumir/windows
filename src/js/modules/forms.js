import checkNumInput from './checkNumInput';

export const forms = (state) => {
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');

  checkNumInput('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро с Вами свяжуться!',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    });

    return await res.text();
  };

  const clearInput = () => {
    inputs.forEach((item) => {
      item.value = '';
    });
  };

  form.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);

      const formData = new FormData(item);
      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      const JSONData = Object.fromEntries(formData);

      postData('https://simple-server-cumz.onrender.com/api/data', JSONData)
        .then((res) => {
          statusMessage.textContent = message.success;
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInput();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};
