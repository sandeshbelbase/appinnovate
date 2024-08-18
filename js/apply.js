function toggleCanvas() {
  const offcanvas = document.getElementById("offcanvas");
  const overlay = document.getElementById("overlay");
  const isOpen = offcanvas.style.left === "0px";

  if (isOpen) {
    offcanvas.style.left = "-250px"; // Hide off-canvas
    overlay.style.display = "none"; // Hide overlay
  } else {
    offcanvas.style.left = "0px"; // Show off-canvas
    overlay.style.display = "block"; // Show overlay
  }
}

function closeCanvas() {
  const offcanvas = document.getElementById("offcanvas");
  const overlay = document.getElementById("overlay");
  offcanvas.style.left = "-250px"; // Hide off-canvas
  overlay.style.display = "none"; // Hide overlay
}
