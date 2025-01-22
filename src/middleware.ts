import { NextRequest, NextResponse } from "next/server";

const locales = ['en', 'fr'];
const defaultLocale = 'en';

// Get the preferred locale (for simplicity, we return the default locale 'en')
function getLocale(request: NextRequest) {
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale prefix (e.g., /en/products or /fr/products)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If the path already has a locale, just continue
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // If the request is for the root page ("/")
  if (pathname === "/") {
    // Just return the response without modifying anything because we're serving the default language
    return NextResponse.next();
  }

  // If the pathname doesn't have a locale, redirect to the default locale (e.g., /products -> /en/products)
  const locale = getLocale(request);
  if (locale !== defaultLocale) {
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next).*)',  // Match all paths except for internal Next.js assets
  ],
};
