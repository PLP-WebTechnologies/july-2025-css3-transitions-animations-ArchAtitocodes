// global variable to track state
let isShaking = false;

// toggle helper function
function toggleClass(el, name) {
  if (el.classList.contains(name)) {
    el.classList.remove(name);
    return false;
  } else {
    el.classList.add(name);
    return true;
  }
}

// make the box shake
function shakeBox() {
  let box = document.querySelector(".box");
  // reset so animation can restart
  box.classList.remove("shake");
  void box.offsetWidth; // reflow trick
  box.classList.add("shake");
  isShaking = true;
}

// stop all animations
function resetBox() {
  let box = document.querySelector(".box");
  box.classList.remove("shake", "glow");
  isShaking = false;
}

// button events
document.getElementById("animateBtn").addEventListener("click", () => {
  if (!isShaking) {
    shakeBox();
    console.log("Box is now shaking!");
  } else {
    console.log("Already shaking.");
  }
});

document.getElementById("resetBtn").addEventListener("click", () => {
  resetBox();
  console.log("Reset complete.");
});

// auto-glow after 2.5s
setTimeout(() => {
  document.querySelector(".box").classList.add("glow");
  console.log("Glow animation started.");
}, 2500);
