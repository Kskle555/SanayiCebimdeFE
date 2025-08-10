import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    console.log("Login request:", { username, password });

// http://localhost:5002/api/Auth/Login
    const res = await fetch("https://api.sanayicebimde.net/api/Auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include", // cookie'leri göndermek için
      // Önemli: Backend aynı origin değilse CORS ayarları backend’de açık olmalı
    });

    console.log("Login response status:", res.status);
    const text = await res.text();
    console.log("Login response:", text);
    const data = text ? JSON.parse(text) : null;
    console.log("Parsed data:", data);

    if (!res.ok) {
      const msg =
        data?.message ||
        (res.status === 401
          ? "Kullanıcı adı veya şifre hatalı."
          : `Bir hata oluştu (${res.status}).`);
      return NextResponse.json({ message: msg }, { status: res.status });
    }

    // Beklenen: { token: string, user: {...}, refreshToken?: string }
    if (!data?.token) {
      return NextResponse.json(
        { message: "Giriş başarılı görünüyor ama token gelmedi." },
        { status: 500 }
      );
    }

    const response = NextResponse.json({ user: data.user || null }, { status: 200 });

    // === Access Token Cookie ===
    response.cookies.set("token", data.token, {
      httpOnly: true,
      secure: false,           // prod’da true (HTTPS şart) prodda burayı true yapmayı unutma
      sameSite: "lax",        // istersen "strict"
      path: "/",
      maxAge: 60 * 60,        // 1 saat; backend süresine göre ayarla
    });

    // === Refresh Token (varsa) ayrı cookie ===
    if (data.refreshToken) {
      response.cookies.set("refreshToken", data.refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/api",          // sadece refresh endpointleri erişsin
        maxAge: 60 * 60 * 24 * 7, // 7 gün örnek
      });
    }

    return response;
  } catch (err) {
    return NextResponse.json(
      { message: "Sunucu hatası veya beklenmeyen bir durum." },
      { status: 500 }
    );
  }
}
