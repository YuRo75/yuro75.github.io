window.PB_CONFIG = window.PB_CONFIG || {};
window.PB_CONFIG.mail = Object.assign(
  {
    to: "yuriroos@outlook.com",
    bridgeUrl: "",
    healthUrl: "",
    requestTimeoutMs: 6000,
    // Disabled on the hosted copy: the mail bridge runs on localhost only.
    enabled: false,
  },
  window.PB_CONFIG.mail || {},
);
