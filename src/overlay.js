let overlay = document.createElement("div");
overlay.style.position = "absolute";
overlay.style.top = "5px";
overlay.style.right = "5px";
overlay.style.fontSize = "16px";
overlay.style.fontWeight = "bold";
overlay.style.color = "white";
overlay.style.textShadow = "1px 1px 1px black";
overlay.style.opacity = "0.5";
overlay.style.zIndex = 9999;

const video = document.querySelector("video");

function updateOverlay() {
  const playbackRate = video.playbackRate;
  const volume = document.querySelector(".ytp-volume-panel").getAttribute("aria-valuenow");
  overlay.textContent = `${playbackRate}x ${volume}%`;
  const moviePlayer = document.querySelector("#movie_player");
  if (!moviePlayer.contains(overlay)) {
    moviePlayer.appendChild(overlay);
  }
}

video.addEventListener("loadeddata", () => {
  updateOverlay();
});

video.addEventListener("ratechange", () => {
  updateOverlay();
});

video.addEventListener("volumechange", () => {
  updateOverlay();
});
