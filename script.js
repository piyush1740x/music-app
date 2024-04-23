var progress = document.getElementById("progress");
var song = document.getElementById("song");

progress.addEventListener("input", function () {
    var value = progress.value;
    var duration = song.duration;

    var currentTime = (value / 100) * duration;
    song.currentTime = currentTime;
});


document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById("song");
    var songList = [
        'songs/siya-ram.mp3', 'songs/baris.mp3', 'songs/chal-hatt.mp3', 'songs/gulabi-sarara.mp3', 'songs/guli-mata.mp3', 'songs/jele.mp3', 'songs/kash.mp3', 'songs/Malang-Sajna.mp3', 'songs/-ki-galiyomeMere-sapno .mp3', 'songs/pahele-bhi-mai.mp3', 'songs/sari-duniya-jaladenge.mp3', 'songs/teri-baton-mei.mp3', 'songs/tu-hai-to.mp3', 'songs/we-haniya.mp3',
    ];
    var currentSongIndex = 0;
    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
            document.getElementById("play").style.display = "none";
            document.getElementById("pause").style.display = "inline-block";
        } else {
            audio.pause();
            document.getElementById("play").style.display = "inline-block";
            document.getElementById("pause").style.display = "none";
        }
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songList.length;
        audio.src = songList[currentSongIndex];
        audio.play();
    }

    function previousSong() {
        currentSongIndex = (currentSongIndex - 1 + songList.length) % songList.length;
        audio.src = songList[currentSongIndex];
        audio.play();
    }

    document.getElementById("play").addEventListener("click", togglePlayPause);
    document.getElementById("pause").addEventListener("click", togglePlayPause);
    document.getElementById("next").addEventListener("click", nextSong);
    document.getElementById("previous").addEventListener("click", previousSong);
});

// Code for login page

let eye = document.getElementById("img");
let password = document.getElementById("password");

eye.addEventListener("click", function () {
    if (password.type == "password") {
        password.type = "text"
    }
    else {
        password.type = "password"
    }
})