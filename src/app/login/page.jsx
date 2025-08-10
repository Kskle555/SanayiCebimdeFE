"use client";

import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { User, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";





export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();








  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {


      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        credentials: "include", // cookie'leri göndermek için
      });

     const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Giriş başarısız.");
        throw new Error(data.message || "Giriş başarısız.");
        
      }
      console.log("Giriş başarılı:", data);
      console.log("jwt secret exists", !!process.env.JWT_SECRET);
      router.push("/");

    } catch (err) {
      setError(err.message);
      console.error("Giriş hatası:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md mx-4 bg-white dark:bg-gray-800">
        <CardContent>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Giriş Yap
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Hesabınıza erişmek için bilgilerinizi girin.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-gray-300">Kullanıcı Adı</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="kullanici.adi"
                  className="input input-bordered w-full pl-10 dark:bg-gray-700 dark:border-gray-600"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text dark:text-gray-300">Şifre</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 dark:bg-gray-700 dark:border-gray-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover dark:text-blue-400">
                  Şifremi unuttum
                </Link>
              </label>
            </div>
            
            {error && (
              <div role="alert" className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
              </div>
            )}

            

            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading && <span className="loading loading-spinner"></span>}
              {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </button>

            <div className="text-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Hesabın yok mu?{' '}
                <Link href="/register" className="link link-primary">
                  Kayıt Ol
                </Link>
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
