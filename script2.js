window.addEventListener('scroll', () => {
    const textArt = document.getElementById('text-art');
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    
    const opacity = 1 - scrollY / maxScroll;
    textArt.style.opacity = opacity;
  
    if (scrollY >= maxScroll) {
      textArt.classList.add('fade-out');
    } else {
      textArt.classList.remove('fade-out');
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    var fadeIns = document.querySelectorAll('.fade-in');
    var lastScrollTop = 0;

    function checkFadeIns() {
        var triggerBottom = window.innerHeight * 0.8;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        fadeIns.forEach(function(fadeIn) {
            var boxTop = fadeIn.getBoundingClientRect().top;

            if (boxTop < triggerBottom && scrollTop > lastScrollTop) {
                fadeIn.classList.add('visible');
            } else if (scrollTop < lastScrollTop || boxTop >= triggerBottom) {
                fadeIn.classList.remove('visible');
            }
        });

        lastScrollTop = scrollTop;
    }

    window.addEventListener('scroll', checkFadeIns);
    checkFadeIns();
});

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
  const spreads = Array.from(flipbook.querySelectorAll('.spread'));
  let current = 0;

  function updateState() {
    spreads.forEach((spread, i) => {
      const left = spread.querySelector('.left');
      const right = spread.querySelector('.right');

      // Hide all spreads after current
      if (i > current) {
        spread.classList.add('hidden');
        spread.classList.remove('flipped');
      } else {
        spread.classList.remove('hidden');
      }

      // Flip all previous spreads
      if (i < current) {
        spread.classList.add('flipped');
      } else if (i === current) {
        spread.classList.remove('flipped');
      }

      // Hide left page on front cover
      if (i === 0 && left) {
        left.style.visibility = current === 0 ? 'hidden' : 'visible';
      }

      // Hide right page on back cover
      if (i === spreads.length - 1 && right) {
        right.style.visibility = current === spreads.length - 1 ? 'hidden' : 'visible';
      }

      // Ensure z-index layering works front to back
      spread.style.zIndex = spreads.length - i;
    });
  }

  updateState();

  flipbook.addEventListener('click', (e) => {
    const rect = flipbook.getBoundingClientRect();
    const x = e.clientX - rect.left;

    // Flip forward
    if (x > rect.width / 2 && current < spreads.length - 1) {
      current++;
    }
    // Flip backward
    else if (x <= rect.width / 2 && current > 0) {
      current--;
    }

    updateState();
  });