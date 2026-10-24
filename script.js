```javascript
const launchDate = new Date("2027-02-01T00:00:00+05:30").getTime();

function updateCountdown() {
    const now = Date.now();
    const remaining = launchDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        console.error("Countdown elements are missing from index.html");
        return;
    }

    if (remaining <= 0) {
        daysEl.textContent = "000";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
    }

    daysEl.textContent = String(
        Math.floor(remaining / 86400000)
    ).padStart(3, "0");

    hoursEl.textContent = String(
        Math.floor((remaining / 3600000) % 24)
    ).padStart(2, "0");

    minutesEl.textContent = String(
        Math.floor((remaining / 60000) % 60)
    ).padStart(2, "0");

    secondsEl.textContent = String(
        Math.floor((remaining / 1000) % 60)
    ).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
```

updateCountdown();

const countdownInterval = setInterval(updateCountdown, 1000);
```
