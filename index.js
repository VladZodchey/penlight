const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const getTheme = () => {
  return darkModeMediaQuery.matches ? "dark" : "light";
};
const loadTheme = () => {
  return localStorage.getItem("preferred-theme") || getTheme();
};
const saveTheme = (theme) => {
  localStorage.setItem("preferred-theme", theme);
};
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
};
const overrideTheme = (theme) => {
  setTheme(theme);
  saveTheme(theme);
};
const toggleTheme = () => {
  const theme = loadTheme() === "dark" ? "light" : "dark";
  overrideTheme(theme);
};
const forgetTheme = () => {
  localStorage.removeItem("preferred-theme");
};

setTheme(loadTheme());
darkModeMediaQuery.addEventListener("change", () => {
  overrideTheme(getTheme());
});
