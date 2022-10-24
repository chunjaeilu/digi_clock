setInterval(function () {
  // 시간정보 문서객체(DOM) 선택
  const monthEl = document.getElementById("month");
  const dateEl = document.getElementById("date");
  const hhEl = document.getElementById("hh"); // 웹 문서에서 id가 'hours'인 값을 가져옴
  const mmEl = document.getElementById("mm");
  const ssEl = document.getElementById("ss");
  const dayEl = document.getElementById("day");
  const ampmEl = document.getElementById("ampm");
  // 현재 시간값 구하기
  let d = new Date();
  let month = d.getMonth();
  let date = d.getDate();
  let day = d.getDay();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  month_txt = [
    "January ",
    "February ",
    "March ",
    "April ",
    "May ",
    "June ",
    "July ",
    "August ",
    "September ",
    "October ",
    "November ",
    "December ",
  ];
  day_txt = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  // 숙제 : 시간 값이 1자리일 경우 앞자리에 0을 추가
  if (h >= 13) {
    ampm = "PM";
    h = h - 12;
    if (h < 10) {
      h = "0" + h;
    }
  } else {
    ampm = "AM";
    if (h < 10) {
      h = "0" + h;
    }
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  // 시간 표시하기
  monthEl.innerText = month_txt[month];
  dateEl.innerText = date;
  dayEl.innerText = day_txt[day];
  ampmEl.innerText = ampm;
  hhEl.innerText = h;
  mmEl.innerText = m;
  ssEl.innerText = s;

  // 1분마다 테두리 6도씩 채워주기
  let time_circle = document.getElementById("time_circle");
  time_circle.style.strokeDashoffset = 628 - (628 / 60) * m;
}, 1000);

// 테마색 바꾸기
let i = 0;
let theme_color = ["#51fcf2", "#d895c1", "#8581e0"];
const themeEl = document.querySelector(":root");

function change() {
  i++;
  if (i >= theme_color.length) {
    i = 0;
  }
  document.documentElement.style.setProperty("--theme-color", theme_color[i]);
}
