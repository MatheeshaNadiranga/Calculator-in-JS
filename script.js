// script.js
let output = document.getElementById("output");
let history = document.getElementById("history");
let isDarkMode = false;

function insert(value) {
  output.value += value;
}

function clearAll() {
  output.value = "";
  history.innerHTML = "";
}

function deleteLast() {
  output.value = output.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(output.value);
    history.innerHTML = output.value + " = " + result;
    output.value = result;
  } catch {
    output.value = "Error";
  }
}

function showScientific() {
  let sciPanel = document.getElementById("scientific-functions");
  sciPanel.style.display = sciPanel.style.display === "grid" ? "none" : "grid";
}

document.getElementById("theme-toggle").onclick = function() {
  document.body.classList.toggle("dark");
};
