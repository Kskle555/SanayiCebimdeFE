import { NextResponse } from "next/server";
import { jwtVerify, createRemoteJWKSet } from "jose";

// --- Ayarlar ---
// HS256 (shared secret) kullanıyorsan:
const HS_SECRET = process.env.JWT_SECRET
  ? new TextEncoder().encode(process.env.JWT_SECRET)
  : null;

// RS256/JWKS kullanıyorsan (backend JWKS endpoint'i):
const JWKS_URL = process.env.JWKS_URL; // ör: "https://your-backend/.well-known/jwks.json"
const JWKS = JWKS_URL ? createRemoteJWKSet(new URL(JWKS_URL)) : null;

// Route → izin verilen roller
const ACCESS_MATRIX = [
  { pattern: /^\/admin(\/.*)?$/, allowed: ["Admin", "Administrator"] },
  { pattern: /^\/Admin(\/.*)?$/, allowed: ["Admin", "Administrator"] },
  { pattern: /^\/manager(\/.*)?$/, allowed: ["Manager", "Admin"] },
  { pattern: /^\/technician(\/.*)?$/, allowed: ["Technician", "Tech", "Admin"] },
  
  // { pattern: /^\/dashboard(\/.*)?$/, allowed: ["User", "Admin", "Manager", "Technician"] },
];

const PUBLIC_PATHS = [
  /^\/login$/,  // login sayfası    
  /^\/register$/,
  /^\/unauthorized$/i, // Büyük/küçük harf duyarsız hale getirildi
  /^\/_next\/.*/,   // Next assetler
  /^\/favicon\.ico$/,
  /^\/api\/(login|logout|refresh)$/, // auth endpointleri public
];

async function verifyJwt(token) {
  try {
    if (JWKS) {
      // RS256 / JWKS
      const { payload } = await jwtVerify(token, JWKS);
      return payload;
    }
    if (HS_SECRET) {
      // HS256
      const { payload } = await jwtVerify(token, HS_SECRET);
      return payload;
    }
    // Doğrulama yapılandırılmadıysa sadece decode etmek riskli olur
    return null;
  } catch {
    return null;
  }
}

function extractRole(payload) {
  if (!payload) return undefined;
  return (
    payload.role ||
    (Array.isArray(payload.roles) ? payload.roles[0] : undefined) ||
    payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
    payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role"]
  );
}

export async function middleware(req) {
   const { pathname } = req.nextUrl;
  // const pathname = req.nextUrl.pathname.toLowerCase();

  // Public path ise izin ver
  if (PUBLIC_PATHS.some((r) => r.test(pathname))) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

  // Token yoksa login'e
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirect", pathname); // istersek geri döndürürüz
   
    return NextResponse.redirect(url);
  }

  // Token var: verify et
  const payload = await verifyJwt(token);
  if (!payload) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // Role çıkar
  const role = extractRole(payload);
console.log("User role:", role);
  // Erişim matrisi kontrolü
  const rule = ACCESS_MATRIX.find((r) => r.pattern.test(pathname));
  console.log("Access rule for path:", pathname, rule);
  if (rule) {
    if (!role || !rule.allowed.includes(role)) {
        console.log("Access denied for role:", role);
      const url = req.nextUrl.clone();
      url.pathname = "/Unauthorized";
      return NextResponse.redirect(url);
    }
  }
  

  // Geç
  return NextResponse.next();
}

export const config = {
  // Koruyacağın pathleri matcher’da belirt
 matcher: [
  "/admin",
  "/admin/:path*",
  "/Admin",
  "/Admin/:path*",
  "/manager",
  "/manager/:path*",
  "/Manager",
  "/Manager/:path*",
  "/technician",
  "/technician/:path*",
  "/Technician",
  "/Technician/:path*",
  "/dashboard",
  "/dashboard/:path*",
  "/Dashboard",
  "/Dashboard/:path*",
]

};
