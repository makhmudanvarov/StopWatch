// Soatni ishlatish

const secArr = document.querySelector(".s"),
  minArr = document.querySelector(".m"),
  hourArr = document.querySelector(".h");

const hourNum = document.querySelector(".hours"),
  minNum = document.querySelector(".minutes");

function clock() {
  let time = new Date(),
    seconds = time.getSeconds(),
    minutes = time.getMinutes(),
    hours = time.getHours();

  secArr.style.transform = `rotate(${seconds * 6}deg)`;
  minArr.style.transform = `rotate(${minutes * 6}deg)`;
  hourArr.style.transform = `rotate(${hours * 30}deg)`;

  hourNum.innerHTML =
    time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
  minNum.innerHTML =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

  setTimeout(() => {
    clock();
  }, 1000);
}

clock();

// soat dan skundomerga o'tish

const tabsItems = document.querySelectorAll(".tabsItem"),
  tabsContentItem = document.querySelectorAll(".tabsContentItem");

tabsItems.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    tabsItems.forEach((item, j) => {
      item.classList.remove("active");
      tabsContentItem[j].classList.remove("active");
    });
    tabsContentItem[i].classList.add("active");
    tab.classList.add("active");
  });
});

// Sekundomer

const stopBtn = document.querySelector(".stopwatch__btn"),
  stopWatchSec = document.querySelector(".stopwatch__seconds"),
  stopWatchMin = document.querySelector(".stopwatch__minutes"),
  stopWatchHour = document.querySelector(".stopwatch__hours"),
  tabsLink = document.querySelector('.tabsLink__span');

let seconds2 = 0;
let minutes2 = 0;
let hours2 = 0;


stopBtn.addEventListener("click", () => {
  if (stopBtn.innerHTML == "Start") {
    stopBtn.innerHTML = "Stop";
    tabsLink.classList.add("active");
    tabsLink.classList.remove("active_clear");
    countSec();
  } else if (stopBtn.innerHTML == "Stop") {
    stopBtn.innerHTML = "Clear";
    tabsLink.classList.remove("active");
    tabsLink.classList.add("active_clear");
  } else if (stopBtn.innerHTML == "Clear") {
    stopBtn.innerHTML = "Start";

    tabsLink.classList.remove("active");
    tabsLink.classList.remove("active_clear");

    stopWatchHour.innerHTML = 0;
    stopWatchMin.innerHTML = 0;
    stopWatchSec.innerHTML = 0;

    seconds2 = 0;
    minutes2 = 0;
    hours2 = 0;
  }
});


function countSec() {
  if (stopBtn.innerHTML === "Stop") {
    if (seconds2 == 60) {
      seconds2 = 0;
      minutes2++;
      stopWatchMin.innerHTML = minutes2;
    }
    if (minutes2 == 60) {
      minutes2 = 0;
      hours2++;
      stopWatchHour.innerHTML = hours2;
    }

    stopWatchSec.innerHTML = seconds2;
    seconds2++;

    setTimeout(() => {
      countSec();
    }, 1000);
  }
}