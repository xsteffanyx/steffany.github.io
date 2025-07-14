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
    { type: 'cover', src: 'css/images/content/78days.jpg' },
    { type: 'spread', left: 'css/images/content/78days2.jpg', right: 'css/images/content/78days3.jpg' },
    { type: 'spread', left: 'css/images/content/78days4.jpg', right: 'css/images/content/78days5.jpg' },
    { type: 'spread', left: 'css/images/content/78days6.jpg', right: 'css/images/content/78days7.jpg' },
    { type: 'spread', left: 'css/images/content/78days8.jpg', right: 'css/images/content/78days9.jpg' },
    { type: 'spread', left: 'css/images/content/78days10.jpg', right: 'css/images/content/78days11.jpg' },
    { type: 'spread', left: 'css/images/content/78days12.jpg', right: 'css/images/content/78days13.jpg' },
    { type: 'spread', left: 'css/images/content/78days14.jpg', right: 'css/images/content/78days15.jpg' },
    { type: 'spread', left: 'css/images/content/78days16.jpg', right: 'css/images/content/78days17.jpg' },
    { type: 'spread', left: 'css/images/content/78days18.jpg', right: 'css/images/content/78days19.jpg' },
    { type: 'spread', left: 'css/images/content/78days20.jpg', right: 'css/images/content/78days21.jpg' },
    { type: 'spread', left: 'css/images/content/78days22.jpg', right: 'css/images/content/78days23.jpg' },
    { type: 'spread', left: 'css/images/content/78days24.jpg', right: 'css/images/content/78days25.jpg' },
    { type: 'spread', left: 'css/images/content/78days26.jpg', right: 'css/images/content/78days27.jpg' },
    { type: 'spread', left: 'css/images/content/78days28.jpg', right: 'css/images/content/78days29.jpg' },
    { type: 'spread', left: 'css/images/content/78days30.jpg', right: 'css/images/content/78days31.jpg' },
    { type: 'spread', left: 'css/images/content/78days32.jpg', right: 'css/images/content/78days33.jpg' },
    { type: 'spread', left: 'css/images/content/78days34.jpg', right: 'css/images/content/78days35.jpg' },
    { type: 'spread', left: 'css/images/content/78days36.jpg', right: 'css/images/content/78days37.jpg' },
    { type: 'spread', left: 'css/images/content/78days38.jpg', right: 'css/images/content/78days39.jpg' },
    { type: 'spread', left: 'css/images/content/78days40.jpg', right: 'css/images/content/78days41.jpg' },
    { type: 'spread', left: 'css/images/content/78days42.jpg', right: 'css/images/content/78days43.jpg' },
    { type: 'spread', left: 'css/images/content/78days44.jpg', right: 'css/images/content/78days45.jpg' },
    { type: 'spread', left: 'css/images/content/78days46.jpg', right: 'css/images/content/78days47.jpg' },
    { type: 'spread', left: 'css/images/content/78days48.jpg', right: 'css/images/content/78days49.jpg' },
    { type: 'spread', left: 'css/images/content/78days50.jpg', right: 'css/images/content/78days51.jpg' },
    { type: 'spread', left: 'css/images/content/78days52.jpg', right: 'css/images/content/78days53.jpg' },
    { type: 'spread', left: 'css/images/content/78days54.jpg', right: 'css/images/content/78days55.jpg' },
    { type: 'spread', left: 'css/images/content/78days56.jpg', right: 'css/images/content/78days57.jpg' },
    { type: 'spread', left: 'css/images/content/78days58.jpg', right: 'css/images/content/78days59.jpg' },
    { type: 'spread', left: 'css/images/content/78days60.jpg', right: 'css/images/content/78days61.jpg' },
    { type: 'spread', left: 'css/images/content/78days62.jpg', right: 'css/images/content/78days63.jpg' },
    { type: 'spread', left: 'css/images/content/78days64.jpg', right: 'css/images/content/78days65.jpg' },
    { type: 'spread', left: 'css/images/content/78days66.jpg', right: 'css/images/content/78days67.jpg' },
    { type: 'spread', left: 'css/images/content/78days68.jpg', right: 'css/images/content/78days69.jpg' },
    { type: 'spread', left: 'css/images/content/78days70.jpg', right: 'css/images/content/78days71.jpg' },
    { type: 'spread', left: 'css/images/content/78days72.jpg', right: 'css/images/content/78days73.jpg' },
    { type: 'spread', left: 'css/images/content/78days74.jpg', right: 'css/images/content/78days75.jpg' },
    { type: 'spread', left: 'css/images/content/78days76.jpg', right: 'css/images/content/78days77.jpg' },
    { type: 'spread', left: 'css/images/content/78days78.jpg', right: 'css/images/content/78days79.jpg' },
    { type: 'spread', left: 'css/images/content/78days80.jpg', right: 'css/images/content/78days81.jpg' },
    { type: 'spread', left: 'css/images/content/78days82.jpg', right: 'css/images/content/78days83.jpg' },
    { type: 'back', src: 'css/images/content/78days84.jpg' }
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