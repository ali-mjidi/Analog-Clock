function clockEngine() {
    const time = new Date();
    const secondDegree = (time.getSeconds() / 60) * 360;
    const minuteDegree = (time.getMinutes() / 60) * 360;
    const hourDegree = (time.getHours() / 12) * 360;

    secondHand.style.rotate = `${secondDegree}deg`;
    minuteHand.style.rotate = `${minuteDegree}deg`;
    hourHand.style.rotate = `${hourDegree}deg`;
}

const secondHand = document.querySelector(".secondHand");
const minuteHand = document.querySelector(".minuteHand");
const hourHand = document.querySelector(".hourHand");

const switchBtn = document.querySelector(".switch");
const body = document.querySelector("body");

clockEngine();
setInterval(clockEngine, 1000);

switchBtn.addEventListener("click", function () {
    body.classList.toggle("light");

    const classCheck = body.classList.contains("light");
    if (classCheck) {
        switchBtn.textContent = "Dark Mode";
        switchBtn.style.backgroundColor = "#282828";
        switchBtn.style.color = "aliceblue";
    } else {
        switchBtn.textContent = "Light Mode";
        switchBtn.style.backgroundColor = "aliceblue";
        switchBtn.style.color = "#282828";
    }
});