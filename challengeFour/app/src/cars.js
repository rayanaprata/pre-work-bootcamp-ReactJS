import { get, post, del } from "./http";

const cars = document.querySelector('[data-js="cars"]');
const carsTable = document.querySelector('[data-js="carsTable"]');
const url = "http://localhost:3333/cars";

const getFormElement = (event) => (elementName) => {
  console.log(event.target.elements[elementName]);
  return event.target.elements[elementName];
};

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor,
};

function createImage(data) {
  const td = document.createElement("td");
  const img = document.createElement("img");
  img.src = data.src;
  img.alt = data.alt;
  img.width = 100;
  td.appendChild(img);
  return td;
}

function createText(value) {
  const td = document.createElement("td");
  td.textContent = value;
  return td;
}

function createColor(value) {
  const td = document.createElement("td");
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = value;
  td.appendChild(div);
  return td;
}

cars.addEventListener("submit", async (e) => {
  e.preventDefault();
  const getElement = getFormElement(e);

  const data = {
    image: getElement("image").value,
    brandModel: getElement("brand-model").value,
    year: getElement("year").value,
    plate: getElement("plate").value,
    color: getElement("color").value,
  };

  const result = await post(url, data);

  if (result.error) {
    console.log("Error when registering", result.message);
    return;
  }

  const noContent = document.querySelector('[data-js="no-content"]');
  if (noContent) {
    carsTable.removeChild(noContent);
  }

  createTableRow(data);

  e.target.reset();
  image.focus();
});

function createTableRow(data) {
  const elements = [
    { type: "image", value: { src: data.image, alt: data.brandModel } },
    { type: "text", value: data.brandModel },
    { type: "text", value: data.year },
    { type: "text", value: data.plate },
    { type: "color", value: data.color },
  ];

  const tr = document.createElement("tr");
  tr.dataset.plate = data.plate;

  elements.forEach((element) => {
    const td = elementTypes[element.type](element.value);
    tr.appendChild(td);
  });

  const button = document.createElement("button");
  button.textContent = "Delete";
  button.dataset.plate = data.plate;

  button.addEventListener("click", handleDelete);

  tr.appendChild(button);

  carsTable.appendChild(tr);
}

async function handleDelete(e) {
  const button = e.target;
  const plate = button.dataset.plate;

  const result = await del(url, { plate });

  if (result.error) {
    console.log("Error deleting", result.message);
    return;
  }

  const tr = document.querySelector(`tr[data-plate="${plate}"]`);
  carsTable.removeChild(tr);
  button.removeEventListener("click", handleDelete);

  const allTrs = carsTable.querySelector("tr");
  if (!allTrs) {
    createNoCarRow();
  }
}

function createNoCarRow() {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const thsLength = document.querySelectorAll("table th").length;
  td.setAttribute("colspan", thsLength);
  td.textContent = "No cars found";

  tr.dataset.js = "no-content";
  tr.appendChild(td);
  carsTable.appendChild(tr);
}

async function main() {
  const result = await get(url);

  if (result.error) {
    console.log("Erro ao buscar carros", result.message);
    return;
  }

  if (result.length === 0) {
    createNoCarRow();
    return;
  }

  result.forEach(createTableRow);
}

main();
