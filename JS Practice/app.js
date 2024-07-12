const btn1 = document.querySelector(".h1");
const btn2 = document.querySelector(".h2");
const btn3 = document.querySelector(".h3");
const btn4 = document.querySelector(".p");
const btn5 = document.querySelector(".bold");
const btn6 = document.querySelector(".italic");
const btn7 = document.querySelector(".center");
const btn8 = document.querySelector(".left");
const btn9 = document.querySelector(".right");

const text = document.querySelector(".text");

btn1.addEventListener("click", () => {
  text.style.fontWeight = "800";
  text.style.fontSize = "1.5rem";
});

btn2.addEventListener("click", () => {
  text.style.fontWeight = "700";
  text.style.fontSize = "1.4rem";
});

btn3.addEventListener("click", () => {
  text.style.fontWeight = "600";
  text.style.fontSize = "1.3rem";
});

btn4.addEventListener("click", () => {
  text.style.fontWeight = "400";
  text.style.fontSize = "1.1rem";
});
btn5.addEventListener("click", () => {
  text.style.fontWeight = "800";
});
btn6.addEventListener("click", () => {
  text.style.fontStyle = "italic";
});
btn7.addEventListener("click", () => {
  text.style.textAlign = "center";
});

btn8.addEventListener("click", () => {
  text.style.textAlign = "left";
});
btn9.addEventListener("click", () => {
  text.style.textAlign = "right";
});
