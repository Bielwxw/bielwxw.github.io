const body = document.body;
const themeButton = document.getElementById("alternar");

// Verifique se há uma preferência de tema armazenada no localStorage
const themePreference = localStorage.getItem("themePreference");

// Se houver uma preferência de tema no localStorage, aplique-a
if (themePreference) {
  body.classList.add(themePreference);
}

themeButton.addEventListener("click", () => {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    localStorage.setItem("themePreference", ""); // Limpe a preferência de tema no localStorage
  } else {
    body.classList.add("dark-theme");
    localStorage.setItem("themePreference", "dark-theme"); // Armazene a preferência de tema no localStorage
  }
});
