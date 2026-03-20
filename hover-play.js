document.querySelectorAll(".hover-play-item").forEach((item) => {
  const video = item.querySelector(".hover-play-video");
  if (!video) return;

  const play = () => {
    item.classList.add("is-playing");
    video.currentTime = 0;
    const promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(() => {
        item.classList.remove("is-playing");
      });
    }
  };

  const stop = () => {
    video.pause();
    video.currentTime = 0;
    item.classList.remove("is-playing");
  };

  item.addEventListener("mouseenter", play);
  item.addEventListener("mouseleave", stop);
  item.addEventListener("focusin", play);
  item.addEventListener("focusout", stop);
  item.addEventListener("touchstart", play, { passive: true });
  item.addEventListener("touchend", stop);
});
