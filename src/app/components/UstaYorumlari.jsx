'use client';
import React from 'react';

const UstaYorumlari = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return (
      <div className="card bg-white shadow-lg">
        <div className="card-body">
          <h3 className="card-title">Müşteri Yorumları</h3>
          <p className="text-slate-500">Bu usta için henüz yorum yapılmamış.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-white shadow-lg">
      <div className="card-body">
        <h3 className="card-title mb-4">Müşteri Yorumları ({comments.length})</h3>
        <div className="space-y-6">
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0">
              <div className="flex items-center mb-2">
                <div className="font-semibold text-slate-800">{comment.user}</div>
                <div className="rating rating-sm ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-comment-${index}`}
                      className="mask mask-star-2 bg-amber-400"
                      disabled
                      checked={i + 1 === comment.rating}
                    />
                  ))}
                </div>
              </div>
              <p className="text-slate-600">"{comment.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UstaYorumlari;
