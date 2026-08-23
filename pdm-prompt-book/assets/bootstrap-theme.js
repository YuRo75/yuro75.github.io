(() => {
  const param = new URLSearchParams(window.location.search).get(
    "clawpilotTheme",
  );
  const stored = localStorage.getItem("sb-theme");
  const theme =
    param ||
    stored ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");
  document.documentElement.setAttribute("data-theme", theme);
})();
