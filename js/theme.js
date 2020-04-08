const themeSwitchKey = "theme-switch";

let switchState = window.localStorage.getItem(themeSwitchKey);

if (!switchState) {
  switchState = "light"
  window.localStorage.setItem(themeSwitchKey, switchState);
};

function setTheme() {
  if (switchState === "light") {
    document.documentElement.style.setProperty("--theme", "#ff9500")
    document.documentElement.style.setProperty("--text-colour", "black")
    document.documentElement.style.setProperty("--bg-colour", "white")
  } else if (switchState === "dark") {
    document.documentElement.style.setProperty("--theme", "#ff7300")
    document.documentElement.style.setProperty("--text-colour", "white")
    document.documentElement.style.setProperty("--bg-colour", "black")
  } else {
    throw "Something really weird happened"
  }
}

function changeTheme() {
  switchState = switchState === "light" ? "dark" : "light";
  window.localStorage.setItem(themeSwitchKey, switchState);
  setTheme();
}

window.onload = () => {
    const input = document.getElementById("theme-switch");
    input.addEventListener("change", changeTheme);
    input.checked = switchState === "light";
    setTheme();
}
