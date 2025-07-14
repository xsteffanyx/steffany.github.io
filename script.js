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


/*pop ups*/

function openPopup(id) {
    const popup = document.getElementById(id);
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const popupWidth = popup.offsetWidth;
    const popupHeight = popup.offsetHeight;

    const randomX = Math.random() * (viewportWidth - popupWidth);
    const randomY = Math.random() * (viewportHeight - popupHeight);

    popup.style.display = 'block';
    popup.style.left = randomX + 'px';
    popup.style.top = randomY + 'px';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

document.querySelectorAll('.popup-header').forEach(header => {
    header.addEventListener('mousedown', function (e) {
        e.preventDefault(); // Prevent default behavior like text selection
        const popup = header.parentElement;
        let shiftX = e.clientX - popup.getBoundingClientRect().left;
        let shiftY = e.clientY - popup.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            popup.style.left = pageX - shiftX + 'px';
            popup.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', onMouseMove);
            popup.onmouseup = null;
        }, { once: true });

        popup.ondragstart = function () {
            return false;
        };
    });
});


/*responsive elements*/

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});