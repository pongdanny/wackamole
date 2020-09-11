// // Write your JS here.
// window.addEventListener("DOMContentLoaded", () => {
//   setInterval(() => {
//     const moleHeads = document.querySelectorAll(".wgs__mole-head");
//     for (let moleHead of moleHeads) {
//       moleHead.classList.toggle("wgs__mole-head--hidden");
//     }
//   }, 1000);
// });

function popUpRandomMole() {
  let moleHeads = document.querySelectorAll(
    ".wgs__mole-head:not(.wgs__mole-head--whacked)"
  );
  if (moleHeads.length === 0) {
    document.querySelector(".won").innerHTML = "You won!";
    return;
  }
  let random = Math.floor(Math.random() * moleHeads.length);
  let mole = moleHeads[random];
  mole.classList.remove("wgs__mole-head--hidden");
  setTimeout(() => {
    hideMole(mole);
  }, 3000);
}

function hideMole(mole) {
  mole.classList.add("wgs__mole-head--hidden");
  setTimeout(() => {
    popUpRandomMole();
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    popUpRandomMole();
  }, 0);

  let moleHeads = document.querySelectorAll(".wgs__mole-head");
  moleHeads.forEach((moleHead) => {
    moleHead.addEventListener("click", (event) => {
      event.target.classList.add("wgs__mole-head--hidden");
      event.target.classList.add("wgs__mole-head--whacked");
    });
  });
});
