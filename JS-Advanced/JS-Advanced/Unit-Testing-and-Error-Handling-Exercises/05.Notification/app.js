function notify(message) {
  let notificationElement = document.querySelector('#notification');

  notificationElement.addEventListener('click', (e) => {
    changesStyleDispaly(e);
  });

  notificationElement.textContent = message;
  notificationElement.style.display = 'none';

  if (notificationElement.style.display == 'none') {
    notificationElement.style.display = 'block';
  }

  

  function changesStyleDispaly(event) {
    if (event.currentTarget.style.display === 'block') {
      event.currentTarget.style.display = 'none';
    }

    return;
  }
}