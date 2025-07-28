'use client';
import React, { useState } from 'react';
import { Mail, User, CheckCircle, XCircle, Phone } from 'lucide-react';

const IletisimModal = ({ ustaName }) => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedbackMessage('');

    // API çağrısını simüle et
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Başarı veya hata durumunu test etmek için bunu değiştirebilirsiniz
    const isSuccess = true; 

    if (isSuccess) {
      setStatus('success');
      setFeedbackMessage('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapılacaktır.');
    } else {
      setStatus('error');
      setFeedbackMessage('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setFeedbackMessage('');
  };

  const closeModal = () => {
    const modal = document.getElementById('contact_modal');
    if (modal) {
      modal.close();
    }
    // Modal kapanma animasyonundan sonra formu sıfırla
    setTimeout(() => {
      resetForm();
    }, 300);
  };

  return (
    <dialog id="contact_modal" className="modal">
      <div className="modal-box bg-white">
        <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        
        <h3 className="font-bold text-lg mb-4 text-slate-800">
          {status === 'idle' || status === 'submitting' ? `${ustaName} ile İletişime Geç` : 'Bilgilendirme'}
        </h3>

        {status === 'submitting' && (
          <div className="flex flex-col items-center justify-center min-h-[250px]">
            <span className="loading loading-spinner loading-lg text-blue-600"></span>
            <p className="mt-4 text-slate-600">Gönderiliyor...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="flex flex-col items-center justify-center text-center min-h-[250px]">
            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
            <p className="text-slate-700">{feedbackMessage}</p>
            <button onClick={closeModal} className="btn bg-green-500 hover:bg-green-600 text-white mt-6">Kapat</button>
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center justify-center text-center min-h-[250px]">
            <XCircle className="w-16 h-16 text-red-500 mb-4" />
            <p className="text-slate-700">{feedbackMessage}</p>
            <button onClick={resetForm} className="btn bg-blue-600 hover:bg-blue-700 text-white mt-6">Tekrar Dene</button>
          </div>
        )}

        {status === 'idle' && (
         <form onSubmit={handleSubmit} className="space-y-5">
    <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
      <User className="w-5 h-5 text-gray-500" />
      <input
        type="text"
        className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
        placeholder="Adınız Soyadınız"
        required
      />
    </label>

    <label className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">
      <Mail className="w-5 h-5 text-gray-500" />
      <input
        type="email"
        className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
        placeholder="Email Adresiniz"
        required
      />
    </label>

    <label className='flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition'>
        <Phone className="w-5 h-5 text-gray-500" />
        <input
          type="tel"
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
          placeholder="Telefon Numaranız"
          required
        />
    </label>

    <textarea
      className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition outline-none"
      placeholder="Mesajınız..."
      rows="4"
      required
    ></textarea>

    <div className="text-end">
      <button
        type="submit"
        className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
      >
        Gönder
      </button>
    </div>
  </form>
        )}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>kapat</button>
      </form>
    </dialog>
  );
};

export default IletisimModal;