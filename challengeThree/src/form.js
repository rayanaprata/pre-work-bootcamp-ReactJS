const inputName = document.querySelector('[data-js="name"]');

inputName.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .toLowerCase()
    .replace(/(?:^|\s)(?!de|da|do|dos)\S/g, (l) => l.toUpperCase());
});
