// Serves the static review site from ./site via the ASSETS binding.
// The only dynamic route is the Google Search Console verification file,
// which must return HTTP 200 at its exact path (Cloudflare's default
// static-asset routing would otherwise 307-redirect ".html" URLs, which
// can break Google's file verification).
const GSC_VERIFICATION_PATH = "/googlefabd4cf008fce1c1.html";
const GSC_VERIFICATION_BODY = "google-site-verification: googlefabd4cf008fce1c1.html\n";

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === GSC_VERIFICATION_PATH) {
      return new Response(GSC_VERIFICATION_BODY, {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
