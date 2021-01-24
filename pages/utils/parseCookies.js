import cookie from "cookie";

export function parseCookies(ctx) {
  return cookie.parse(ctx?.req?.headers?.cookie ?? "");
}
