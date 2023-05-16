

fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=love")
.then(response => response.json())
.then(data => {
  const array = data.data;
  const container = document.getElementById('album-container');
  const containerArtist = document.getElementById('artist-container');
  let cardArtist=""
  let card = "";

  for (let i = 0; i < array.length; i++) {
    const album = array[i].album;
    const albumTitle = album.title;
    const albumCover = album.cover_medium;

  //   link musicali
    const musicLink = array[i].preview;
    const musicPlayer = document.getElementById('music-player');
      musicPlayer.src = musicLink;
      console.log(musicLink)
    
    
    
card += `
    <div class="card album-sfondo text-white m-4 text-center" style="width: 18rem;">
      <img src="${albumCover}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${albumTitle}</h5>
        <button class="bottone-play bg-success play-btn" data-music-link="${musicLink}"><i class="bi bi-play-fill icona-play"></i></button>
      </div>
    </div>`
container.innerHTML= card;

    const artist = array[i].artist;
    const artistName = artist.name;
    const artistPicture = artist.picture_medium;
    cardArtist +=`<div class="card text-center m-2 bg-dark text-white cardArtist col-3 h-100  text-truncate">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${artistPicture}" class="img-fluid rounded-start" style="object-fit: cover;" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <p class="card-title">${artistName}</p>
      <button class="bottone-play bg-success play-btn mx-5" data-music-link="${musicLink}"><i class="bi bi-play-fill icona-play"></i></button>
    </div>
  </div>
</div>
</div>`


containerArtist.innerHTML=cardArtist;

//   Collego il bottone al player musicale
   const playButtons = document.querySelectorAll('.play-btn');
   playButtons.forEach(button => {
     button.addEventListener('click', () => {
       const musicLink = button.dataset.musicLink;
       playMusic(musicLink);
      });
  });
// funzione per far partire la musica
       function playMusic(musicLink) {
          const musicPlayer = document.getElementById('music-player');
          musicPlayer.src = musicLink;
          musicPlayer.load();
          musicPlayer.play();}
          
    console.log(albumTitle, albumCover);

  }
  
})
.catch(error => {
  console.error('Si è verificato un errore:', error);
});




//   array playlist finte
const playlistNames = [
  "Be The Young Seasons 1-5",
  "Be The Young Seasons 6-8",
  "persona di m*rda (gen-feb 2023)",
  "Musical 2022",
  "pippo, pluto e paperino (nov-dec 2022)",
  "early stage emily syndrome (sett-ott 2022)",
  "Be the young",
  "'...' cit. Kimiko (lug-ago 2022)",
  "saggio vibes 💃🩰",
  "main character energy (mag-giu 2022)",
  "that fucking mood 🔪☠️",
  "VEE, CARLOTTA E GIACOMO VANNO A BOSIO",
  "An Emily Winchester kind of mood 🔪🖕",
  "landing page (mar-apr 2022)",
  "2021 lol",
  "cosa cazzo vuol dire questa affermazione (gen-feb 2022)",
  "honey and glass (nov-dic 2021)",
  "(Revenge) Training Arc 🦍",
  "Lidia 🤝 Emily",
  "minecraft e nintendo switch (sep-oct 2021)",
  "silvano d'orba? I hardly know her (lug - ago 2021)",
  "Culo 2021",
  "Frah Quintale Mix",
  "Francesco Guccini Mix",
  "Lo Stato Sociale Mix",
  "chapter 4/? (mag-giu 2021)",
  "Strive School <> The Hunt Motivation",
  "mi stavo dimenticando (mar-apr 2021)",
  "high school musical 1,2,3",
  "quanto trash cazzo",
  "The 2020 Playlist",
  "ma(ncanza) che cazzo ne so io (gen-feb 2021)",
];


for (let i = 0; i < playlistNames.length; i++) {
const element = playlistNames[i];
console.log(element)


const playlistItem = document.createElement("p");
playlistItem.classList.add("playlist");
playlistItem.textContent = element;
const playlistContainer=document.getElementById("playlist")
playlistContainer.appendChild(playlistItem);

}




     



