document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.getElementById("ans1").addEventListener(
      "click",
      function () {
        location.replace("http://127.0.0.1:5500/2024hack/tripanswer1.html");
      },
      false
    );

    document.getElementById("ans2").addEventListener(
      "click",
      function () {
        location.replace("http://127.0.0.1:5500/2024hack/tripanswer2.html");
      },
      false
    );
  },
  false
);

console.log(selectedRadio1.value - selectedRadio2.value - selectedRadio3.value);
