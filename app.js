function updateCurrentTime() {
  const startTime = new Date().getTime();
  const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  function updateElapsedTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    currentUTCTimeElement.textContent = elapsedTime;
  }
  setInterval(updateElapsedTime, 1000);
}
updateCurrentTime();
