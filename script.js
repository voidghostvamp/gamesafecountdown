```javascript
// GameSafe Launch Countdown
// Launch date: February 1, 2027, 12:00 AM IST

const launchDate = new Date("2027-02-01T00:00:00+05:30").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const countdown = document.querySelector(".countdown");
const launchDateElement = document.querySelector(".launch-date");

function updateCountdown() {
    const now = Date.now();
    const difference = launchDate - now;

    if (difference <= 0) {
        daysElement.textContent = "000";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        countdown.innerHTML = `
            <div class="time-box launch-complete">
                <span>WE'RE LIVE!</span>
            </div>
        `;

        launchDateElement.textContent = "GAME SAFE LAUNCH DAY";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    daysElement.textContent = String(days).padStart(3, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);
```
