import "./styles/main.styl";
import Clock from "./Clock.js";

const hourHand = document.querySelector(".clock__hour-hand");
const minuteHand = document.querySelector(".clock__minute-hand");
const secondHand = document.querySelector(".clock__second-hand");

setInterval(setHandsAngles, 1000);


function setHandsAngles() {
    secondHand.style.transform = `rotateZ(${Clock.getSecondHandAngle()}deg)`;
    minuteHand.style.transform = `rotateZ(${Clock.getMinuteHandAngle()}deg)`;
    hourHand.style.transform = `rotateZ(${Clock.getHourHandAngle()}deg)`;
}

setHandsAngles();
