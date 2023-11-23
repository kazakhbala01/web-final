document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('myVideo');
  var playPauseButton = document.getElementById('playPauseButton');
  var fullscreenButton = document.getElementById('fullscreenButton');

  playPauseButton.addEventListener('click', function () {
    if (video.paused) {
      video.play();
      playPauseButton.innerHTML = 'Pause';
    } else {
      video.pause();
      playPauseButton.innerHTML = 'Play';
    }
  });

  fullscreenButton.addEventListener('click', function () {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
      video.msRequestFullscreen();
    }
  });
});
