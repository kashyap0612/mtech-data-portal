const texts = document.querySelectorAll(".rotating-text p");
let index = 0;

function showNextText() {
  texts.forEach((t, i) => {
    t.classList.remove("active");
  });
  texts[index].classList.add("active");
  index = (index + 1) % texts.length;
}

showNextText();
setInterval(showNextText, 3000); // every 3 seconds
