'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ShieldAlert } from 'lucide-react';
import { Card, CardContent } from '@/app/components/ui/card';

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md mx-4 bg-white dark:bg-gray-800 text-center p-8">
        <CardContent>
          <div className="flex justify-center mb-6">
            <ShieldAlert className="w-16 h-16 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Yetkisiz Erişim
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Üzgünüz, bu sayfayı görüntüleme yetkiniz bulunmamaktadır.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.back()}
              className="btn btn-outline w-full sm:w-auto"
            >
              Geri Dön
            </button>
            <Link href="/" className="btn btn-primary w-full sm:w-auto">
              Anasayfaya Git
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
