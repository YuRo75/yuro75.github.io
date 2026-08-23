let D = [];
const ICONS = {
  star: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7878 3.10215C11.283 2.09877 12.7138 2.09876 13.209 3.10215L15.567 7.87987L20.8395 8.64601C21.9468 8.80691 22.3889 10.1677 21.5877 10.9487L17.7724 14.6676L18.6731 19.9189C18.8622 21.0217 17.7047 21.8627 16.7143 21.342L11.9984 18.8627L7.28252 21.342C6.29213 21.8627 5.13459 21.0217 5.32374 19.9189L6.2244 14.6676L2.40916 10.9487C1.60791 10.1677 2.05005 8.80691 3.15735 8.64601L8.42988 7.87987L10.7878 3.10215ZM11.9984 4.03854L9.74008 8.61443C9.54344 9.01288 9.16332 9.28904 8.72361 9.35294L3.67382 10.0867L7.32788 13.6486C7.64606 13.9587 7.79125 14.4055 7.71614 14.8435L6.85353 19.8729L11.3702 17.4983C11.7635 17.2915 12.2333 17.2915 12.6266 17.4983L17.1433 19.8729L16.2807 14.8435C16.2056 14.4055 16.3508 13.9587 16.6689 13.6486L20.323 10.0867L15.2732 9.35294C14.8335 9.28904 14.4534 9.01288 14.2568 8.61443L11.9984 4.03854Z" fill="#212121"/>
</svg>
`,
  pin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2425 2.93189L21.0682 7.75765C22.3955 9.08491 22.0324 11.3224 20.3535 12.1619L15.4826 14.5973C15.3073 14.685 15.1732 14.8379 15.1092 15.0232L13.6699 19.1895C13.3684 20.0622 12.2574 20.3181 11.6045 19.6653L8.50002 16.5607L4.06074 21.0001H3L3.00008 19.9394L7.43936 15.5001L4.33487 12.3956C3.682 11.7427 3.93791 10.6317 4.81061 10.3302L8.97688 8.89096C9.16223 8.82694 9.31512 8.69287 9.40281 8.51748L11.8382 3.6466C12.6777 1.96772 14.9152 1.60462 16.2425 2.93189ZM20.0076 8.81831L15.1818 3.99255C14.5785 3.38924 13.5614 3.55429 13.1799 4.31742L10.7445 9.18829C10.4814 9.71446 10.0227 10.1167 9.46666 10.3087L5.67812 11.6175L12.3826 18.322L13.6914 14.5335C13.8835 13.9774 14.2857 13.5188 14.8118 13.2557L19.6827 10.8202C20.4458 10.4387 20.6109 9.42161 20.0076 8.81831Z" fill="#212121"/>
</svg>
`,
  copy: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5028 4.62704L5.5 6.75V17.2542C5.5 19.0491 6.95507 20.5042 8.75 20.5042L17.3663 20.5045C17.0573 21.3782 16.224 22.0042 15.2444 22.0042H8.75C6.12665 22.0042 4 19.8776 4 17.2542V6.75C4 5.76929 4.62745 4.93512 5.5028 4.62704ZM17.75 2C18.9926 2 20 3.00736 20 4.25V17.25C20 18.4926 18.9926 19.5 17.75 19.5H8.75C7.50736 19.5 6.5 18.4926 6.5 17.25V4.25C6.5 3.00736 7.50736 2 8.75 2H17.75ZM17.75 3.5H8.75C8.33579 3.5 8 3.83579 8 4.25V17.25C8 17.6642 8.33579 18 8.75 18H17.75C18.1642 18 18.5 17.6642 18.5 17.25V4.25C18.5 3.83579 18.1642 3.5 17.75 3.5Z" fill="#212121"/>
</svg>
`,
  spark: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66535 15.7345C8.90969 15.9075 9.20192 15.9999 9.50129 15.9989V15.9949C9.78358 15.9955 10.0598 15.9132 10.2957 15.7582C10.5316 15.6031 10.7168 15.3822 10.8283 15.1229L11.4413 13.2589C11.5829 12.8366 11.8207 12.4531 12.1361 12.1386C12.4514 11.8241 12.8356 11.5873 13.2583 11.4469L15.0363 10.8689C15.3227 10.7683 15.5701 10.5799 15.7432 10.3305C15.9164 10.0812 16.0065 9.7836 16.0007 9.48009C15.9949 9.17659 15.8936 8.88262 15.7111 8.64003C15.5286 8.39744 15.2743 8.21858 14.9843 8.12889L13.2293 7.55889C12.8048 7.41763 12.419 7.1793 12.1027 6.86283C11.7864 6.54637 11.5483 6.1605 11.4073 5.73589L10.8293 3.95889C10.7285 3.67586 10.542 3.43127 10.2958 3.25908C10.0496 3.0869 9.7559 2.99567 9.45547 2.99809C9.15504 3.00051 8.86282 3.09645 8.61942 3.27258C8.37602 3.44871 8.19353 3.69628 8.09729 3.98089L7.51429 5.77289C7.37371 6.18515 7.14135 6.56012 6.83474 6.8695C6.52813 7.17888 6.15528 7.4146 5.74429 7.55889L3.96729 8.12989C3.75592 8.20382 3.56463 8.32589 3.40855 8.48647C3.25247 8.64704 3.13587 8.84172 3.06798 9.05511C3.00008 9.2685 2.98274 9.49475 3.01733 9.716C3.05193 9.93724 3.1375 10.1474 3.26729 10.3299C3.44418 10.5789 3.69508 10.7657 3.98429 10.8639L5.73829 11.4329C6.16392 11.5753 6.55049 11.815 6.86729 12.1329C6.95236 12.2173 7.03186 12.3072 7.10529 12.4019C7.30447 12.6597 7.45833 12.9495 7.56029 13.2589L8.13829 15.0339C8.23676 15.3166 8.42102 15.5615 8.66535 15.7345ZM8.29129 11.4849C8.17979 11.3392 8.05851 11.2012 7.92829 11.0719H7.93129C7.44841 10.5886 6.85948 10.2247 6.21129 10.0089L4.61129 9.50089L6.22229 8.97689C6.85983 8.75615 7.43806 8.39176 7.91229 7.91189C8.38447 7.42897 8.74047 6.84487 8.95329 6.20389L9.46829 4.62189L9.98429 6.20889C10.1997 6.85585 10.5633 7.44351 11.0462 7.92497C11.529 8.40643 12.1177 8.76837 12.7653 8.98189L14.3843 9.50389L12.7953 10.0189C12.1489 10.2338 11.5616 10.5965 11.08 11.0782C10.5984 11.56 10.2359 12.1474 10.0213 12.7939L9.50629 14.3759L8.99129 12.7909C8.83406 12.3189 8.59732 11.8772 8.29129 11.4849ZM16.332 20.7819C16.1415 20.6461 15.9981 20.4541 15.922 20.2329L15.594 19.2259C15.5302 19.0344 15.4231 18.8602 15.281 18.7169C15.1385 18.574 14.9645 18.4664 14.773 18.4029L13.782 18.0799C13.5516 18.0026 13.3516 17.8541 13.211 17.6559C13.0737 17.4636 13.0002 17.2331 13.001 16.9969C13.0013 16.7591 13.0757 16.5274 13.214 16.3339C13.3512 16.1394 13.5466 15.9934 13.772 15.9169L14.778 15.5909C14.965 15.5245 15.1343 15.4162 15.273 15.2742C15.4117 15.1322 15.516 14.9604 15.578 14.7719L15.902 13.7799C15.9782 13.5557 16.1222 13.3606 16.3141 13.2218C16.5059 13.0829 16.7362 13.0071 16.973 13.0048C17.2099 13.0025 17.4416 13.0738 17.6361 13.2089C17.8306 13.344 17.9784 13.5362 18.059 13.7589L18.388 14.7729C18.4524 14.963 18.5599 15.1356 18.7022 15.2771C18.8445 15.4187 19.0176 15.5254 19.208 15.5889L20.2 15.9119C20.4287 15.9834 20.629 16.1251 20.7727 16.3169C20.9163 16.5086 20.9959 16.7408 21.0002 16.9803C21.0045 17.2199 20.9333 17.4547 20.7967 17.6516C20.6601 17.8484 20.4649 17.9972 20.239 18.0769L19.225 18.4059C19.0349 18.4707 18.8622 18.5781 18.72 18.7199C18.5777 18.8627 18.4705 19.0366 18.407 19.2279L18.085 20.2169C18.0075 20.4472 17.8586 20.6469 17.66 20.7869C17.468 20.9249 17.2375 20.9991 17.001 20.9989C16.7607 20.9989 16.5265 20.9229 16.332 20.7819ZM15.3014 16.999C15.6943 17.1386 16.051 17.3646 16.3452 17.6602C16.6394 17.956 16.8635 18.314 17.001 18.7079C17.1399 18.3158 17.3646 17.9597 17.6587 17.6656C17.9528 17.3715 18.3089 17.1468 18.701 17.0079C18.3026 16.8685 17.9406 16.6412 17.642 16.3429C17.3469 16.049 17.1217 15.6926 16.983 15.2999C16.8449 15.6898 16.6223 16.0444 16.3312 16.3383C16.0407 16.6316 15.689 16.8572 15.3014 16.999Z" fill="#212121"/>
</svg>
`,
  book: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19.1375C11.4986 19.6686 10.788 20 10 20H3.75C2.7835 20 2 19.2165 2 18.25V5.75C2 4.7835 2.7835 4 3.75 4H10C10.788 4 11.4986 4.33145 12 4.86253C12.5014 4.33145 13.212 4 14 4H20.25C21.2165 4 22 4.7835 22 5.75V18.25C22 19.2165 21.2165 20 20.25 20H14C13.212 20 12.5014 19.6686 12 19.1375ZM3.5 5.75V18.25C3.5 18.3881 3.61193 18.5 3.75 18.5H10C10.6904 18.5 11.25 17.9404 11.25 17.25V6.75C11.25 6.05964 10.6904 5.5 10 5.5H3.75C3.61193 5.5 3.5 5.61193 3.5 5.75ZM12.75 17.25C12.75 17.9404 13.3096 18.5 14 18.5H20.25C20.3881 18.5 20.5 18.3881 20.5 18.25V5.75C20.5 5.61193 20.3881 5.5 20.25 5.5H14C13.3096 5.5 12.75 6.05964 12.75 6.75V17.25Z" fill="#212121"/>
</svg>
`,
  chev: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.46967 4.21967C8.17678 4.51256 8.17678 4.98744 8.46967 5.28033L15.1893 12L8.46967 18.7197C8.17678 19.0126 8.17678 19.4874 8.46967 19.7803C8.76256 20.0732 9.23744 20.0732 9.53033 19.7803L16.7803 12.5303C17.0732 12.2374 17.0732 11.7626 16.7803 11.4697L9.53033 4.21967C9.23744 3.92678 8.76256 3.92678 8.46967 4.21967Z" fill="#212121"/>
</svg>
`,
  tag: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7498 2C20.9925 2 21.9998 3.00736 21.9998 4.25V9.71196C21.9998 10.5738 21.6575 11.4003 21.0482 12.0098L12.5472 20.5129C11.2777 21.7798 9.22195 21.7807 7.95079 20.5143L3.48909 16.0592C2.21862 14.7913 2.21699 12.7334 3.48531 11.4632L11.985 2.95334C12.5946 2.34297 13.4218 2 14.2845 2H19.7498ZM19.7498 3.5H14.2845C13.82 3.5 13.3745 3.68467 13.0463 4.01333L4.53412 12.5358C3.86389 13.2207 3.86898 14.3191 4.54884 14.9977L9.01006 19.4522C9.69493 20.1345 10.8033 20.134 11.487 19.4518L19.9874 10.9492C20.3155 10.6211 20.4998 10.176 20.4998 9.71196V4.25C20.4998 3.83579 20.164 3.5 19.7498 3.5ZM16.9998 5.50218C17.8282 5.50218 18.4998 6.17374 18.4998 7.00216C18.4998 7.83057 17.8282 8.50213 16.9998 8.50213C16.1714 8.50213 15.4998 7.83057 15.4998 7.00216C15.4998 6.17374 16.1714 5.50218 16.9998 5.50218Z" fill="#212121"/>
</svg>
`,
  open: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.24992 4.5C5.28344 4.5 4.49996 5.2835 4.49996 6.25V17.75C4.49996 18.7165 5.28344 19.5 6.24992 19.5H17.7496C18.7161 19.5 19.4996 18.7165 19.4996 17.75V13.75C19.4996 13.3358 19.8354 13 20.2496 13C20.6638 13 20.9995 13.3358 20.9995 13.75V17.75C20.9995 19.5449 19.5445 21 17.7496 21H6.24992C4.45504 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45504 3 6.24992 3H10.2498C10.664 3 10.9998 3.33579 10.9998 3.75C10.9998 4.16421 10.664 4.5 10.2498 4.5H6.24992ZM12.9997 3.75C12.9997 3.33579 13.3355 3 13.7497 3H20.25C20.6642 3 21 3.33579 21 3.75V10.25C21 10.6642 20.6642 11 20.25 11C19.8358 11 19.5 10.6642 19.5 10.25V5.56074L14.28 10.7804C13.9871 11.0732 13.5123 11.0732 13.2194 10.7803C12.9265 10.4874 12.9265 10.0125 13.2194 9.71964L18.4395 4.5H13.7497C13.3355 4.5 12.9997 4.16421 12.9997 3.75Z" fill="#212121"/>
</svg>
`,
  bot: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7534 13.9994C18.9961 13.9994 20.0034 15.0068 20.0034 16.2494V17.1545C20.0034 18.2482 19.526 19.2874 18.6961 19.9998C17.1307 21.3437 14.8904 22.0006 12.0004 22.0006C9.11087 22.0006 6.87205 21.344 5.30918 20.0003C4.48056 19.2879 4.00391 18.2495 4.00391 17.1567V16.2494C4.00391 15.0068 5.01127 13.9994 6.25391 13.9994H17.7534ZM17.7534 15.4994H6.25391C5.83969 15.4994 5.50391 15.8352 5.50391 16.2494V17.1567C5.50391 17.8124 5.7899 18.4354 6.28707 18.8629C7.54516 19.9445 9.44117 20.5006 12.0004 20.5006C14.5603 20.5006 16.4582 19.9442 17.7191 18.8617C18.2169 18.4342 18.5034 17.8107 18.5034 17.1545V16.2494C18.5034 15.8352 18.1676 15.4994 17.7534 15.4994ZM11.8989 2.00685L12.0007 2C12.3804 2 12.6942 2.28215 12.7438 2.64823L12.7507 2.75L12.7499 3.499L16.2504 3.49951C17.493 3.49951 18.5004 4.50687 18.5004 5.74951V10.2541C18.5004 11.4967 17.493 12.5041 16.2504 12.5041H7.75036C6.50772 12.5041 5.50036 11.4967 5.50036 10.2541V5.74951C5.50036 4.50687 6.50772 3.49951 7.75036 3.49951L11.2499 3.499L11.2507 2.75C11.2507 2.3703 11.5328 2.05651 11.8989 2.00685L12.0007 2L11.8989 2.00685ZM16.2504 4.99951H7.75036C7.33615 4.99951 7.00036 5.33529 7.00036 5.74951V10.2541C7.00036 10.6683 7.33615 11.0041 7.75036 11.0041H16.2504C16.6646 11.0041 17.0004 10.6683 17.0004 10.2541V5.74951C17.0004 5.33529 16.6646 4.99951 16.2504 4.99951ZM9.74965 6.49951C10.4396 6.49951 10.9989 7.05883 10.9989 7.74879C10.9989 8.43876 10.4396 8.99808 9.74965 8.99808C9.05969 8.99808 8.50036 8.43876 8.50036 7.74879C8.50036 7.05883 9.05969 6.49951 9.74965 6.49951ZM14.2424 6.49951C14.9324 6.49951 15.4917 7.05883 15.4917 7.74879C15.4917 8.43876 14.9324 8.99808 14.2424 8.99808C13.5524 8.99808 12.9931 8.43876 12.9931 7.74879C12.9931 7.05883 13.5524 6.49951 14.2424 6.49951Z" fill="#212121"/>
</svg>
`,
};

let activeAgent = null;
let mods = { fav: false, rated: false, vars: false, multi: false };
let current = null;
let favorites = new Set(JSON.parse(localStorage.getItem("pb2-fav") || "[]"));
// Agent counts are recomputed when prompt data is loaded.
let AGENT_COUNTS = {};
// Mail bridge config (override here to retarget the local send bridge / recipient).
const DEFAULT_MAIL_CONFIG = {
  to: "yuriroos@outlook.com",
  bridgeUrl: "http://localhost:8765/sendmail",
  healthUrl: "",
  requestTimeoutMs: 6000,
  enabled: true,
};
const DIALOG_IDS = ["dlg", "varDlg", "addDlg", "featDlg", "compareDlg"];
const DATA_PATH = "data/prompts.json";
const dialogFocusState = new Map();
let bridgeStatus = "checking";
let bridgeProbeTimer = null;
let compareMode = false;
let compareSelection = [];
let promptOpens = (() => {
  try {
    return JSON.parse(localStorage.getItem("pb4-opens") || "{}");
  } catch (e) {
    return {};
  }
})();
let recentSlugs = (() => {
  try {
    const arr = JSON.parse(localStorage.getItem("pb4-recent") || "[]");
    return Array.isArray(arr) ? arr : [];
  } catch (e) {
    return [];
  }
})();
let presets = (() => {
  try {
    const obj = JSON.parse(localStorage.getItem("pb4-presets") || "{}");
    return obj && typeof obj === "object" ? obj : {};
  } catch (e) {
    return {};
  }
})();

function getMailConfig() {
  const override =
    window.PB_CONFIG &&
    typeof window.PB_CONFIG === "object" &&
    window.PB_CONFIG.mail &&
    typeof window.PB_CONFIG.mail === "object"
      ? window.PB_CONFIG.mail
      : {};
  const to =
    typeof override.to === "string" && /\S+@\S+\.\S+/.test(override.to)
      ? override.to.trim()
      : DEFAULT_MAIL_CONFIG.to;
  const bridgeUrl =
    typeof override.bridgeUrl === "string" &&
    /^https?:\/\//i.test(override.bridgeUrl.trim())
      ? override.bridgeUrl.trim()
      : DEFAULT_MAIL_CONFIG.bridgeUrl;
  const requestTimeoutMs = Number.isFinite(Number(override.requestTimeoutMs))
    ? Math.min(30000, Math.max(1000, Number(override.requestTimeoutMs)))
    : DEFAULT_MAIL_CONFIG.requestTimeoutMs;
  const healthUrl =
    typeof override.healthUrl === "string" ? override.healthUrl.trim() : "";
  const enabled =
    typeof override.enabled === "boolean"
      ? override.enabled
      : DEFAULT_MAIL_CONFIG.enabled;
  return { to, bridgeUrl, healthUrl, requestTimeoutMs, enabled };
}
const MAIL_CONFIG = getMailConfig();

function deriveBridgeHealthUrl(bridgeUrl, configuredHealthUrl) {
  if (configuredHealthUrl) return configuredHealthUrl;
  try {
    const u = new URL(bridgeUrl);
    if (/\/send(mail)?$/i.test(u.pathname)) {
      u.pathname = u.pathname.replace(/\/send(mail)?$/i, "/health");
      return u.toString();
    }
    return bridgeUrl;
  } catch (_) {
    return bridgeUrl;
  }
}

function isLocalBridgeHost(urlString) {
  try {
    const u = new URL(urlString);
    return (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname === "::1"
    );
  } catch (_) {
    return false;
  }
}

function isPageLocalhost() {
  const host = (window.location && window.location.hostname) || "";
  return host === "localhost" || host === "127.0.0.1" || host === "::1";
}

function bridgeAvailability() {
  if (!MAIL_CONFIG.enabled) {
    return { available: false, reason: "disabled" };
  }
  if (isLocalBridgeHost(MAIL_CONFIG.bridgeUrl) && !isPageLocalhost()) {
    return { available: false, reason: "local-only" };
  }
  return { available: true, reason: "" };
}

/* ───── v3 state ───── */
let view = localStorage.getItem("pb3-view") || "cards"; // cards | list | compact
let groupBy = "none"; // grouping control removed in v3
let ratings = (() => {
  try {
    return JSON.parse(localStorage.getItem("pb3-ratings") || "{}");
  } catch (e) {
    return {};
  }
})();
let varStore = (() => {
  try {
    return JSON.parse(localStorage.getItem("pb3-vars") || "{}");
  } catch (e) {
    return {};
  }
})();
const SVG_BOT_INLINE = `<svg viewBox="0 0 24 24"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.3 0-8 1.7-8 5v1h16v-1c0-3.3-4.7-5-8-5Z"/></svg>`;

function anyDialogOpen() {
  return DIALOG_IDS.some((id) => document.getElementById(id)?.open);
}

function trapDialogFocus(event, dialog) {
  if (event.key !== "Tab") return;
  const nodes = dialog.querySelectorAll(
    'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',
  );
  const focusable = [...nodes].filter((el) => !el.hasAttribute("hidden"));
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function setupDialogA11y(id) {
  const dialog = document.getElementById(id);
  if (!dialog || dialog._a11yWired) return;
  dialog._a11yWired = true;
  dialog.addEventListener("keydown", (event) => trapDialogFocus(event, dialog));
  dialog.addEventListener("close", () => {
    const origin = dialogFocusState.get(id);
    dialogFocusState.delete(id);
    if (origin && document.contains(origin)) origin.focus();
  });
}

function openDialog(id, focusSelector) {
  const dialog = document.getElementById(id);
  if (!dialog) return;
  setupDialogA11y(id);
  if (!dialog.open) {
    const active = document.activeElement;
    dialogFocusState.set(id, active instanceof HTMLElement ? active : null);
    dialog.showModal();
  }
  if (focusSelector) {
    const target = dialog.querySelector(focusSelector);
    if (target) setTimeout(() => target.focus(), 20);
  }
}

function closeDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog && dialog.open) dialog.close();
}

function setLoadError(message) {
  const panel = document.getElementById("loadError");
  const body = document.getElementById("loadErrorBody");
  if (!panel || !body) return;
  if (!message) {
    panel.hidden = true;
    body.textContent = "";
    return;
  }
  body.textContent = message;
  panel.hidden = false;
}

function setBridgeStatus(status, detail) {
  bridgeStatus = status;
  const el = document.getElementById("bridgeStatus");
  if (!el) return;
  el.classList.remove("online", "offline", "checking", "disabled");
  el.classList.add(status);
  if (status === "online") el.textContent = "Mail bridge: online";
  else if (status === "disabled")
    el.textContent = "Mail bridge: " + (detail || "disabled");
  else if (status === "offline")
    el.textContent =
      "Mail bridge: offline" + (detail ? " (" + detail + ")" : "");
  else el.textContent = "Mail bridge: checking…";
}

function openMailtoFallback(subject, textBody, btn, origLabel) {
  const to = encodeURIComponent(MAIL_CONFIG.to);
  const subj = encodeURIComponent(subject);
  const body = encodeURIComponent(textBody);
  window.location.href = `mailto:${to}?subject=${subj}&body=${body}`;
  if (btn) {
    btn.textContent = "Mail client opened";
    setTimeout(function () {
      btn.innerHTML = origLabel;
      btn.disabled = false;
    }, 2500);
  }
  if (typeof toast === "function") toast("Mail client opened");
  return false;
}

async function probeBridge() {
  const availability = bridgeAvailability();
  if (!availability.available) {
    setBridgeStatus(
      "disabled",
      availability.reason === "local-only"
        ? "mail client fallback"
        : "disabled",
    );
    return;
  }
  const healthUrl = deriveBridgeHealthUrl(
    MAIL_CONFIG.bridgeUrl,
    MAIL_CONFIG.healthUrl,
  );
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 1800);
  try {
    const res = await fetch(healthUrl, {
      method: "GET",
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (res.ok || res.status === 405 || res.status === 404) {
      setBridgeStatus("online");
      return;
    }
    setBridgeStatus("offline", "HTTP " + res.status);
  } catch (error) {
    clearTimeout(timeout);
    setBridgeStatus("offline", "unreachable");
  }
}

function scheduleBridgeProbe(delayMs) {
  clearTimeout(bridgeProbeTimer);
  bridgeProbeTimer = setTimeout(() => {
    const availability = bridgeAvailability();
    if (!availability.available) {
      setBridgeStatus(
        "disabled",
        availability.reason === "local-only"
          ? "mail client fallback"
          : "disabled",
      );
      return;
    }
    setBridgeStatus("checking");
    probeBridge();
  }, delayMs);
}

function normalizePromptData(items) {
  const list = Array.isArray(items) ? items : [];
  list.forEach((p, i) => {
    p._i = i;
    if (p.favorite) favorites.add(p.slug);
  });
  AGENT_COUNTS = {};
  list.forEach((p) => {
    const a = (p.agent || "").trim();
    if (a) AGENT_COUNTS[a] = (AGENT_COUNTS[a] || 0) + 1;
  });
  return list;
}

async function loadPromptData() {
  setLoadError("");
  // "no-cache" still revalidates with the server on every load, so the catalog is
  // never stale, but an unchanged file comes back as a ~200 byte 304 instead of
  // re-downloading the whole payload the way "no-store" forced us to.
  const response = await fetch(DATA_PATH, { cache: "no-cache" });
  if (!response.ok)
    throw new Error(
      "Unable to load " + DATA_PATH + " (" + response.status + ")",
    );
  const data = await response.json();
  D = normalizePromptData(data);
}

function effRating(p) {
  const local = ratings[p.slug];
  if (local !== undefined && local !== null && local !== "")
    return parseInt(local, 10) || 0;
  return parseInt(p.rating, 10) || 0;
}
function slugAnchor(slug) {
  return (slug || "").toString().replace(/#/g, "--").replace(/\s+/g, "-");
}

function parseVars(text) {
  if (!text) return [];
  const re = /\{\{\s*([^}]+?)\s*\}\}/g;
  let m;
  const seen = new Map();
  while ((m = re.exec(text))) {
    let raw = m[1].trim(),
      name = raw,
      def = "",
      hint = "";
    if (raw.includes("|")) {
      const parts = raw.split("|");
      name = parts[0].trim();
      def = parts.slice(1).join("|").trim();
    } else if (raw.includes(":")) {
      const i = raw.indexOf(":");
      name = raw.slice(0, i).trim();
      hint = raw.slice(i + 1).trim();
    }
    if (name && !seen.has(name)) seen.set(name, { name, def, hint });
  }
  return [...seen.values()];
}
function fillVars(text, values) {
  return (text || "").replace(/\{\{\s*([^}]+?)\s*\}\}/g, (full, inner) => {
    let raw = inner.trim(),
      name = raw;
    if (raw.includes("|")) name = raw.split("|")[0].trim();
    else if (raw.includes(":")) name = raw.slice(0, raw.indexOf(":")).trim();
    const v = values[name];
    return v !== undefined && v !== "" ? v : full;
  });
}
function withFilledPrompt(p, cb) {
  const raw = p.prompt || "";
  const vars = parseVars(raw);
  if (!vars.length) {
    cb(raw);
    return;
  }
  const names = vars.map((v) => "{{" + v.name + "}}").join(", ");
  const preamble =
    "Before you begin, ask me to provide values for these placeholders: " +
    names +
    ". Ask one question at a time, wait for my answer, then substitute each value into the matching {{...}} in the prompt below. Only start the task once I have provided all values.\n\n---\n\n";
  cb(preamble + raw);
}

function esc(s) {
  return (s == null ? "" : s.toString()).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}
function escAttr(s) {
  return esc(s).replace(/\n/g, " ");
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("on");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("on"), 1700);
}

function asCsv(items) {
  const cols = [
    "slug",
    "title",
    "agent",
    "language",
    "tags",
    "rating",
    "usage",
  ];
  const escCsv = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const rows = items.map((p) =>
    [
      p.slug,
      p.title,
      p.agent,
      p.language,
      (p.tags || []).join("|"),
      effRating(p),
      p.usage || 0,
    ]
      .map(escCsv)
      .join(","),
  );
  return [cols.join(","), ...rows].join("\n");
}

function downloadText(filename, content, contentType) {
  const blob = new Blob([content], { type: contentType });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1500);
}

function saveRecent(slug) {
  if (!slug) return;
  recentSlugs = [slug, ...recentSlugs.filter((s) => s !== slug)].slice(0, 8);
  localStorage.setItem("pb4-recent", JSON.stringify(recentSlugs));
}

function trackOpen(slug) {
  if (!slug) return;
  promptOpens[slug] = (promptOpens[slug] || 0) + 1;
  localStorage.setItem("pb4-opens", JSON.stringify(promptOpens));
}

function getFilteredSorted() {
  return sortItems(applyFilters());
}

function presetPayload() {
  return {
    q: (document.getElementById("q") || {}).value || "",
    sort: (document.getElementById("sort") || {}).value || "recent",
    activeAgent: activeAgent,
    mods,
    view,
  };
}

function applyPreset(payload) {
  if (!payload || typeof payload !== "object") return;
  const q = document.getElementById("q");
  const sort = document.getElementById("sort");
  if (q) q.value = payload.q || "";
  if (sort && payload.sort) sort.value = payload.sort;
  activeAgent = payload.activeAgent || null;
  mods = Object.assign(
    { fav: false, rated: false, vars: false, multi: false },
    payload.mods || {},
  );
  view = payload.view || view;
  render();
}

function renderPresetSelect() {
  const select = document.getElementById("presetSelect");
  if (!select) return;
  const names = Object.keys(presets).sort((a, b) => a.localeCompare(b));
  select.innerHTML =
    '<option value="">Choose preset…</option>' +
    names
      .map((n) => `<option value="${escAttr(n)}">${esc(n)}</option>`)
      .join("");
}

function topTags(limit) {
  const counts = new Map();
  D.forEach((p) => {
    (p.tags || []).forEach((t) => {
      const key = (t || "").trim();
      if (!key) return;
      counts.set(key, (counts.get(key) || 0) + 1);
    });
  });
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit);
}

function renderInsights() {
  const recentEl = document.getElementById("recentList");
  const tagsEl = document.getElementById("tagCloud");
  const usageEl = document.getElementById("usageInsights");
  if (recentEl) {
    const prompts = recentSlugs
      .map((slug) => D.find((p) => p.slug === slug))
      .filter(Boolean);
    recentEl.innerHTML = prompts.length
      ? prompts
          .map(
            (p) =>
              `<button class="recent-btn" data-open-slug="${escAttr(p.slug)}">${esc(p.title)}</button>`,
          )
          .join("")
      : '<span class="insight-chip">No recent prompts yet</span>';
  }
  if (tagsEl) {
    const tags = topTags(14);
    tagsEl.innerHTML = tags.length
      ? tags
          .map(
            ([tag, n]) =>
              `<button class="cloud-tag" data-tag="${escAttr(tag)}">#${esc(tag)} <span class="n">${n}</span></button>`,
          )
          .join("")
      : '<span class="insight-chip">No tags available</span>';
  }
  if (usageEl) {
    const totalOpens = Object.values(promptOpens).reduce(
      (a, b) => a + Number(b || 0),
      0,
    );
    const topPrompt = [...D].sort(
      (a, b) => (promptOpens[b.slug] || 0) - (promptOpens[a.slug] || 0),
    )[0];
    const items = [
      `Viewed: ${totalOpens}`,
      `Favorites: ${favorites.size}`,
      `Top: ${topPrompt ? topPrompt.title : "N/A"}`,
    ];
    usageEl.innerHTML = items
      .map((x) => `<span class="insight-chip">${esc(x)}</span>`)
      .join("");
  }
}

function catCounts() {
  const c = {};
  D.forEach((p) => {
    c[p.category] = (c[p.category] || 0) + 1;
  });
  return c;
}

function modCounts() {
  return {
    fav: D.filter((p) => favorites.has(p.slug)).length,
    rated: D.filter((p) => effRating(p) >= 4).length,
    vars: D.filter((p) => (p.variables || []).length > 0).length,
    multi: D.filter((p) => p.multi).length,
  };
}

function renderCatChips() {
  const c = AGENT_COUNTS;
  const wrap = document.getElementById("catChips");
  const order = [
    "Microsoft 365 Copilot",
    "Know Your Partner (KYP)",
    "Analyst",
    "Cowork",
    "Sales",
    "Researcher",
  ];
  const keys = Object.keys(c).sort((a, b) => {
    const ia = order.indexOf(a),
      ib = order.indexOf(b);
    if (ia !== -1 || ib !== -1)
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    return a.localeCompare(b);
  });
  let h = '<span class="chip-label">Agent</span>';
  h += `<button class="chip${activeAgent === null ? " active" : ""}" data-agent="">All <span class="count">${D.length}</span></button>`;
  keys.forEach((k) => {
    h += `<button class="chip${activeAgent === k ? " active" : ""}" data-agent="${esc(k)}">${esc(k)} <span class="count">${c[k]}</span></button>`;
  });
  h += `<button class="chip" data-agent="" disabled style="opacity:.45;cursor:default" title="No prompts yet — coming soon.">ECIF Agent <span class="count">0</span></button>`;
  wrap.innerHTML = h;
  wrap.querySelectorAll("[data-agent]:not([disabled])").forEach((b) =>
    b.addEventListener("click", () => {
      activeAgent = b.dataset.agent || null;
      render();
    }),
  );
}

function updateModChipCounts() {
  document
    .querySelectorAll("[data-mod]")
    .forEach((b) => b.classList.toggle("active", !!mods[b.dataset.mod]));
}

function updateStats() {
  const m = modCounts();
  const _st = document.getElementById("statTotal");
  if (_st) _st.textContent = D.length;
  const _sc = document.getElementById("statCats");
  if (_sc) _sc.textContent = A_META.length;
  {
    const _sg = document.getElementById("statGen");
    if (_sg) _sg.textContent = "—";
  }
}

function scoreMatch(p, q) {
  if (!q) return 1;
  const ql = q.toLowerCase();
  let score = 0;
  const fields = [
    [p.title, 8],
    [p.agent, 4],
    [p.target, 3],
    [p.useCase, 4],
    [(p.tags || []).join(" "), 5],
    [(p.variables || []).join(" "), 3],
    [p.prompt, 2],
    [p.category, 6],
  ];
  for (const [v, w] of fields) {
    if (!v) continue;
    const lv = v.toString().toLowerCase();
    if (lv === ql) score += w * 3;
    else if (lv.startsWith(ql)) score += w * 2;
    else if (lv.includes(ql)) score += w;
  }
  return score;
}

// Render-scoped score cache: applyFilters and sortItems both score every item for
// the same query, so memoise per (query, prompt) and reset when the query changes.
let _scoreQ = null;
let _scoreCache = new Map();
function cachedScore(p, q) {
  if (q !== _scoreQ) {
    _scoreCache = new Map();
    _scoreQ = q;
  }
  let s = _scoreCache.get(p);
  if (s === undefined) {
    s = scoreMatch(p, q);
    _scoreCache.set(p, s);
  }
  return s;
}

function applyFilters() {
  const q = document.getElementById("q").value.trim();
  return D.filter((p) => {
    if (activeAgent && (p.agent || "").trim() !== activeAgent) return false;
    if (mods.fav && !favorites.has(p.slug)) return false;
    if (mods.rated && effRating(p) < 4) return false;
    if (mods.vars && (p.variables || []).length === 0) return false;
    if (mods.multi && !p.multi) return false;
    if (q && cachedScore(p, q) === 0) return false;
    return true;
  });
}

function sortItems(arr) {
  const k = (document.getElementById("sort") || {}).value || "recent";
  const q = document.getElementById("q").value.trim();
  const copy = arr.slice();
  if (q) {
    copy.sort((a, b) => cachedScore(b, q) - cachedScore(a, q));
    return copy;
  }
  switch (k) {
    case "alpha":
      return copy.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    case "created":
      return copy.sort((a, b) =>
        (b.created || "").localeCompare(a.created || ""),
      );
    case "usage":
      return copy.sort((a, b) => (b.usage || 0) - (a.usage || 0));
    case "rated":
      return copy.sort((a, b) => effRating(b) - effRating(a));
    default:
      return copy.sort((a, b) =>
        (b.sortDate || "").localeCompare(a.sortDate || ""),
      );
  }
}

function renderCard(p, i) {
  const inCompare = compareSelection.includes(p.slug);
  const preview = (p.useCase || p.prompt || "")
    .replace(/\s+/g, " ")
    .trim()
    .substring(0, 180);
  const tagChips = (p.tags || [])
    .slice(0, 4)
    .map(
      (t) =>
        `<span class="tag-mini" data-tag="${escAttr(t)}">#${esc(t)}</span>`,
    )
    .join("");
  return `<div class="card${inCompare ? " sel-compare" : ""}" data-i="${i}" role="button" tabindex="0" aria-label="Open ${escAttr(p.title)}">
    <div class="head">
      <h3>${esc(p.title)}</h3>
    </div>
    <div class="meta-row">
      ${p.agent ? `<span class="agent">${esc(p.agent)}</span>` : ""}
      ${p.language ? `<span class="lang">${esc(p.language)}</span>` : ""}
      ${p.multi ? '<span class="multi-badge">multi</span>' : ""}
    </div>
    <div class="preview">${esc(preview)}${preview.length >= 180 ? "…" : ""}</div>
    ${tagChips ? `<div class="tags-mini">${tagChips}</div>` : ""}
    <div class="footrow">
      <div class="left">
        ${(p.variables || []).length ? `<span class="vars" title="${(p.variables || []).length} variables">${ICONS.spark} ${(p.variables || []).length} var${(p.variables || []).length === 1 ? "" : "s"}</span>` : ""}
        ${p.usage ? `<span>· ${p.usage} use${p.usage === 1 ? "" : "s"}</span>` : ""}
      </div>
      <div>${p.lastUsed ? "used " + esc(p.lastUsed) : p.created ? "new " + esc(p.created) : ""}</div>
    </div>
  </div>`;
}

function renderListRow(p, i) {
  const inCompare = compareSelection.includes(p.slug);
  const preview = (p.useCase || p.prompt || "")
    .replace(/\s+/g, " ")
    .trim()
    .substring(0, 220);
  return `<div class="listrow${inCompare ? " sel-compare" : ""}" data-i="${i}" role="button" tabindex="0" aria-label="Open ${escAttr(p.title)}">
    <div>
      <h3>${esc(p.title)}</h3>
      <div class="lr-meta">
        ${p.agent ? `<span class="agent">${esc(p.agent)}</span>` : ""}
        ${p.language ? `<span class="lang">${esc(p.language)}</span>` : ""}
        ${(p.variables || []).length ? `<span class="vars">${ICONS.spark} ${(p.variables || []).length} var${(p.variables || []).length === 1 ? "" : "s"}</span>` : ""}
        ${p.multi ? '<span class="multi-badge">multi</span>' : ""}
      </div>
      <div class="lr-prev">${esc(preview)}${preview.length >= 220 ? "…" : ""}</div>
    </div>
    <div class="lr-right"></div>
  </div>`;
}

function renderTable(arr) {
  const rows = arr
    .map((p) => {
      const i = p._i;
      const tags = (p.tags || [])
        .slice(0, 3)
        .map((t) => "#" + esc(t))
        .join(" ");
      return `<tr data-i="${i}" role="button" tabindex="0" aria-label="Open ${escAttr(p.title)}">
      <td class="c-title">${esc(p.title)}${p.multi ? ' <span class="multi-badge">multi</span>' : ""}</td>
      <td>${p.agent ? esc(p.agent) : '<span class="tg">—</span>'}</td>
      <td class="tg">${tags || "—"}</td>
    </tr>`;
    })
    .join("");
  return `<div class="tablewrap"><table class="compact">
    <thead><tr><th>Title</th><th>Agent</th><th>Tags</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
}

function renderItems(arr) {
  if (view === "compact") return renderTable(arr);
  if (view === "list")
    return `<div class="listview">${arr.map((p) => renderListRow(p, p._i)).join("")}</div>`;
  return `<div class="grid">${arr.map((p) => renderCard(p, p._i)).join("")}</div>`;
}

function groupKey(p) {
  if (groupBy === "agent")
    return p.agent && p.agent.trim()
      ? p.agent.trim()
      : "General / Uncategorized";
  if (groupBy === "category") return p.category || "other";
  return null;
}

// Event delegation: one set of listeners on #list survives every re-render, instead of
// re-wiring a listener onto every card/row/cell each time render() runs.
function setupListDelegation() {
  const list = document.getElementById("list");
  if (!list || list._delegated) return;
  list._delegated = true;
  const openFromEl = (el) => {
    const p = D[+el.dataset.i];
    if (p) open(p);
  };
  list.addEventListener("click", (e) => {
    const favBtn = e.target.closest(".fav");
    if (favBtn) {
      e.stopPropagation();
      const slug = favBtn.dataset.slug;
      if (favorites.has(slug)) favorites.delete(slug);
      else favorites.add(slug);
      localStorage.setItem("pb2-fav", JSON.stringify([...favorites]));
      render();
      toast(
        favorites.has(slug) ? "★ Added to favorites" : "Removed from favorites",
      );
      return;
    }
    const tagEl = e.target.closest(".tag-mini");
    if (tagEl) {
      document.getElementById("q").value = "#" + tagEl.dataset.tag;
      render();
      return;
    }
    const row = e.target.closest("[data-i]");
    if (row) {
      if (compareMode) {
        const p = D[+row.dataset.i];
        if (!p) return;
        if (compareSelection.includes(p.slug))
          compareSelection = compareSelection.filter((s) => s !== p.slug);
        else if (compareSelection.length < 2) compareSelection.push(p.slug);
        else {
          compareSelection = [compareSelection[1], p.slug];
        }
        render();
        if (compareSelection.length === 2) renderCompareDialog();
        return;
      }
      openFromEl(row);
    }
  });
  list.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const row = e.target.closest("[data-i]");
    if (row) {
      e.preventDefault();
      if (compareMode) {
        row.click();
        return;
      }
      openFromEl(row);
    }
  });
}

/* === v3.1 agent cards + drill-down logic === */
const A_ICONS = {
  copilot: `<svg viewBox="0 0 32 32"><defs><linearGradient id="a_cp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#36c5f0"/><stop offset=".4" stop-color="#2eb67d"/><stop offset=".7" stop-color="#e879f9"/><stop offset="1" stop-color="#7c5cff"/></linearGradient></defs><path fill="url(#a_cp)" d="M16 3c1.6 4.7 3.3 6.4 8 8-4.7 1.6-6.4 3.3-8 8-1.6-4.7-3.3-6.4-8-8 4.7-1.6 6.4-3.3 8-8z"/><path fill="url(#a_cp)" d="M25.5 16.5c.9 2.6 1.8 3.5 4.4 4.4-2.6.9-3.5 1.8-4.4 4.4-.9-2.6-1.8-3.5-4.4-4.4 2.6-.9 3.5-1.8 4.4-4.4z"/></svg>`,
  researcher: `<svg viewBox="0 0 32 32"><defs><radialGradient id="a_rs" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="#7cd4ff"/><stop offset=".5" stop-color="#4a7cff"/><stop offset="1" stop-color="#7c3aed"/></radialGradient></defs><circle cx="16" cy="16" r="12" fill="url(#a_rs)"/><path d="M5 16c4-3 18-3 22 0M16 4.2c4 5 4 18.6 0 23.6M5 12.5c5 2 17 2 22 0M5 19.5c5-2 17-2 22 0" fill="none" stroke="#dbeafe" stroke-width="1" opacity=".55"/></svg>`,
  analyst: `<svg viewBox="0 0 32 32"><defs><linearGradient id="a_an" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#a855f7"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs><polyline points="6,22 13,15 19,19 26,9" fill="none" stroke="url(#a_an)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="22" r="3" fill="#c084fc"/><circle cx="13" cy="15" r="3" fill="#d946ef"/><circle cx="19" cy="19" r="3" fill="#ec4899"/><circle cx="26" cy="9" r="3.2" fill="#f472b6"/></svg>`,
  cowork: `<svg viewBox="0 0 32 32"><defs><linearGradient id="a_c1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f59e0b"/><stop offset="1" stop-color="#ef4444"/></linearGradient><linearGradient id="a_c2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10b981"/><stop offset="1" stop-color="#3b82f6"/></linearGradient><linearGradient id="a_c3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#ec4899"/></linearGradient></defs><path d="M16 4l10 4v7c0 7-5 10-10 13C11 25 6 22 6 15V8z" fill="url(#a_c2)"/><path d="M16 4l10 4v7c0 7-5 10-10 13z" fill="url(#a_c1)" opacity=".92"/><path d="M16 4v24C11 25 6 22 6 15V8z" fill="url(#a_c3)" opacity=".55"/></svg>`,
  sales: `<svg viewBox="0 0 32 32"><defs><linearGradient id="a_sl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#38bdf8"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs><rect x="6" y="6" width="13" height="13" rx="4" fill="url(#a_sl)"/><rect x="13" y="13" width="13" height="13" rx="4" fill="url(#a_sl)" opacity=".7"/></svg>`,
  kyp: `<svg viewBox="0 0 32 32"><defs><linearGradient id="a_ky" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a855f7"/><stop offset="1" stop-color="#f97316"/></linearGradient></defs><rect x="4" y="4" width="24" height="24" rx="7" fill="#fff"/><ellipse cx="16" cy="16" rx="8.5" ry="6" fill="none" stroke="url(#a_ky)" stroke-width="2"/><circle cx="16" cy="16" r="3.2" fill="url(#a_ky)"/></svg>`,
  ecif: `<svg viewBox="0 0 32 32"><defs><linearGradient id="a_ec" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs><path fill="url(#a_ec)" d="M18 4 8 17h6l-2 11 12-14h-6z"/></svg>`,
};
const A_META = [
  { name: "Microsoft 365 Copilot", accent: "#7c5cff", icon: "copilot" },
  { name: "Know Your Partner (KYP)", accent: "#f97316", icon: "kyp" },
  { name: "Analyst", accent: "#ec4899", icon: "analyst" },
  { name: "Cowork", accent: "#10b981", icon: "cowork" },
  { name: "Researcher", accent: "#4a7cff", icon: "researcher" },
  { name: "Sales", accent: "#38bdf8", icon: "sales" },
  { name: "ECIF Agent", accent: "#64748b", icon: "ecif", empty: true },
];
const A_DESC = {
  "Microsoft 365 Copilot":
    "Chat-prompts in M365 Copilot — samenvatten, herschrijven, e-mail & doc-output.",
  "Know Your Partner (KYP)":
    "Starter-prompts voor de KYP-agent — partnerbriefings, benchmarks, drill-downs.",
  Analyst: "Data-analyse — ASPXi, MSX, Excel-workbooks en exec-briefings.",
  Cowork: "Cowork automatiseringen — follow-ups, decks en docs.",
  Researcher: "Researcher-agent — sovereignty en marktverdieping.",
  Sales: "Sales-agent prompts voor partnerfocus.",
  "ECIF Agent": "No prompts yet — coming soon.",
};
function clearAgent() {
  activeAgent = null;
  var q = document.getElementById("q");
  if (q) q.value = "";
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function syncAgentView() {
  const cardsBox = document.getElementById("agentCards");
  const heroBox = document.getElementById("agentHero");
  const listBox = document.getElementById("list");
  if (!cardsBox || !heroBox || !listBox) return;
  const q = (document.getElementById("q") || {}).value
    ? document.getElementById("q").value.trim()
    : "";
  const counts = AGENT_COUNTS;
  cardsBox.innerHTML = A_META.map((a) => {
    const n = counts[a.name] || 0;
    const empty = a.empty || n === 0;
    return `<div class="acard${empty ? " empty" : ""}${activeAgent === a.name ? " sel" : ""}" style="--accent:${a.accent}" data-aname="${empty ? "" : esc(a.name)}">
      <div class="aico">${A_ICONS[a.icon]}</div>
      <div class="aname">${esc(a.name)}</div>
      <div class="acount">${empty ? "No prompts yet — coming soon" : n + (n === 1 ? " prompt" : " prompts")}</div></div>`;
  }).join("");
  cardsBox.querySelectorAll(".acard:not(.empty)").forEach(
    (el) =>
      (el.onclick = () => {
        activeAgent = el.dataset.aname;
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }),
  );
  const drilled = activeAgent !== null || q !== "";
  cardsBox.style.display = drilled ? "none" : "";
  listBox.style.display = drilled ? "" : "none";
  const ab2 = document.getElementById("agentBack2");
  if (ab2) ab2.style.display = drilled ? "" : "none";
  if (activeAgent !== null) {
    const a = A_META.find((x) => x.name === activeAgent) || {
      name: activeAgent,
      accent: "#7c5cff",
      icon: "copilot",
    };
    const n = counts[activeAgent] || 0;
    heroBox.style.display = "";
    heroBox.style.setProperty("--accent", a.accent);
    heroBox.innerHTML = `<div class="aback" id="agentBackTop">&larr; Alle agents</div>
      <div class="aheroRow"><div class="aheroIco">${A_ICONS[a.icon].replace(/id="a_/g, 'id="h_').replace(/url\(#a_/g, "url(#h_")}</div>
      <div><h2 class="aheroTitle">${esc(a.name)}</h2><p class="aheroDesc">${A_DESC[a.name] || ""} &middot; ${n} ${n === 1 ? "prompt" : "prompts"}</p></div></div>`;
    heroBox
      .querySelector("#agentBackTop")
      ?.addEventListener("click", clearAgent);
  } else {
    heroBox.style.display = "none";
  }
}
function render() {
  renderCatChips();
  syncAgentView();
  renderInsights();
  updateModChipCounts();
  const cmpBtn = document.getElementById("btnCompareMode");
  if (cmpBtn) cmpBtn.classList.toggle("active", compareMode);
  document
    .querySelectorAll("#viewSeg [data-view]")
    .forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  document
    .querySelectorAll("#groupSeg [data-group]")
    .forEach((b) => b.classList.toggle("active", b.dataset.group === groupBy));
  const filtered = sortItems(applyFilters());
  const list = document.getElementById("list");
  if (filtered.length === 0) {
    list.innerHTML = `<div class="empty"><div class="big">No prompts match your filters</div>Try clearing the search or removing chips.</div>`;
    return;
  }
  if (groupBy === "none") {
    list.innerHTML = renderItems(filtered);
  } else {
    const groups = new Map();
    filtered.forEach((p) => {
      const k = groupKey(p);
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push(p);
    });
    if (groupBy === "agent" && filtered.length === D.length) {
      ["ECIF Agent"].forEach((a) => {
        if (!groups.has(a)) groups.set(a, []);
      });
    }
    const keys = [...groups.keys()].sort((a, b) => {
      if (a === "General / Uncategorized") return 1;
      if (b === "General / Uncategorized") return -1;
      return a.localeCompare(b);
    });
    list.innerHTML = keys
      .map(
        (k) => `<div class="group">
      <div class="group-head">
        <span class="gicon">${groupBy === "agent" ? SVG_BOT_INLINE : ICONS.tag}</span>
        <h2>${esc(k)}</h2><span class="gcount">${groups.get(k).length}</span>
      </div>${groups.get(k).length ? renderItems(groups.get(k)) : `<div class="gempty" style="padding:16px;opacity:.6;font-size:13px;font-style:italic">No prompts yet — coming soon.</div>`}</div>`,
      )
      .join("");
  }
}

function open(p) {
  current = p;
  trackOpen(p.slug);
  saveRecent(p.slug);
  document.getElementById("dt").textContent = p.title;
  const bits = [];
  if (p.agent) bits.push(esc(p.agent));
  if (p.target) bits.push(esc(p.target));
  if (p.language) bits.push(esc(p.language).toUpperCase());
  if (p.lastUsed) bits.push("used " + esc(p.lastUsed));
  else if (p.created) bits.push("created " + esc(p.created));
  if (p.usage) bits.push(p.usage + " uses");
  document.getElementById("dm").innerHTML = bits.join(" · ");

  const uc = document.getElementById("duc");
  if (p.useCase) {
    uc.textContent = p.useCase;
    uc.style.display = "block";
  } else uc.style.display = "none";

  const vars = p.variables || [];
  const vEl = document.getElementById("dvars");
  if (vars.length) {
    vEl.innerHTML =
      '<span style="font-size:.78rem;color:var(--text-muted);margin-right:6px">Variables:</span>' +
      vars.map((v) => `<span class="var">{{${esc(v)}}}</span>`).join("");
    vEl.style.display = "flex";
  } else vEl.style.display = "none";

  document.getElementById("db").textContent =
    p.prompt || "(no prompt body found — open the .md file directly)";

  const chain = document.getElementById("dchain");
  const related = D.filter((x) => x.slug !== p.slug)
    .map((x) => {
      let score = 0;
      if (x.agent && p.agent && x.agent === p.agent) score += 2;
      const tagsA = new Set(p.tags || []);
      (x.tags || []).forEach((t) => {
        if (tagsA.has(t)) score += 1;
      });
      return { prompt: x, score };
    })
    .filter((x) => x.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || a.prompt.title.localeCompare(b.prompt.title),
    )
    .slice(0, 3)
    .map((x) => x.prompt);
  if ((p.oftenAfter || []).length) {
    chain.innerHTML = `<b>${ICONS.chev} Often used after:</b> ${p.oftenAfter.map((x) => esc(x)).join(", ")}`;
  } else chain.innerHTML = "";
  if (related.length) {
    chain.innerHTML += `${chain.innerHTML ? "<br>" : ""}<b>Related:</b> ${related.map((x) => esc(x.title)).join(", ")}`;
  }

  const launch = document.getElementById("dlaunch");
  if (launch) {
    if (p.agentUrl) {
      launch.href = p.agentUrl;
      launch.style.display = "inline-flex";
    } else launch.style.display = "none";
  }
  openDialog("dlg");
  renderInsights();
}

function renderCompareDialog() {
  if (compareSelection.length !== 2) return;
  const [leftSlug, rightSlug] = compareSelection;
  const left = D.find((p) => p.slug === leftSlug);
  const right = D.find((p) => p.slug === rightSlug);
  if (!left || !right) return;
  const grid = document.getElementById("compareGrid");
  if (!grid) return;
  const renderCol = (p) => `<article class="compare-col">
      <h3>${esc(p.title)}</h3>
      <div class="meta">${esc(p.agent || "No agent")} · ${esc((p.tags || []).slice(0, 5).join(", ") || "No tags")}</div>
      <pre>${esc(p.prompt || "")}</pre>
    </article>`;
  grid.innerHTML = renderCol(left) + renderCol(right);
  openDialog("compareDlg");
}

function openRandomPrompt() {
  const items = getFilteredSorted();
  if (!items.length) {
    toast("No prompts match current filters");
    return;
  }
  const p = items[Math.floor(Math.random() * items.length)];
  open(p);
}

function exportFiltered(as) {
  const items = getFilteredSorted();
  if (!items.length) {
    toast("Nothing to export");
    return;
  }
  const stamp = new Date().toISOString().slice(0, 10);
  if (as === "json") {
    downloadText(
      `prompt-book-export-${stamp}.json`,
      JSON.stringify(items, null, 2),
      "application/json",
    );
  } else {
    downloadText(`prompt-book-export-${stamp}.csv`, asCsv(items), "text/csv");
  }
  toast(`Exported ${items.length} prompt${items.length === 1 ? "" : "s"}`);
}

function runCommandPalette() {
  const input = window.prompt(
    "Command: random | export-json | export-csv | compare | reset-filters",
  );
  if (!input) return;
  const cmd = input.trim().toLowerCase();
  if (cmd === "random") openRandomPrompt();
  else if (cmd === "export-json") exportFiltered("json");
  else if (cmd === "export-csv") exportFiltered("csv");
  else if (cmd === "compare") {
    compareMode = true;
    compareSelection = [];
    render();
    toast("Compare mode on: pick 2 prompts");
  } else if (cmd === "reset-filters") {
    const q = document.getElementById("q");
    if (q) q.value = "";
    activeAgent = null;
    mods = { fav: false, rated: false, vars: false, multi: false };
    render();
  } else toast("Unknown command");
}

function downloadFallbackEml(subject, textBody, htmlBody, btn, origLabel) {
  var boundary = "----=_PB_" + Date.now();
  var eml =
    "From: " +
    MAIL_CONFIG.to +
    "\r\nTo: " +
    MAIL_CONFIG.to +
    "\r\nSubject: " +
    subject.replace(/[\r\n]/g, " ") +
    '\r\nX-Unsent: 1\r\nMIME-Version: 1.0\r\nContent-Type: multipart/alternative; boundary="' +
    boundary +
    '"\r\n\r\n--' +
    boundary +
    "\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n" +
    textBody +
    "\r\n\r\n--" +
    boundary +
    "\r\nContent-Type: text/html; charset=utf-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n" +
    htmlBody +
    "\r\n\r\n--" +
    boundary +
    "--\r\n";
  var blob = new Blob([eml], { type: "message/rfc822" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "prompt-book-" + new Date().toISOString().slice(0, 10) + ".eml";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(function () {
    URL.revokeObjectURL(a.href);
  }, 2000);
  if (btn) {
    btn.textContent = "\u26A0 Bridge offline \u2014 .eml downloaded";
    setTimeout(function () {
      btn.innerHTML = origLabel;
      btn.disabled = false;
    }, 4000);
  }
  if (typeof toast === "function")
    toast("Bridge offline \u2014 .eml downloaded");
  return false;
}

document
  .getElementById("dClose")
  .addEventListener("click", () => closeDialog("dlg"));
document.getElementById("dcopy").addEventListener("click", () => {
  if (!current) return;
  withFilledPrompt(current, async (txt) => {
    try {
      await navigator.clipboard.writeText(txt || "");
      toast("Copied to clipboard");
    } catch (e) {
      toast("Copy failed");
    }
  });
});
document.getElementById("dcopilot").addEventListener("click", (e) => {
  e.preventDefault();
  if (!current) return;
  withFilledPrompt(current, (txt) => {
    const txtv = txt || "";
    try {
      navigator.clipboard.writeText(txtv);
    } catch (_) {}
    const enc = encodeURIComponent(txtv);
    const base = "https://m365.cloud.microsoft/chat/";
    const url =
      base.length + 3 + enc.length <= 2000 ? base + "?q=" + enc : base;
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    toast(
      url === base
        ? "Long prompt copied - paste into Copilot (Ctrl+V)"
        : "Opening in Copilot (also copied)",
    );
  });
});

function debounce(fn, wait) {
  let t;
  const debounced = (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(null, args), wait);
  };
  debounced.flush = () => {
    clearTimeout(t);
    fn();
  };
  return debounced;
}
const debouncedRender = debounce(render, 120);
const qEl = document.getElementById("q");
qEl.addEventListener("input", debouncedRender);
// Render immediately on Enter so the top result is actionable without waiting for the debounce.
qEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") debouncedRender.flush();
});
document.getElementById("sort")?.addEventListener("change", (e) => {
  localStorage.setItem("pb4-sort", e.target.value);
  render();
});
document.querySelectorAll("[data-mod]").forEach((b) =>
  b.addEventListener("click", () => {
    mods[b.dataset.mod] = !mods[b.dataset.mod];
    render();
  }),
);
setupListDelegation();
document.getElementById("cmpClose")?.addEventListener("click", () => {
  closeDialog("compareDlg");
});
document
  .getElementById("btnRandom")
  ?.addEventListener("click", openRandomPrompt);
document
  .getElementById("btnExportJson")
  ?.addEventListener("click", () => exportFiltered("json"));
document
  .getElementById("btnExportCsv")
  ?.addEventListener("click", () => exportFiltered("csv"));
document
  .getElementById("btnPalette")
  ?.addEventListener("click", runCommandPalette);
document.getElementById("btnCompareMode")?.addEventListener("click", () => {
  compareMode = !compareMode;
  compareSelection = [];
  render();
  if (compareMode) toast("Compare mode on: pick 2 prompts");
});
document.getElementById("btnSavePreset")?.addEventListener("click", () => {
  const name = window.prompt("Preset name");
  if (!name) return;
  presets[name.trim()] = presetPayload();
  localStorage.setItem("pb4-presets", JSON.stringify(presets));
  renderPresetSelect();
  document.getElementById("presetSelect").value = name.trim();
  toast("Preset saved");
});
document.getElementById("btnDeletePreset")?.addEventListener("click", () => {
  const select = document.getElementById("presetSelect");
  const name = select ? select.value : "";
  if (!name || !presets[name]) return;
  delete presets[name];
  localStorage.setItem("pb4-presets", JSON.stringify(presets));
  renderPresetSelect();
  toast("Preset deleted");
});
document.getElementById("presetSelect")?.addEventListener("change", (e) => {
  const name = e.target.value;
  if (!name || !presets[name]) return;
  applyPreset(presets[name]);
});
document.addEventListener("click", (e) => {
  const openSlug = e.target.closest("[data-open-slug]");
  if (openSlug) {
    const p = D.find((x) => x.slug === openSlug.dataset.openSlug);
    if (p) open(p);
    return;
  }
  const tag = e.target.closest(".cloud-tag");
  if (tag) {
    const q = document.getElementById("q");
    if (q) q.value = "#" + tag.dataset.tag;
    render();
  }
});
const SHORTCUTS = {
  "/": () => {
    document.getElementById("q").focus();
  },
  a: () => {
    if (!anyDialogOpen()) openDialog("addDlg", "#apTitle");
  },
  c: () => {
    if (current && document.getElementById("dlg").open)
      document.getElementById("dcopy").click();
  },
  r: openRandomPrompt,
  k: runCommandPalette,
};
function isTypingTarget(el) {
  return (
    el && (el.matches("input,textarea,select") || el.isContentEditable === true)
  );
}
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    runCommandPalette();
    return;
  }
  const key = e.key === "/" ? "/" : e.key.toLowerCase();
  if (isTypingTarget(e.target)) {
    if (e.key === "Escape") e.target.blur();
    return;
  }
  const handler = SHORTCUTS[key];
  if (!handler) return;
  e.preventDefault();
  handler();
});

/* ───── v3: view + group switchers ───── */
document.querySelectorAll("#viewSeg [data-view]").forEach((b) =>
  b.addEventListener("click", () => {
    view = b.dataset.view;
    localStorage.setItem("pb3-view", view);
    render();
  }),
);
document.querySelectorAll("#groupSeg [data-group]").forEach((b) =>
  b.addEventListener("click", () => {
    groupBy = b.dataset.group;
    localStorage.setItem("pb3-group", groupBy);
    render();
  }),
);

/* ───── v3: fullscreen is owned by the universal CP_CONTROLS block (cpBtnFull + G) ───── */

/* ───── v3: variable placeholder modal ───── */
let varCb = null;
function openVarModal(p, vars, cb) {
  varCb = cb;
  document.getElementById("varTitle").textContent =
    "Fill in variables — " + p.title;
  const form = document.getElementById("varForm");
  form.innerHTML = vars
    .map((v, i) => {
      const last = varStore[v.name];
      const val = last !== undefined && last !== "" ? last : v.def || "";
      return `<label>{{${esc(v.name)}}}
      ${v.hint ? `<span class="var-hint">${esc(v.hint)}</span>` : ""}
      <input type="text" data-var="${escAttr(v.name)}" value="${escAttr(val)}" placeholder="${escAttr(v.def || v.hint || v.name)}" ${i === 0 ? "autofocus" : ""}></label>`;
    })
    .join("");
  openDialog("varDlg");
  const first = form.querySelector("input");
  if (first) setTimeout(() => first.focus(), 30);
}
function varSubmit() {
  const values = {};
  document
    .getElementById("varForm")
    .querySelectorAll("input[data-var]")
    .forEach((inp) => {
      values[inp.dataset.var] = inp.value;
      if (inp.value !== "") varStore[inp.dataset.var] = inp.value;
    });
  localStorage.setItem("pb3-vars", JSON.stringify(varStore));
  closeDialog("varDlg");
  const cb = varCb;
  varCb = null;
  if (cb && current) cb(fillVars(current.prompt || "", values));
}
document.getElementById("varConfirm").addEventListener("click", varSubmit);
document.getElementById("varSkip").addEventListener("click", () => {
  const cb = varCb;
  varCb = null;
  closeDialog("varDlg");
  if (cb && current) cb(current.prompt || "");
});
document.getElementById("varForm").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    varSubmit();
  }
});
document.getElementById("varCancel").addEventListener("click", () => {
  varCb = null;
  closeDialog("varDlg");
});
document.getElementById("varClose").addEventListener("click", () => {
  varCb = null;
  closeDialog("varDlg");
});

/* ───── v3: add prompt modal → mailto ───── */
/* btnAdd removed — addDlg opened via Mail-to-me menu */
(function () {
  var bp = document.getElementById("btnNewPrompt");
  if (bp)
    bp.addEventListener("click", function () {
      openDialog("addDlg", "#apTitle");
    });
  var bf = document.getElementById("btnNewFeat");
  if (bf)
    bf.addEventListener("click", function () {
      openDialog("featDlg", "#frWant");
    });
})();
document
  .getElementById("frClose")
  ?.addEventListener("click", () => closeDialog("featDlg"));
document
  .getElementById("frCancel")
  ?.addEventListener("click", () => closeDialog("featDlg"));
async function pbSendMail(subject, textBody, btn) {
  var orig = btn ? btn.innerHTML : "";
  var htmlBody =
    '<!doctype html><html><body style="font-family:Segoe UI,Arial,sans-serif;font-size:14px;color:#201f1e;line-height:1.5">' +
    textBody
      .split("\n")
      .map(function (l) {
        return l === "" ? "<br>" : typeof esc === "function" ? esc(l) : l;
      })
      .join("<br>") +
    "</body></html>";
  const availability = bridgeAvailability();
  if (!availability.available) {
    setBridgeStatus(
      "disabled",
      availability.reason === "local-only"
        ? "mail client fallback"
        : "disabled",
    );
    if (availability.reason === "local-only") {
      return openMailtoFallback(subject, textBody, btn, orig);
    }
    return downloadFallbackEml(subject, textBody, htmlBody, btn, orig);
  }
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Sending\u2026";
  }
  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    MAIL_CONFIG.requestTimeoutMs,
  );
  const payloads = [
    { to: MAIL_CONFIG.to, subject, htmlBody },
    { to: MAIL_CONFIG.to, subject, textBody, htmlBody },
    { to: MAIL_CONFIG.to, subject, body: textBody, html: htmlBody },
  ];
  try {
    let success = false;
    let lastError = null;
    for (const payload of payloads) {
      const r = await fetch(MAIL_CONFIG.bridgeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        signal: controller.signal,
        body: JSON.stringify(payload),
      });
      const j = await r.json().catch(function () {
        return {};
      });
      if (r.ok && (j.ok === undefined || j.ok === true)) {
        success = true;
        break;
      }
      lastError = new Error(j.error || "HTTP " + r.status);
    }
    clearTimeout(timeout);
    if (!success) throw lastError || new Error("Bridge rejected request");
    setBridgeStatus("online");
    if (btn) {
      btn.textContent = "Sent \u2713";
      setTimeout(function () {
        btn.innerHTML = orig;
        btn.disabled = false;
      }, 2000);
    }
    if (typeof toast === "function") toast("\u2713 Sent");
    return true;
  } catch (err) {
    clearTimeout(timeout);
    setBridgeStatus(
      "offline",
      err && err.name === "AbortError" ? "timeout" : "unreachable",
    );
    scheduleBridgeProbe(15000);
    console.warn("Mail bridge unreachable, fallback to .eml", err);
    return downloadFallbackEml(subject, textBody, htmlBody, btn, orig);
  }
}
document
  .getElementById("frSubmit")
  ?.addEventListener("click", async function () {
    var want = (document.getElementById("frWant") || {}).value || "";
    var today = new Date().toISOString().slice(0, 10);
    var subject = "Prompt Book | Feature request | " + today;
    var body = [
      "Feature request for the Channel Sales FraBeNeLux Frontier PDM | Copilot Prompt Book.",
      "",
      "What I would like:",
      "" + want,
      "",
    ].join("\n");
    await pbSendMail(subject, body, this);
    closeDialog("featDlg");
  });
document
  .getElementById("addClose")
  .addEventListener("click", () => closeDialog("addDlg"));
document
  .getElementById("apCancel")
  .addEventListener("click", () => closeDialog("addDlg"));
document
  .getElementById("apSubmit")
  .addEventListener("click", async function () {
    var g = function (id) {
      var el = document.getElementById(id);
      return el ? (el.value || "").trim() : "";
    };
    var title = g("apTitle");
    if (!title) {
      if (typeof toast === "function") toast("Title is required");
      var t = document.getElementById("apTitle");
      if (t) t.focus();
      return;
    }
    var agent = g("apAgent");
    var body = g("apBody");
    var today = new Date().toISOString().slice(0, 10);
    var fm = [
      "---",
      "title: " + title,
      "agent: " + agent,
      "language: en",
      "created: " + today,
      "last-used:",
      "rating:",
      "---",
      "",
      "## Prompt (optimized)",
      "```",
      body,
      "```",
      "",
    ].join("\n");
    var subject = "[Prompt Book] New prompt: " + title;
    var textBody =
      "New prompt submission for the Channel Sales PDM Prompt Book.\n\nPaste the block below into a new .md file in the prompts folder:\n\n" +
      fm;
    await pbSendMail(subject, textBody, this);
    closeDialog("addDlg");
  });

/* ───── v3: deep-link / share hash ───── */
function openFromHash() {
  const h = decodeURIComponent((location.hash || "").replace(/^#/, ""));
  if (!h) return;
  const p = D.find((x) => slugAnchor(x.slug) === h);
  if (p) {
    open(p);
    const list = document.getElementById("list");
    const el = list.querySelector(`[data-i="${p._i}"]`);
    if (el) {
      el.classList.add("highlight");
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => el.classList.remove("highlight"), 2600);
    }
  }
}
window.addEventListener("hashchange", openFromHash);
document.getElementById("agentBack2")?.addEventListener("click", clearAgent);
document
  .getElementById("retryDataLoad")
  ?.addEventListener("click", async () => {
    try {
      await loadPromptData();
      updateStats();
      render();
      openFromHash();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      setLoadError(message);
    }
  });

(async () => {
  try {
    DIALOG_IDS.forEach(setupDialogA11y);
    setBridgeStatus("checking");
    probeBridge();
    renderPresetSelect();
    await loadPromptData();
    const sort = document.getElementById("sort");
    const savedSort = localStorage.getItem("pb4-sort");
    if (sort && savedSort) sort.value = savedSort;
    updateStats();
    render();
    openFromHash();
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : String(error);
    setLoadError(message);
    toast("Failed to load prompt data");
  }
})();
