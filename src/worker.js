/**
 * projects.notallorder.com — static showcase site.
 * No backend: everything is static assets served from ./public.
 * Deliberately NO Cloudflare Access apps on this hostname — it's public.
 */
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};