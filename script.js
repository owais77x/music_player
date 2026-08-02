const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const songSlider = document.getElementById("slider-song");
const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");

const songs = [
    {
        image: "resources/south_of_the_border.jpg",
        name: "South Of The Border",
        artist: "Ed Sheeran",
        audio: "resources/south_of_the_border.mp3"
    },
    {
        image: "resources/shape_of_you.jpg",
        name: "Shape Of You",
        artist: "Ed Sheeran",
        audio: "resources/shape_of_you.mp3"
    },
    {
        image: "resources/one_of_the_girls.jpg",
        name: "One Of The Girls",
        artist: "The Weekend",
        audio: "resources/one_of_the_girls.mp3",
    },
    {
        image: "resources/starboy.jpg",
        name: "Starboy",
        artist: "The Weekend",
        audio: "resources/starboy.mp3",
    },
    {
        image: "resources/blinding_lights.jpg",
        name: "Blinding Lights",
        artist: "The Weekend",
        audio: "resources/blinding_lights.mp3",
    },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;
updateSong();

prevSongButton.addEventListener("click", function() {
    if (currentSongIndex == 0) {
        return;
    }
    currentSongIndex--;
    updateSong();
});

nextSongButton.addEventListener("click", function() {
    if (currentSongIndex == songs.length - 1) {
        return;
    }
    currentSongIndex++;
    updateSong();
});

playpauseButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playpauseButton.classList.remove("fa-circle-play");
        playpauseButton.classList.add("fa-circle-pause");
    } else {
        audio.pause();
        playpauseButton.classList.remove("fa-circle-pause");
        playpauseButton.classList.add("fa-circle-play");
    }
});

function updateSong() {
    const song = songs[currentSongIndex];
    songImage.src = song.image;
    songName.innerText = song.name;
    songArtist.innerText = song.artist;
    audio.src = song.audio;
    audio.onloadedmetadata = function() {
        songSlider.value = 0;
        songSlider.max = audio.duration;
    }
}

songSlider.addEventListener("change", function() {
    audio.currentTime = songSlider.value;
});

function moveSlider() {
    songSlider.value = audio.currentTime;
};

setInterval(moveSlider, 1000);