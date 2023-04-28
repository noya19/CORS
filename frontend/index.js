const button = document.querySelector('.btn');
const input = document.querySelector('.inp');

button.addEventListener('click', (e) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value: input.value,
    }),
  };

  fetch('http://localhost:3000/post', options)
    .then((a) => a.text())
    .then((val) => console.log(val));
});
