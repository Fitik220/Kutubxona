'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { PiBookmarkSimpleLight } from "react-icons/pi";
import { IoBookmarkSharp } from "react-icons/io5";
import { useAppPreferences } from './AppPreferencesProvider';

export default function BookCard({ book }) {
  const { t } = useAppPreferences();
  const [openAudio, setOpenAudio] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(book?.like || false);
  const [loading, setLoading] = useState(false);

  const handleBookmarkToggle = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (loading) return;

    setLoading(true);

    try {
      const apiUrl = `https://696b8664624d7ddccaa171f5.mockapi.io/prj/exams/Library/${book.id}`;

      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          like: !isBookmarked
        }),
      });

      if (!response.ok) {
        throw new Error('Server error');
      }

      const updatedBook = await response.json();
      setIsBookmarked(updatedBook.like);
    } catch (error) {
      console.error("API error:", error);
      alert(t.bookCardAudioError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="surface-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-4 sm:p-5">
        <button
          onClick={handleBookmarkToggle}
          disabled={loading}
          className="absolute right-6 top-6 z-10 rounded-full bg-white/90 p-2.5 shadow-md backdrop-blur transition-all hover:scale-110 active:scale-95 disabled:opacity-50"
        >
          {isBookmarked ? (
            <IoBookmarkSharp size={22} className="text-yellow-500" />
          ) : (
            <PiBookmarkSimpleLight size={22} className="text-gray-400" />
          )}
        </button>

        <div className="relative mb-5 h-[240px] w-full overflow-hidden rounded-[1.5rem] sm:h-[280px]">
          <Image
            src={book?.image || "https://images.unsplash.com/photo-1544947950-fa07a98d237f"}
            alt={book?.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase text-amber-700 backdrop-blur">
            {book?.category || "Mutolaa"}
          </div>
        </div>

        <div className="space-y-1 px-1">
          <h2 className="truncate text-xl font-bold text-gray-900">{book?.name}</h2>
          <p className="pb-4 font-medium text-gray-500">{book?.autorname}</p>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <Link href={`/books/${book.id}`} className="w-full">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] py-3.5 font-semibold text-white transition-colors hover:bg-black">
              {t.bookCardView}
            </button>
          </Link>

          <button
            onClick={() => setOpenAudio(true)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-gray-50 py-3.5 font-semibold text-gray-700 transition-all hover:border-orange-100 hover:bg-orange-50 hover:text-orange-600"
          >
            {t.bookCardAudio}
          </button>
        </div>
      </div>

      {openAudio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-md" onClick={() => setOpenAudio(false)}>
          <div className="relative w-full max-w-sm rounded-[2.5rem] bg-white p-8 text-center shadow-2xl animate-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setOpenAudio(false)}
              className="absolute right-5 top-5 text-gray-400 transition-colors hover:text-black"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-2xl shadow-lg">
              <Image src={book?.image} alt={book?.name} fill sizes="128px" className="object-cover" />
            </div>

            <h3 className="mb-1 text-xl font-bold text-gray-900">{book?.name}</h3>
            <p className="mb-6 text-sm font-medium text-amber-700">Audiokitob ijrosi</p>

            <div className="rounded-2xl bg-gray-50 p-4">
              {book.audioUrl ? (
                <audio controls className="w-full">
                  <source src={book.audioUrl} type="audio/mpeg" />
                </audio>
              ) : (
                <p className="py-2 text-gray-400">Audio fayl topilmadi</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
