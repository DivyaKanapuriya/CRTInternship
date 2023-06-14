const container = document.querySelector(".container");
songImg = container.querySelector(".img-area img");
songName = container.querySelector(".song-details .name");
songArtist = container.querySelector(".song-details .artist");
songAudio = container.querySelector("#songAudio");
playPause = container.querySelector(".play-pause");
prevSong = container.querySelector("#prev");
nextSong = container.querySelector("#next");
progBar = container.querySelector("#progressbar");
playIcon = container.querySelector("#playIcon");


let songIndex = 1;

window.addEventListener("load", () => {
    loadMusic(songIndex);
})

function loadMusic(index) {
    songName.innerText = songList[index - 1].songName;
    songArtist.innerText = songList[index - 1].artistName;
    songImg.src = `images/${songList[index - 1].img}.jpg`;
    songAudio.src = `music/${songList[index - 1].src}.mp3`;

}

function playSong() {
    container.classList.add("paused");
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
    songAudio.play();
}
function pauseSong() {
    container.classList.remove("paused");
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    songAudio.pause();
}
function nextMusic() {
    songIndex++;
    songIndex > songList.length ? songIndex = 1 : songIndex = songIndex;
    loadMusic(songIndex);
    playSong();
}

function prevMusic() {
    songIndex--;
    songIndex < 1 ? songIndex = songList.length : songIndex = songIndex;
    loadMusic(songIndex);
    playSong();
}
playPause.addEventListener("click", () => {
    const songPaused = container.classList.contains("paused");
    songPaused ? pauseSong() : playSong();
})

nextSong.addEventListener("click", () => {
    nextMusic();
})

prevSong.addEventListener("click", () => {
    prevMusic()
})
songAudio.onloadedmetadata = function () {
    progBar.max = songAudio.duration;
    progBar.value = songAudio.currentTime;

}
if (songAudio.play()) {
    setInterval(() => {
        progBar.value = songAudio.currentTime;
    }, 500)
}
progBar.onchange = function () {
    songAudio.play();
    songAudio.currentTime = progBar.value;

    playIcon.classList.add("fa-pause");
    playIcon.classList.remove("fa-play");
}