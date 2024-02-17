const player = document.getElementById('sparc-player');
const ctrPreview = document.getElementById('sparc-control-prev');
const ctrNext = document.getElementById('sparc-control-next');
const ctrPlay = document.getElementById('sparc-control-play');

const progress = document.getElementById('progress');
const progressPosition = document.getElementById('progress-position');



ctrPlay.addEventListener('click', function() {
    if (player.paused) {
        player.play();
        ctrPlay.innerHTML = 'Playing...';
    } else {
        player.pause();
        ctrPlay.innerHTML = 'Paused...';
    }
});


player.addEventListener('timeupdate', function() {
    progressPosition.style.width = (player.currentTime / player.duration) * 100 + '%';
});