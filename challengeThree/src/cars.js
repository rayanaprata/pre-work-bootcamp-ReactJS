const cars = document.querySelector('[data-js="cars"]');
const carsTable = document.querySelector('[data-js="carsTable"]');
const inputURL = document.querySelector('[data-js="urlImg"]');

cars.addEventListener("submit", (e) => {
  e.preventDefault();

  const urlImage = document.createElement("td");
  urlImage.innerHTML = String(e.target.elements.urlImg.value);

  const modelCar = document.createElement("td");
  modelCar.innerHTML = String(e.target.elements.brand.value);

  const yearCar = document.createElement("td");
  yearCar.innerHTML = String(e.target.elements.year.value);

  const plateCar = document.createElement("td");
  plateCar.innerHTML = String(e.target.elements.plate.value);

  const colorCar = document.createElement("td");
  colorCar.innerHTML = String(e.target.elements.color.value);

  const newCarLine = document.createElement("tr");
  newCarLine.setAttribute("data-js", "newCar");
  carsTable.appendChild(newCarLine);
  const newCar = document.querySelector('[data-js="newCar"]:last-child');

  newCar.appendChild(urlImage);
  newCar.appendChild(modelCar);
  newCar.appendChild(yearCar);
  newCar.appendChild(plateCar);
  newCar.appendChild(colorCar);

  cars.reset();
  inputURL.focus();
});
