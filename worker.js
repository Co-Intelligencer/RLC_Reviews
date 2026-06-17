// Serves the static review site from ./site via the ASSETS binding.
// Search-engine ownership-verification files are returned directly with
// HTTP 200 at their exact paths, bypassing Cloudflare's default
// static-asset routing (which 307-redirects ".html" URLs and could
// otherwise interfere with a verifier's fetch).
const VERIFICATION_FILES = {
  "/googlefabd4cf008fce1c1.html": {
    contentType: "text/html; charset=utf-8",
    body: "google-site-verification: googlefabd4cf008fce1c1.html\n",
  },
  "/BingSiteAuth.xml": {
    contentType: "application/xml; charset=utf-8",
    body: '<?xml version="1.0"?>\n<users>\n\t<user>244DEF115E96113D9F694CE8693ABD6C</user>\n</users>\n',
  },
};

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    const file = VERIFICATION_FILES[pathname];
    if (file) {
      return new Response(file.body, {
        headers: { "content-type": file.contentType },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
