// Function to update the current day of the week
function updateCurrentDay() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const currentDayElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  currentDayElement.textContent = dayOfWeek;
}

// Function to update the current UTC time
function updateCurrentTime() {
  const currentDate = new Date();
  const utcTime = currentDate.toISOString().slice(11,23);
  const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  currentUTCTimeElement.textContent = utcTime + " UTC";
}

// Call the update functions initially
updateCurrentDay();
updateCurrentTime();

// Update the current day and time every second
setInterval(() => {
  updateCurrentDay();
  updateCurrentTime();
}, 1000);
