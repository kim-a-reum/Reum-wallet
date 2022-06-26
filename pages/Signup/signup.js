const check = () => {
  const phone1 = document.getElementById("phone1").value;
  const phone2 = document.getElementById("phone2").value;
  const phone3 = document.getElementById("phone3").value;

  if (phone1 !== "" && phone2 !== "" && phone3 !== "") {
    document.getElementById("button").disabled = false;
  }

  if (phone1.length === 3) {
    document.getElementById("phone2").focus();
  }
  if (phone2.length === 4) {
    document.getElementById("phone3").focus();
  }
};

const number = () => {
  //   document.getElementById("button2").setAttribute("disabled", "false");
  document.getElementById("button2").disabled = false;
  timer();
  const random = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("number").innerText = random;
};

let interval;
function timer() {
  let timer = 10;
  interval = setInterval(() => {
    console.log("interval");
    if (timer >= 0) {
      const min = Math.floor(timer / 60);
      const sec = timer % 60;

      document.getElementById("time").innerText =
        min + ":" + String(sec).padStart(2, "0");
      timer -= 1;
    } else {
      document.getElementById("number").innerText = "000000";
      document.getElementById("button").setAttribute("disabled", "true");

      document.getElementById("time").innerText = "3:00";
      document.getElementById("button2").setAttribute("disabled", "true");

      clearInterval(interval);
    }
  }, 1000);
}
