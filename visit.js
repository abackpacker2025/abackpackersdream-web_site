// Cookie-free visit counter (26 Nov 2026). Sends the page, where the visitor came from and any
// utm_source to our own server, which counts visits per day. Nothing is stored on this device
// (no cookies, no local storage), and the server never keeps the IP address. Taps on the App
// Store and Google Play buttons are counted the same way.
(function () {
  var url = "https://api.abackpackersdream.com.au/api/site/visit";
  function send(kind) {
    try {
      var params = new URLSearchParams(location.search);
      var body = JSON.stringify({
        path: location.pathname,
        referrer: document.referrer || "",
        utm: params.get("utm_source") || "",
        kind: kind
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, new Blob([body], { type: "text/plain" }));
      } else {
        fetch(url, { method: "POST", body: body, keepalive: true, headers: { "Content-Type": "text/plain" } });
      }
    } catch (e) { /* counting must never break the page */ }
  }
  send("view");
  document.addEventListener("click", function (event) {
    var link = event.target && event.target.closest ? event.target.closest("a[href]") : null;
    if (!link) return;
    if (link.href.indexOf("apps.apple.com") !== -1) send("store_ios");
    else if (link.href.indexOf("play.google.com") !== -1) send("store_android");
  }, true);
})();
