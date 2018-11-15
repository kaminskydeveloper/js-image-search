const API_URL =
  "https://api.unsplash.com/search/photos/?client_id=5cb163c5a827aa01ffc34e7ffc47ab094674c23fdfc309b70124746c7fe3194d";

const form = document.querySelector("form");
const input = document.querySelector("input");
const loadingImage = document.querySelector("#loadingImage");
const imageSection = document.querySelector(".images");

loadingImage.style.display = "none";

form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  const searchTerm = input.value;

  search(searchTerm).then(displayImages);
}

function search(searchTerm) {
  const url = `${API_URL}&query=${searchTerm}`;
  loadingImage.style.display = "";
  imageSection.innerHTML = "";
  console.log(url);
  return fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      return result.results;
    });
}

function displayImages(images) {
  images.forEach(image => {
    const imageElement = document.createElement("img");
    imageElement.src = image.urls.full;
    imageSection.appendChild(imageElement);
  });
  loadingImage.style.display = "none";
}
