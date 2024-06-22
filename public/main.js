function fetchPobeira(){
fetch("http://localhost:3000/pobeiras")
  .then(function (response) {
    return response.json();
  })
  .then(function (pobeira) {
    listPobeira(pobeira);
  })
  .catch(function (error) {
    console.error("Error fetching news:", error);
  });
}

function listPobeira(pobeira) {
  let container = document.getElementById("pobeira-container");
  container.innerHTML = "";

  for (let i = 0; i < pobeira.length; i++) {
    let pobeiras = pobeira[i];
    let div = document.createElement("div");
    div.className = "carousel-item";
    div.innerHTML =
      '<div class="container-fluid py-1" style="background-color: #FFF7E6; background-image: url(/assets/images/Background-pobeiras.png);">' + '<div class="row my-5 py-5">' + '<div class="col-3">' + '<h2 class="AsPobeirasBeach">As Po bei ras</h2>' + '</div>' +
      '<div class="col">' + '<img src="' + pobeiras.imagem + '" class="d-block h-100" alt="..."/>' + '</div>' + '<div class="col-3 mx-3">' +
        '<h3 class="Pobeiras-banner">'+ pobeiras.headliner + '</h3>' + '<h3 class="Subtitulo_Pobeiras mb-1">' + pobeiras.headliner2 + '</h3>' +
        '<button class="button-svg-left" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">' + '<span class="" aria-hidden="true">' + '</span>' +
          '<span class="visually-hidden">Previous</span>' + '</button>' + '<button class="button-svg-right" type="button" data-bs-target="#carouselExample" data-bs-slide="next">' +
          '<span class="" aria-hidden="true">' + '</span>' + '<span class="visually-hidden">Next</span>' + '</button>' + '</div>' + '<div class="col mx-5 mt-5" style="margin-top: 150px !important">' +
        '<p class="Corpo">' + pobeiras.corpo + '</p>' + '<p class="Corpo">' + pobeiras.corpo2 + '</p>' + '</div>' + '</div>' + '</div>'
    container.appendChild(div);
  }
}

fetchPobeira();