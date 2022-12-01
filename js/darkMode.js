if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}

function darkMode() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "dark-mode",
    document.body.classList.contains("dark-mode")
  );
}

let toggle = document.getElementById("toggle-mode");

toggle.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  darkMode();
});