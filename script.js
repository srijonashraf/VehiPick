const carNames = [
  "BMW",
  "AUDI",
  "Mercedes",
  "TOYOTA",
  "MITSUBISHI",
  "TESLA",
  "NOAH",
  "MAZDA",
  "PREMIO",
  "ALLEON",
  "HUNDAI",
];

const carImages = [
  "img/Car-1.jpg",
  "img/Car-2.jpg",
  "img/Car-3.jpg",
  "img/Car-4.jpg",
  "img/Car-5.jpg",
  "img/Car-6.jpg",
  "img/Car-7.jpg",
  "img/Car-8.jpg",
  "img/Car-9.jpg",
  "img/Car-10.jpg",
  "img/Car-11.jpg",
];

function showImage() {
  document.getElementById("car-image").style.display = "block";
}

function getRandomNumber() {
  return Math.floor(Math.random() * 11);
}

function generateCar() {
  const username = prompt("Hello, What's your name?");

  if (!username) {
    alert("Please enter a name!");
    return;
  }

  const upperCaseName = username.toUpperCase();
  const randomCarIndex = getRandomNumber();

  const resultElement = document.getElementById("result");
  const carImageElement = document.getElementById("car-image");

  resultElement.innerHTML = `Hello ${upperCaseName}!<br>You won a ${carNames[randomCarIndex]}!`;

  carImageElement.src = carImages[randomCarIndex];
}

generateCar();
