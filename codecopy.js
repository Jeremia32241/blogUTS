const copyButton = document.querySelector('.copy-button');
const notification = document.getElementById('notification');

copyButton.addEventListener('click', () => {
  // Copy the code to the clipboard
  const code = document.querySelector('.code-block').textContent;
  navigator.clipboard.writeText(code)
    .then(() => {
      // Show the notification
      notification.classList.add('show');
      // Hide the notification after 2 seconds
      setTimeout(() => {
        notification.classList.remove('show');
      }, 2000);
    })
    .catch(err => {
      console.error('Error copying text:', err);
    });
});