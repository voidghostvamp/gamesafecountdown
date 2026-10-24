
const launchDate = new Date("2027-02-01T00:00:00+05:30").getTime();

function updateCountdown() {
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if (!days || !hours || !minutes || !seconds) {
        console.error("Countdown elements missing. Check the IDs in index.html.");
        return;
    }

    const remaining = launchDate - Date.now();

    if (remaining <= 0) {
        days.textContent = "000";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        return;
    }

    const totalSeconds = Math.floor(remaining / 1000);

    days.textContent = String(Math.floor(totalSeconds / 86400)).padStart(3, "0");
    hours.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
    minutes.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    seconds.textContent = String(totalSeconds % 60).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
