$(document).ready(() => {
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

  function updateOverlay() {
    playbackRate = $("video").get(0).playbackRate;
    volume = $(".ytp-volume-panel").get(0).getAttribute("aria-valuenow");

    overlay.textContent = `${playbackRate}x ${volume}%`;
    $("#movie_player").find(overlay).remove();
    $("#movie_player").append(overlay);
  }

  $("video").on("loadeddata", function () {
    updateOverlay();
  });

  $("video").on("ratechange", function () {
    updateOverlay();
  });

  $("video").on("volumechange", function () {
    updateOverlay();
  });
});
