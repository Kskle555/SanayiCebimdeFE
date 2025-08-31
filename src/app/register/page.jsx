"use client";

import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { User, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Şifreler eşleşmiyor.");
      return;
    }

    setLoading(true);

    try {
  // https://localhost:7173/api/Auth/register
      const response = await fetch("https://api.sanayicebimde.net/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Kayıt başarısız. Lütfen bilgilerinizi kontrol edin." }));
        console.log(`status ${response.status}`);
        throw new Error(errorData.message || `Bir hata oluştu: ${response.statusText}`);
      }

      alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.");
      router.push("/login");

    } catch (err) {
      setError(err.message);
      console.error("Kayıt hatası:", err);
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
              Hesap Oluştur
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Yeni bir hesap oluşturmak için bilgilerinizi girin.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text dark:text-gray-300">Kullanıcı Adı</span></label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="text" placeholder="kullanici.adi" className="input input-bordered w-full pl-10 dark:bg-gray-700 dark:border-gray-600" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text dark:text-gray-300">E-posta</span></label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="email" placeholder="ornek@mail.com" className="input input-bordered w-full pl-10 dark:bg-gray-700 dark:border-gray-600" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text dark:text-gray-300">Şifre</span></label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="password" placeholder="••••••••" className="input input-bordered w-full pl-10 dark:bg-gray-700 dark:border-gray-600" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
              </div>
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text dark:text-gray-300">Şifre Tekrar</span></label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="password" placeholder="••••••••" className="input input-bordered w-full pl-10 dark:bg-gray-700 dark:border-gray-600" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>
            </div>
            
            {error && (
              <div role="alert" className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-full !mt-8" disabled={loading}>
              {loading && <span className="loading loading-spinner"></span>}
              {loading ? "Hesap Oluşturuluyor..." : "Kayıt Ol"}
            </button>

            <div className="text-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Zaten bir hesabın var mı?{' '}
                <Link href="/login" className="link link-primary">
                  Giriş Yap
                </Link>
              </span>
            </div>
                 <div className="text-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
               Anasayfaya geri dönmek için <Link href="/" className="link link-primary">buraya tıklayın</Link>.
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

