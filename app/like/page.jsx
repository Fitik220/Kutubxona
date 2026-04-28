"use client";

import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

export default function LikePage() {
  const [likedBooks, setLikedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLikedBooks = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://696b8664624d7ddccaa171f5.mockapi.io/prj/exams/Library"
      );
      const data = await response.json();
      const filtered = data.filter((book) => book.like === true);
      setLikedBooks(filtered);
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLikedBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 pt-[96px]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-t-4 border-solid border-yellow-500"></div>
          <p className="font-medium text-gray-500">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 pb-12 pt-[96px]">
      <div className="section-shell">
        <div className="surface-card mb-8 rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              <h1 className="text-4xl font-black uppercase tracking-tighter text-gray-900">
                Saralanganlar
              </h1>
              <div className="mb-2 h-2 w-2 rounded-full bg-yellow-500"></div>
            </div>
            <span className="text-lg font-bold text-gray-500">
              {likedBooks.length} ta kitob
            </span>
          </div>
        </div>

        {likedBooks.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {likedBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="surface-card flex flex-col items-center justify-center rounded-[2rem] py-16 text-center sm:py-20">
            <div className="mb-4 text-6xl">❤</div>
            <h2 className="text-2xl font-bold text-gray-900">Hali hech nima yo'q</h2>
            <p className="mt-2 text-gray-500">Yoqtirgan kitoblaringiz shu yerda ko'rinadi.</p>
          </div>
        )}
      </div>
    </div>
  );
}
