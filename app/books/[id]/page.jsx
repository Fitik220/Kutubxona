"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function BookDetailPage() {
  const params = useParams();
  const bookId = params.id;

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAudioModalOpen, setIsAudioModalOpen] = useState(false);

  useEffect(() => {
    if (!bookId) return;
    const fetchBook = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://696b8664624d7ddccaa171f5.mockapi.io/prj/exams/Library");
        const foundBook = response.data.find((item) => item.id === bookId);
        if (foundBook) setBook(foundBook);
        else setError("Kitob topilmadi");
      } catch (err) {
        setError("Xatolik yuz berdi");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [bookId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 pt-[96px]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error || !book) {
    return (
      <div className="min-h-screen px-4 pt-[96px]">
        <div className="section-shell">
          <div className="surface-card rounded-[2rem] p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900">{error || "Kitob topilmadi"}</h1>
            <Link href="/" className="mt-6 inline-flex">
              <button className="rounded-xl bg-[#1A1A1A] px-6 py-3 font-semibold text-white">Bosh sahifa</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 pb-12 pt-[96px]">
      <div className="section-shell">
        <Link href="/" className="mb-6 inline-flex items-center text-gray-500 transition-colors hover:text-amber-700">
          <span className="mr-2">←</span> Orqaga qaytish
        </Link>

        <div className="surface-card overflow-hidden rounded-[2.5rem] p-5 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div className="flex-shrink-0">
              <div className="relative mx-auto h-[360px] w-full max-w-[320px] overflow-hidden rounded-[2rem] shadow-2xl shadow-amber-900/10 sm:h-[460px]">
                <Image src={book.image} alt={book.name} fill priority sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 backdrop-blur">
                  {book.category || "Kitob"}
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                  {book.name}
                </h1>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                    ✍
                  </div>
                  <span className="text-lg font-medium text-gray-600 sm:text-xl">{book.autorname}</span>
                </div>

                <div className="flex flex-wrap items-center gap-6 rounded-[1.5rem] border border-gray-100 bg-white/70 px-5 py-4">
                  <div className="pr-6 sm:border-r sm:border-gray-100">
                    <p className="mb-1 text-sm uppercase tracking-widest text-gray-400">Reyting</p>
                    <p className="text-2xl font-bold text-gray-900">★ {book.star || 0}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-widest text-gray-400">Sahifalar</p>
                    <p className="text-2xl font-bold text-gray-900">{book.pages || 0}</p>
                  </div>
                </div>

                <p className="text-base leading-8 text-gray-500 sm:text-lg">
                  {book.description || "Ushbu kitob haqida ma'lumot tez orada qo'shiladi..."}
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href={`/read/${book.id}`} className="flex-1">
                  <button className="w-full rounded-2xl bg-[#1A1A1A] py-4 text-lg font-bold text-white transition-all shadow-lg shadow-black/10 active:scale-[0.98] hover:bg-black">
                    Mutolaani boshlash
                  </button>
                </Link>
                <button
                  onClick={() => setIsAudioModalOpen(true)}
                  className="flex-1 rounded-2xl border-2 border-gray-100 bg-white py-4 text-lg font-bold text-gray-900 transition-all active:scale-[0.98] hover:border-amber-500 hover:text-amber-700"
                >
                  Audio eshitish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isAudioModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6 backdrop-blur-md transition-all">
          <div className="relative w-full max-w-md rounded-[3rem] bg-white p-7 text-center shadow-2xl sm:p-10">
            <button onClick={() => setIsAudioModalOpen(false)} className="absolute right-8 top-8 text-gray-400 transition-colors hover:text-black">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-[2rem] shadow-xl">
              <Image src={book.image} alt={book.name} fill sizes="160px" className="object-cover" />
            </div>

            <h3 className="mb-2 text-2xl font-bold text-gray-900">{book.name}</h3>
            <p className="mb-8 font-medium text-amber-700">Audiokitob ijrosi</p>

            <div className="mb-6 rounded-[2rem] bg-gray-50 p-6">
              <audio controls className="w-full" preload="metadata">
                <source src="/audio.wav" type="audio/wav" />
                Brauzeringiz audioni qo'llab-quvvatlamaydi.
              </audio>
            </div>

            <button onClick={() => setIsAudioModalOpen(false)} className="w-full py-4 font-medium text-gray-400 transition-colors hover:text-gray-900">
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
