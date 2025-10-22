import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "keurig-k",
  "black-decker",
  "lavazza-super-crema",
  "hamilton-beach-flexbre",
  "hot-iced-coffee-maker",
  "casabrews-cm5418-espresso",
  "bloom-nutrition-milk-frother",
  "keurig-k-duo-hot-iced-single-serve",
  "ninja-luxe-cafe-3-in-1-espresso",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://dintolux.com")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/reviews/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("app", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/lab"],
};
