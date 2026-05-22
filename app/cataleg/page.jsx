"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppPreferences } from "../components/AppPreferencesProvider";

export default function CatalogPage() {
  const { t } = useAppPreferences();

  const categories = [
    { label: "Fantasy", route: "/catalog/fantasy", descKey: "fantasy", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200" },
    { label: "Science", route: "/catalog/science", descKey: "science", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200" },
    { label: "History", route: "/catalog/history", descKey: "history", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200" },
    { label: "Business", route: "/catalog/business", descKey: "business", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200" },
    { label: "Psychology", route: "/catalog/psychology", descKey: "psychology", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200" },
    { label: "IT", route: "/catalog/it", descKey: "it", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200" },
    { label: "Novels", route: "/catalog/novels", descKey: "novels", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200" },
    { label: "Kids", route: "/catalog/kids", descKey: "kids", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200" },
    { label: "Art", route: "/catalog/art", descKey: "art", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200" },
    { label: "Comics", route: "/catalog/comics", descKey: "comics", image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1200" },
    { label: "Mystery", route: "/catalog/mystery", descKey: "mystery", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200" },
    { label: "Romance", route: "/catalog/romance", descKey: "romance", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200" },
    { label: "Travel", route: "/catalog/travel", descKey: "travel", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200" },
  ];

  return (
    <div className="min-h-screen px-3 pb-10 pt-[92px] md:px-6 md:pt-[104px]">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[#17110c] px-5 py-10 text-white shadow-[0_24px_70px_rgba(19,12,7,0.18)] sm:px-8 sm:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,196,99,0.16),transparent_25%),linear-gradient(135deg,rgba(18,12,8,0.96),rgba(54,34,18,0.88),rgba(119,79,28,0.78))]" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">{t.catalogBadge}</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">{t.catalogTitle}</h1>
            <p className="mt-4 text-base leading-7 text-stone-300 sm:text-lg">{t.catalogText}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((item, index) => (
            <Link key={item.label} href={item.route} className={`${index % 3 === 1 ? "xl:translate-y-8" : ""}`}>
              <article className="group relative min-h-[360px] overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(34,24,12,0.16)]">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c130b]/90 via-[#4a2e16]/65 to-[#ab7527]/65" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-200">
                    Shelf {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-3xl font-black">{item.label}</h2>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-stone-200">{t.catalogCategories[item.descKey]}</p>
                  <div className="mt-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] backdrop-blur">
                    {t.openCategory}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
