let overlay = document.createElement("div");
overlay.style.position = "absolute";
overlay.style.top = "3rem";
overlay.style.right = "2rem";
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

const videoObserver = new MutationObserver(() => {
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

if (document.querySelector("video")) {
  videoObserver.observe(document.querySelector("video"), { attributes: true });
}

let previousUrl = location;
const urlObserver = new MutationObserver(() => {
  if (location.href !== previousUrl) {
    previousUrl = location.href;
    const video = document.querySelector("video");
    if (video) {
      updateOverlay(video);
    }
  }
});
urlObserver.observe(document, { attributes: true, subtree: true });
