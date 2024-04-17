let overlay = document.createElement("div");
overlay.style.position = "absolute";
overlay.style.top = "15px";
overlay.style.right = "15px";
overlay.style.fontSize = "20px";
overlay.style.fontWeight = "bold";
overlay.style.color = "white";
overlay.style.textShadow = "2px 2px 1px black";
overlay.style.zIndex = 9999;

function updateOverlay(video) {
  const playbackRate = video.playbackRate;
  const volume = document.querySelector(".ytp-volume-panel").getAttribute("aria-valuenow");
  overlay.textContent = `${playbackRate}x ${volume}%`;
  const moviePlayer = document.querySelector("#movie_player");
  if (!moviePlayer.contains(overlay)) {
    moviePlayer.appendChild(overlay);
  }
}

const observer = new MutationObserver(() => {
  const video = document.querySelector("video");
  video.addEventListener("loadeddata", () => {
    updateOverlay(video);
  });
  video.addEventListener("ratechange", () => {
    updateOverlay(video);
  });
  video.addEventListener("volumechange", () => {
    updateOverlay(video);
  });
});

observer.observe(document.querySelector("video"), { attributes: true });
