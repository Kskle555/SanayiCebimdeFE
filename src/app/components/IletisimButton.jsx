'use client';
import React from 'react';
import { MessageSquare } from 'lucide-react';

const IletisimButton = () => {
  const openModal = () => {
    document.getElementById('contact_modal').showModal();
  };

  return (
    <button onClick={openModal} className="btn bg-blue-600 hover:bg-blue-700 text-white">
      <MessageSquare className="w-4 h-4" /> İletişime Geç
    </button>
  );
};

export default IletisimButton;