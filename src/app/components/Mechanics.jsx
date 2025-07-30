"use client"
import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Mechanics() {

const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "Admin") {
      router.replace("/unauthorized"); // veya "/"
      alert("Bu sayfayı görüntülemek için yetkiniz yok.");
    }
  }, []);
  return (
    <div>Mechanics</div>
  )
}
