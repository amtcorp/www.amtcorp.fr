const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
document.documentElement.style.setProperty('--doc-height', window.innerHeight + "px");
document.documentElement.style.setProperty('--doc-width', window.innerWidth + "px");
}

// Get window size on page load
reportWindowSize();

// Get window size on window resize
window.addEventListener("resize", reportWindowSize);