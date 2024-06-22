//F09 - Usar a biblioteca que já vem no JS para usar o fetch API para ir buscar informação
// ////////////////////////////////////////////////////////////////////////////////////////////////

function fetchArtist() {
    fetch('http://localhost:3000/artists') //direcionado ao url
        .then(function(response) {
            return response.json(); //linhas obrigatórias 
    })
        .then(function(artist) {
            listArtist(artist); //updateartistList é uma função que foi criada em baixo (?)
    })
        .catch(function(error) {
            console.error('Error', error)
    });
}
//função que dá display na página

    function listArtist(artist) {
        let container = document.getElementById('artist-container')

        for (let i = 0; i < artist.length; i++) { //Criamos um loop para criar um artista mais o género por .length ou seja um a um
            let artists = artist[i]
            let div = document.createElement('div')

        div.className = 'artist-container' // aplicar na página como id = "artist-container"
        div.innerHTML = //está a inserir html na div
            '<h2>' + artists.name + '</h2>' + '<h3>' + artists.genre + '</h3>'  //se houvesse uma imagem criaria na lista de objetos um elemento "url: 'Path/Image/image.jpeg'" e faria <img> + artist.url + </img>
            container.appendChild(div)
        }
    };

   function fetchAlbum() {
        fetch('http://localhost:3000/albums') //direcionado ao url
            .then(function(response) {
                return response.json(); //linhas obrigatórias 
        })
            .then(function(album) {
                listAlbum(album); //updateartistList é uma função que foi criada em baixo (?)
        })
            .catch(function(error) {
                console.error('Error', error)
        });
    };
    //função que dá display na página
    
    function listAlbum(album) {
        let container = document.getElementById('album-container')
    //    container.innerHTML = '' //isto apaga o que conteúdo existente (e preenche com o novo?)

        for (let i = 0; i < album.length; i++) { //Criamos um loop para criar um artista mais o género por .length ou seja um a um
            let albums = album[i]
            let div = document.createElement('div')

        div.className = 'album-container' // aplicar na página como id = "artist-container"
        div.innerHTML = //está a inserir html na div
            '<h2>' + albums.name + '</h2>' + '<h3>' + albums.genre + '</h3>'  //se houvesse uma imagem criaria na lista de objetos um elemento "url: 'Path/Image/image.jpeg'" e faria <img> + artist.url + </img>
            container.appendChild(div)
        }
    };


   fetchAlbum();
   fetchArtist();
  

