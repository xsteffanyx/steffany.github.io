/*music*/

const audioPlayer = document.getElementById('audioPlayer');
const songTitle = document.getElementById('songTitle');

let playlist = [
    "music/Blackbird Blackbird - Hawaii.mp3",
    "music/Blackbird Blackbird - Pure.mp3",
    "music/Mac DeMarco - Rock and Roll Night Club.mp3",
    "music/Summer of Haze - Pussy Juice.mp3",
    "music/Sky Ferreira - Sad Dream.mp3",
    "music/Nasty Cherry - What Do You Like In Me.mp3",
    "music/Lalleshwari - For You I Hold My Breath.mp3",
    "music/bladee, Ecco2k - The Flag is Raised.mp3",
    "music/bladee, Mechatok, Charli XCX - Drama.mp3",
	  "music/Angel Olsen - Only With You.mp3",
	  "music/Charli XCX - i finally understand.mp3",
	  "music/Machine Girl - Ghost (WLFGRL).mp3",
	  "music/Stegosaurus Rex - When I Mean Nothing to You.mp3",
	  "music/Yves Tumor - Strawberry Privilege.mp3",
	  "music/Boy Harsher - LA (Los Angeles).mp3",
];

const shufflePlaylist = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

playlist = shufflePlaylist(playlist);

let currentSongIndex = 0;

const loadSong = (index) => {
    const filePath = playlist[index];
    const decodedPath = decodeURIComponent(filePath);
    const fileName = decodedPath.substring(decodedPath.lastIndexOf('/') + 1, decodedPath.lastIndexOf('.'));
    songTitle.textContent = fileName.replace(/_/g, ' ');
    audioPlayer.querySelector('source').src = filePath;
    audioPlayer.load();
    audioPlayer.play();
};

// document.body.addEventListener('click', () => {
//     if (audioPlayer.paused) {
//         audioPlayer.play();
//     }
// });

audioPlayer.addEventListener('play', () => {
    const filePath = audioPlayer.querySelector('source').src;
    const decodedPath = decodeURIComponent(filePath);
    const fileName = decodedPath.substring(decodedPath.lastIndexOf('/') + 1, decodedPath.lastIndexOf('.'));
    songTitle.textContent = fileName.replace(/_/g, ' ');
});

audioPlayer.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
});

loadSong(currentSongIndex);

/*responsive elements*/

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});


// singlebook
  const pageImages = [
    'css/images/content/fold-processbook1.png',
    'css/images/content/fold-processbook2.png',
    'css/images/content/fold-processbook3.png',
    'css/images/content/fold-processbook4.png',
    'css/images/content/fold-processbook5.png',
    'css/images/content/fold-processbook6.png',
    'css/images/content/fold-processbook7.png',
    'css/images/content/fold-processbook8.png',
    'css/images/content/fold-processbook9.png',
    'css/images/content/fold-processbook10.png',
    'css/images/content/fold-processbook11.png',
    'css/images/content/fold-processbook12.png',
    'css/images/content/fold-processbook13.png',
    'css/images/content/fold-processbook14.png',
    'css/images/content/fold-processbook15.png',
    'css/images/content/fold-processbook16.png',
    'css/images/content/fold-processbook17.png',
    'css/images/content/fold-processbook18.png',
    'css/images/content/fold-processbook19.png',
    'css/images/content/fold-processbook20.png',
    'css/images/content/fold-processbook21.png',
    'css/images/content/fold-processbook22.png',
    'css/images/content/fold-processbook23.png',
    'css/images/content/fold-processbook24.png',
    'css/images/content/fold-processbook25.png',
    'css/images/content/fold-processbook26.png',
    'css/images/content/fold-processbook27.png',
  ];

  let currentPage = 0;

  const imgElement = document.getElementById('singlepage');
  const book = document.getElementById('singlebook');

  function updatePage() {
    imgElement.src = pageImages[currentPage];
  }

  updatePage();

  book.addEventListener('click', (e) => {
    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (x > rect.width / 2 && currentPage < pageImages.length - 1) {
      currentPage++;
    } else if (x <= rect.width / 2 && currentPage > 0) {
      currentPage--;
    }

    updatePage();
  });