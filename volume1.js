const book = document.querySelector(".book");
let currentRotation = 0;

book.addEventListener("click", () => {
  currentRotation += 90;
  book.style.transform = `rotateY(${currentRotation}deg)`;
});

// Add mouse move effect for dynamic perspective
document.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  book.style.transform = `rotateY(${currentRotation}deg) rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});
