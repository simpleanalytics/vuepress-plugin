/* global domain, eventsGlobal, skipDnt */

export default ({ router }) => {
  // Simple Analytics integration
  if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
    (function(s, i, m, p, l, e) {
      s[eventsGlobal] =
        s[eventsGlobal] ||
        function(a) {
          s[eventsGlobal].q
            ? s[eventsGlobal].q.push(a)
            : (s[eventsGlobal].q = [a]);
        };

      const dnt = s.doNotTrack || m.doNotTrack || m.msDoNotTrack;

      if (!skipDnt && /yes|1/.test(dnt)) {
        return console.warn(
          "Simple Analytics: Not loading script when doNotTrack is enabled"
        );
      }

      l = i.createElement(p);
      l.async = "true";
      l.src = `https://${domain}/latest.js`;
      l.type = "text/javascript";
      l.setAttribute("data-skip-dnt", "true");
      if (eventsGlobal && eventsGlobal !== "sa_event")
        l.setAttribute("data-sa-global", eventsGlobal);
      e = i.getElementsByTagName(p)[0];
      e.parentNode.insertBefore(l, e);
    })(window, document, navigator, "script");
  } else {
    return console.warn("Simple Analytics: Not loading script in development");
  }
};
