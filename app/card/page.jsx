"use client";

import Link from "next/link";
import BookCard from "../components/BookCard";

const demoBook = {
  id: "demo-card",
  name: "Design Preview",
  autorname: "myBook Studio",
  category: "Preview",
  image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200",
  like: false,
  audioUrl: "",
};

export default function CardPreviewPage() {
  return (
    <div className="min-h-screen px-4 pb-12 pt-[96px]">
      <div className="section-shell">
        <div className="surface-card rounded-[2rem] p-6 sm:p-8">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700 transition hover:opacity-70">
            ← Bosh sahifaga qaytish
          </Link>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-[#24180d] sm:text-4xl">
            Card Preview
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[#6f6559]">
            Bu sahifa endi test va preview uchun xavfsiz variant. Avval shu route ichida komponentning o'zi yotgani sabab build yiqilayotgan edi.
          </p>
        </div>

        <div className="mt-8 max-w-sm">
          <BookCard book={demoBook} />
        </div>
      </div>
    </div>
  );
}
