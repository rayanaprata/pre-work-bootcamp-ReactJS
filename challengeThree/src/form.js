// Challenge One

const inputName = document.querySelector('[data-js="name"]');

inputName.addEventListener("input", (e) => {
  e.target.value = e.target.value
    .toLowerCase()
    .replace(/(?:^|\s)(?!de|da|do|dos)\S/g, (l) => l.toUpperCase());
});

// Challenge Two

const form = document.querySelector('[data-js="form"]');
const container = document.createElement("div");
const select = document.createElement("select");
const colors = [
  { name: "Celadon", value: "#BAF2BB" },
  { name: "Magic Mint", value: "#BAF2D8" },
  { name: "Beau Blue", value: "#BAD7F2" },
  { name: "Cameo Pink", value: "#F2BAC9" },
  { name: "Dutch White", value: "#F2E2BA" },
];

colors.forEach((color) => {
  const option = document.createElement("option");
  option.value = color.value;
  option.textContent = color.name;
  select.appendChild(option);
});

select.addEventListener("change", (e) => {
  container.innerHTML = "";

  Array.from(e.target.selectedOptions).map((option) => {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = option.value;
    div.className = "colors";
    container.appendChild(div);
  });
});

select.setAttribute("multiple", "");
form.appendChild(select);
document.body.appendChild(container);
