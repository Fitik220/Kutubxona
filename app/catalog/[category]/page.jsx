"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BookCard from "@/app/components/BookCard";
import Link from "next/link";

export default function CategoryPage() {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch(
          "https://696b8664624d7ddccaa171f5.mockapi.io/prj/exams/Library"
        );
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.log("ERROR:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book?.category?.toLowerCase().trim() ===
      category?.toLowerCase().trim()
  );

  if (loading) {
    return (
      <div className="min-h-screen px-4 pb-12 pt-[96px]">
        <div className="section-shell">
          <div className="h-10 w-56 animate-pulse rounded-xl bg-gray-200"></div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[390px] animate-pulse rounded-[2rem] bg-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 pb-12 pt-[96px]">
      <div className="section-shell">
        <div className="surface-card mb-8 rounded-[2rem] p-6 sm:p-8">
          <Link href="/cataleg" className="inline-block text-sm font-semibold uppercase tracking-[0.24em] text-amber-700 transition hover:opacity-70">
            ← Barcha kategoriyalar
          </Link>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8f7a58]">Category</p>
              <h1 className="mt-2 text-4xl font-black capitalize tracking-tight text-[#24180d] md:text-5xl">
                {category}
              </h1>
            </div>
            <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-500 shadow-sm">
              {filteredBooks.length} ta kitob
            </span>
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <div className="surface-card rounded-[2rem] p-10 text-center sm:p-16">
            <span className="block text-5xl">📚</span>
            <h2 className="mt-5 text-2xl font-bold text-gray-800">Hozircha bu bo'limda kitoblar yo'q</h2>
            <p className="mt-2 text-gray-500">Tez orada yangi adabiyotlar qo'shiladi.</p>
            <Link href="/" className="inline-flex">
              <button className="mt-8 rounded-xl bg-[#1A1A1A] px-8 py-3 font-bold text-white">
                Bosh sahifaga qaytish
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
