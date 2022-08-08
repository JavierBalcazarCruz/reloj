const hora = document.getElementById("hora");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");
const am_pm = document.getElementById("ampm");

debugger;
function reloj() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hora.innerText = h;
  minutos.innerText = m;
  segundos.innerText = s;
  am_pm.innerText = ampm;

  setTimeout(() => {
    reloj();
  }, 1000);
}

reloj();
