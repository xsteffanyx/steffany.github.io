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




// flipbook
 const flipbook = document.getElementById('flipbook');

  const pages = [
    { type: 'cover', src: 'css/images/content/ediitorialbooklet.jpg' },
    { type: 'spread', left: 'css/images/content/ediitorialbooklet2.jpg', right: 'css/images/content/ediitorialbooklet3.jpg' },
    { type: 'spread', left: 'css/images/content/ediitorialbooklet4.jpg', right: 'css/images/content/ediitorialbooklet5.jpg' },
    { type: 'spread', left: 'css/images/content/ediitorialbooklet6.jpg', right: 'css/images/content/ediitorialbooklet7.jpg' },
    { type: 'spread', left: 'css/images/content/ediitorialbooklet8.jpg', right: 'css/images/content/ediitorialbooklet9.jpg' },
    { type: 'spread', left: 'css/images/content/ediitorialbooklet10.jpg', right: 'css/images/content/ediitorialbooklet11.jpg' },
    { type: 'spread', left: 'css/images/content/ediitorialbooklet12.jpg', right: 'css/images/content/ediitorialbooklet13.jpg' },
    { type: 'back', src: 'css/images/content/ediitorialbooklet14.jpg' }
  ];

  let current = 0;

  function renderSpread() {
    const page = pages[current];
    flipbook.innerHTML = '';

    const spread = document.createElement('div');
    spread.className = 'spread';

    const left = document.createElement('div');
    left.className = 'page left';
    const right = document.createElement('div');
    right.className = 'page right';

    if (page.type === 'cover') {
      left.classList.add('hidden');
      right.innerHTML = `<img src="${page.src}" alt="Front Cover">`;
    } else if (page.type === 'spread') {
      left.innerHTML = `<img src="${page.left}" alt="Left Page">`;
      right.innerHTML = `<img src="${page.right}" alt="Right Page">`;
    } else if (page.type === 'back') {
      left.innerHTML = `<img src="${page.src}" alt="Back Cover">`;
      right.classList.add('hidden');
    }

    spread.appendChild(left);
    spread.appendChild(right);
    flipbook.appendChild(spread);
  }

  renderSpread();

  flipbook.addEventListener('click', (e) => {
    const rect = flipbook.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (x > rect.width / 2 && current < pages.length - 1) {
      current++;
    } else if (x <= rect.width / 2 && current > 0) {
      current--;
    }

    renderSpread();
  });