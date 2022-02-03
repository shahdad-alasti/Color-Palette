const color = document.querySelector(".color");
const resetBtn = document.querySelector(".reset-btn");
const content = document.querySelector(".content");
const sizeInput = document.querySelector(".size");
let size = sizeInput.value;
let draw = false;

function populate(size) {
  content.style.setProperty("--size", size);
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");

    div.addEventListener("mouseover", function () {
      if (!draw) return;
      div.style.backgroundColor = color.value;
    });
    div.addEventListener("mousedown", function () {
      div.style.backgroundColor = color.value;
    });

    content.appendChild(div);
  }
}

window.addEventListener("mousedown", function () {
  draw = true;
});

window.addEventListener("mouseup", function () {
  draw = false;
});

function reset() {
  content.innerHTML = "";
  populate(size);
}

resetBtn.addEventListener("click", reset);

sizeInput.addEventListener("change", function () {
  size = sizeInput.value;
  reset();
});

populate(size);
