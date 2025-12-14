export function initPenlight() {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  setTheme(loadTheme());
  darkModeMediaQuery.addEventListener("change", () => setTheme(getTheme()));
  return {
    getTheme() {
      return document.documentElement.getAttribute("data-theme");
    },
    loadTheme() {
      return localStorage.getItem("preferred-theme") || getTheme();
    },
    saveTheme(theme) {
      localStorage.setItem("preferred-theme", theme);
    },
    setTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      saveTheme(theme);
    },
    toggleTheme() {
      const theme = getTheme() === "dark" ? "light" : "dark";
      setTheme(theme);
      return theme;
    },
  };
}
