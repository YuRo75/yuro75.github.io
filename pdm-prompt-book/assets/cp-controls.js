(() => {
  const $ = (s) => document.querySelector(s);
  const btnTheme = $("#cpBtnTheme");
  /* The button carries the theme you would switch to, not the one you are
     in. Drawn rather than typed: an emoji is rendered by the platform's
     emoji font, so it arrives in full colour whatever the button's own
     colour is, and it is a different drawing on Windows, Android and iOS.
     Beside three monochrome SVG icons that reads as a mistake — which is
     what it looked like on a phone. A path follows currentColor and is the
     same shape everywhere. */
  const themePath = $("#cpThemePath");
  const THEME_ICON = {
    moon: "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-5.4-5.4c0-1.81.89-3.42 2.26-4.4A9.4 9.4 0 0 0 12 3Z",
    sun: "M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10ZM11 2h2v3h-2zM11 19h2v3h-2zM2 11h3v2H2zM19 11h3v2h-3zM4.2 5.6 5.6 4.2 7.7 6.3 6.3 7.7ZM18.4 4.2 19.8 5.6 17.7 7.7 16.3 6.3ZM19.8 18.4 18.4 19.8 16.3 17.7 17.7 16.3ZM5.6 19.8 4.2 18.4 6.3 16.3 7.7 17.7Z",
  };
  const syncTheme = (t) => {
    if (themePath) {
      themePath.setAttribute(
        "d",
        t === "dark" ? THEME_ICON.sun : THEME_ICON.moon,
      );
    }
    if (btnTheme) {
      btnTheme.setAttribute(
        "aria-label",
        t === "dark" ? "Switch to light theme" : "Switch to dark theme",
      );
    }
  };
  const setTheme = (t) => {
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem("sb-theme", t);
    } catch (e) {}
    syncTheme(t);
  };
  const curTheme = () =>
    document.documentElement.getAttribute("data-theme") ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if (btnTheme) {
    syncTheme(curTheme());
    btnTheme.onclick = () => setTheme(curTheme() === "dark" ? "light" : "dark");
  }
  $("#cpBtnRefresh").onclick = () => location.reload();
  /* Fullscreen (v3 parity: expand<->contract icon swap + G shortcut) */
  const fullPath = $("#cpFullPath");
  const FULL = {
    expand:
      "M4 4h6v2H6v4H4V4Zm10 0h6v6h-2V6h-4V4ZM4 14h2v4h4v2H4v-6Zm16 0v6h-6v-2h4v-4h2Z",
    contract:
      "M9 4v4a1 1 0 0 1-1 1H4V7h3V4h2Zm6 0h2v3h3v2h-4a1 1 0 0 1-1-1V4ZM4 15h4a1 1 0 0 1 1 1v4H7v-3H4v-2Zm12 1a1 1 0 0 1 1-1h3v2h-3v3h-2v-4Z",
  };
  const syncFull = () => {
    if (fullPath)
      fullPath.setAttribute(
        "d",
        document.fullscreenElement ? FULL.contract : FULL.expand,
      );
  };
  $("#cpBtnFull").onclick = () => {
    if (!document.fullscreenElement) {
      (document.documentElement.requestFullscreen
        ? document.documentElement.requestFullscreen()
        : Promise.reject()
      ).catch(() => {});
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };
  document.addEventListener("fullscreenchange", syncFull);
  const modal = $("#cpHelpModal");
  const openHelp = () => modal.classList.add("open");
  const closeHelp = () => modal.classList.remove("open");
  $("#cpHelpClose").onclick = closeHelp;
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeHelp();
  });
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input,textarea,[contenteditable]")) return;
    if (e.key === "?" || e.key === "=") {
      e.preventDefault();
      openHelp();
    } else if (e.key === "Escape") {
      closeHelp();
    } else if (e.key.toLowerCase() === "t" && !e.ctrlKey && !e.metaKey) {
      $("#cpBtnTheme").click();
    }
    /* Only own G when the page has no native fullscreen button (e.g. Prompt Book v3) */
    else if (
      e.key.toLowerCase() === "g" &&
      !e.ctrlKey &&
      !e.metaKey &&
      !document.getElementById("btnFull")
    ) {
      $("#cpBtnFull").click();
    }
  });
  // Hide any pre-existing per-book theme/help/refresh/fullscreen buttons in topbars to prevent duplicates.
  const dupSelectors = [
    "#themeBtn",
    "#btnTheme",
    "#themeToggle",
    "#helpBtn",
    "#btnHelp",
    "#reloadBtn",
    "#refreshBtn",
    "#btnFull",
  ];
  dupSelectors.forEach((sel) => {
    const el = document.querySelector(sel);
    if (el) el.style.display = "none";
  });
})();
(function () {
  var a = document.querySelector(".hero .actions"),
    b = document.querySelector(".cp-ctrl-bar");
  if (!a || !b) return;
  /* The bar is authored inside the hero. Only relocate it on pages where it
     still lives elsewhere in the DOM, so the hero layout never depends on JS. */
  if (b.parentElement !== a) a.appendChild(b);
  /* The width of .hdrbtns used to be forced to match the control bar, from a
     layout where it held three labelled buttons stacked under it. It holds
     one icon button now, and that forced width was doing real harm: the hero
     grid column sized itself to the bar alone, so the 112px demand had
     nowhere to go and the home button was shrunk to the width of its icon.
     The group sizes to its content. */
})();
