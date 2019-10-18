import getBlobDuration from "get-blob-duration";

const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const fullScrnBtn = document.getElementById("jsFullScreen");
const volumeCtrls = document.getElementById("jsVolumeControls");
const volumeBtn = document.getElementById("jsVolumeBtn");
const volumeBar = document.getElementById("jsVolumeBar");
const volumeRange = document.getElementById("jsVolume");
const currentTime = document.getElementById("jsCurrentTime");
const totalTime = document.getElementById("jsTotalTime");

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];
  fetch(`/api/${videoId}/view`, {
    method:"POSt"
  });
};

function handlePlayClick() {
  if (videoPlayer.paused) {
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    videoPlayer.play();
  } else {
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    videoPlayer.pause();
  }
}

function exitFullScreen() {
  fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>';
  fullScrnBtn.addEventListener("click", goFullScreen);
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function goFullScreen() {
  fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>';
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozFullScreenEnabled) {
    videoContainer.mozFullScreenEnabled();
  } else if (videoContainer.msFullScreenEnabled) {
    videoContainer.msFullScreenEnabled();
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen();
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    volumeRange.value = videoPlayer.volume;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    videoPlayer.muted = false;
  } else {
    volumeRange.value = 0;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    videoPlayer.muted = true;
  }
}

function handleVolCtrlsHover() {
  volumeBar.style.opacity = "1";
}

function handleVolCtrlsOut() {
  volumeBar.style.opacity = "0";
  // To Do : When mouse moves out, refresh event listener
  //volumeCtrls.removeEventListener("mouseover", handleVolCtrlsHover);
  //volumeCtrls.removeEventListener("mouseout", handleVolCtrlsOut);
}

function handleVolBtnHover() {
  volumeCtrls.addEventListener("mouseover", handleVolCtrlsHover);
  volumeCtrls.addEventListener("mouseout", handleVolCtrlsOut);
}

const formatData = paramSeconds => {
  const secondsNumber = parseInt(paramSeconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let seconds = Math.floor(secondsNumber - hours * 3600 - minutes * 60);
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

function getCurrentTime() {
  const currentTimeString = formatData(Math.floor(videoPlayer.currentTime));
  currentTime.innerHTML = String(currentTimeString);
}

async function setTotalTime() {
  const duration = await getBlobDuration(videoPlayer.src);
  const totalTimeString = formatData(duration);
  totalTime.innerHTML = String(totalTimeString);
  setInterval(getCurrentTime, 1000);
}

function handleEnded() {
  registerView();
  videoPlayer.currentTime = 0;
  playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function handleDrag() {
  const newVolumeVal = volumeRange.value;
  videoPlayer.volume = newVolumeVal;
  if (newVolumeVal > 0.7) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if (newVolumeVal > 0.3) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else if (newVolumeVal > 0.01) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
  } else {
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

function init() {
  videoPlayer.volume = 0.5;
  volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  volumeBtn.addEventListener("mouseover", handleVolBtnHover);
  fullScrnBtn.addEventListener("click", goFullScreen);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  videoPlayer.addEventListener("ended", handleEnded);
  volumeRange.addEventListener("input", handleDrag);
}

if (videoContainer) {
  init();
}
