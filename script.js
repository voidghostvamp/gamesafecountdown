const launchDate = new Date("2027-02-01T00:00:00+05:30").getTime();

function updateCountdown() {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        console.error("Countdown IDs do not match index.html");
        return;
    }

    const remaining = launchDate - Date.now();

    if (remaining <= 0) {
        daysEl.textContent = "000";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
    }

    daysEl.textContent = Math.floor(remaining / 86400000)
        .toString().padStart(3, "0");

    hoursEl.textContent = Math.floor(remaining / 3600000 % 24)
        .toString().padStart(2, "0");

    minutesEl.textContent = Math.floor(remaining / 60000 % 60)
        .toString().padStart(2, "0");

    secondsEl.textContent = Math.floor(remaining / 1000 % 60)
        .toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
```
