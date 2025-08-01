import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("token", "", { httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: 0 });
  res.cookies.set("refreshToken", "", { httpOnly: true, secure: true, sameSite: "lax", path: "/api", maxAge: 0 });
  return res;
}
