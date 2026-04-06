window.messages = document.getElementById('messages');
window.form = document.getElementById('form');
window.input = document.getElementById('input');

const source = new EventSource('/sse');

source.onmessage = function(event) {
  window.messages.innerHTML += `<p>${event.data}</p>`;
};

window.form.addEventListener('submit', function(event) {
  event.preventDefault();
  fetch(`/chat?message=${encodeURIComponent(window.input.value)}`);
  window.input.value = '';
});