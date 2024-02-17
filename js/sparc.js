const player = document.getElementById('sparc-player');

const musicTitle = document.getElementById('music-title');
const musicArtist = document.getElementById('music-artist');

const ctrPreview = document.getElementById('sparc-control-prev');
const ctrNext = document.getElementById('sparc-control-next');
const ctrPlay = document.getElementById('sparc-control-play');

const progress = document.getElementById('progress');
const progressPosition = document.getElementById('progress-position');

const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');



ctrPlay.addEventListener('click', function() {
    if (player.paused) {
        player.play();
        ctrPlay.innerHTML = '❚❚';
    } else {
        player.pause();
        ctrPlay.innerHTML = '▶';
    }

    console.log(player);

});

ctrPreview.addEventListener('click', function() {
    player.currentTime -= 10;
    if (player.currentTime < 0) {
        player.currentTime = 0;
    }
});

ctrNext.addEventListener('click', function() {
    player.currentTime += 10;
    if (player.currentTime > player.duration) {
        player.currentTime = 0;
    }
});


player.addEventListener('timeupdate', function() {
    progressPosition.style.width = (player.currentTime / player.duration) * 100 + '%';
    currentTime.innerHTML = formatTime(player.currentTime);
    duration.innerHTML = formatTime(player.duration) === 'NaN:NaN' || 'Infinity:NaN' ? 'Live Stream' : formatTime(player.duration);

    if (player.ended) {
        ctrPlay.innerHTML = '▶';
    }

    if (player.currentTime === player.duration) {
        ctrPlay.innerHTML = '▶';
    }
});


function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min}:${sec}`;
}