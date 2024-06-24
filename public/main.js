function fetchPobeira(){
fetch("http://localhost:3000/pobeiras")
  .then(function (response) {
    return response.json();
  })
  .then(function (pobeira) {
    listPobeira(pobeira);
  })
  .catch(function (error) {
    console.error("Error fetching pobeiras:", error);
  });
}

function listPobeira(pobeira) {
  let container = document.getElementById("pobeira-container");
  container.innerHTML = "";

  for (let i = 0; i < pobeira.length; i++) {
    let pobeiras = pobeira[i];
    let div = document.createElement('div');
    div.className = 'pobeiras';
    div.innerHTML =
'<div class="carousel-item '+ pobeiras.status + '">'+
        '<div class="container-fluid" style="background-color:' + pobeiras.bg + '; background-image: url('+ pobeiras.bgimg +');">' +
          '<div class="row py-5">' +
            '<div class="col-1">' +
              '<h2 class="' + pobeiras.nameclass + '">As Po bei ras</h2>' +
            '</div>' +
            '<div class="col-2 offset-1">' +
              '<img src="' + pobeiras.imagem + '" class="d-block h-100" alt="..."/>' +
            '</div>' +
            '<div class="col-7 mx-6">' +
              '<div class="row">' +
                '<h1 class="' + pobeiras.nameclass + '">' + pobeiras.name + '</h1>' +
              '</div>' +
              '<div class="row">' +
                '<div class="col-5">' +
                  '<h3 class="' + pobeiras.headlinerstyle + '">' + pobeiras.headliner + '</h3>' +
                  '<h3 class="' + pobeiras.headliner2style + ' mb-1">' + pobeiras.headliner2 + '</h3>' +
                  '<button class=" ' + pobeiras.btnleft + ' " type="button" data-bs-target="#carousel" data-bs-slide="prev">' +
                    '<span class="" aria-hidden="true"></span>' +
                    '<span class="visually-hidden">Previous</span>' +
                  '</button>' +
                  '<button class=" ' + pobeiras.btnright + ' " type="button" data-bs-target="#carousel" data-bs-slide="next">' +
                    '<span class="" aria-hidden="true"></span>' +
                    '<span class="visually-hidden">Next</span>' +
                  '</button>' +
                '</div>' +
                '<div class="col mx-5 mt-5" style="margin-top: 7rem !important">' +
                  '<p class="Corpo" style="color: ' + pobeiras.corpostyle + '">' + pobeiras.corpo + '</p>' +
                  '<p class="Corpo" style="color: ' + pobeiras.corpostyle + '">' + pobeiras.corpo2 + '</p>' +
                '</div>' +
              '</div>'+
            '</div>' +
          '</div>' +
        '</div>'+
      '</div>';
    container.appendChild(div);
  }
}

fetchPobeira();