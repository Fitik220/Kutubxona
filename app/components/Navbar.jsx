"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <nav className="fixed inset-x-0 top-0 z-50 h-[76px]"></nav>;
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
      <div className="section-shell">
        <div className="surface-card rounded-[1.75rem] px-4 py-3 md:px-6">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-700 text-sm font-black text-[#22170a] shadow-lg shadow-amber-900/15">
                MB
              </div>
              <div>
                <p className="text-lg font-black tracking-tight text-[#1f170e] md:text-xl">myBook</p>
                <p className="hidden text-[11px] uppercase tracking-[0.28em] text-[#8b6c3c] md:block">
                  Digital Library
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              <Link href="/" className="rounded-full px-4 py-2 text-sm font-semibold text-[#4d3a1f] transition hover:bg-white hover:text-[#1c150d]">
                Bosh sahifa
              </Link>
              <Link href="/cataleg" className="rounded-full bg-[#1f170e] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#362818]">
                Katalog
              </Link>
              <Link href="/like" className="rounded-full px-4 py-2 text-sm font-semibold text-[#4d3a1f] transition hover:bg-white hover:text-[#1c150d]">
                Saralanganlar
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1f170e] text-white md:hidden"
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <span className="relative block h-4 w-5">
                <span className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}></span>
                <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}></span>
              </span>
            </button>
          </div>

          <div className={`grid overflow-hidden transition-all duration-300 md:hidden ${isOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"}`}>
            <div className="min-h-0">
              <div className="flex flex-col gap-2 border-t border-[#d8cbb8] pt-4">
                <Link href="/" onClick={() => setIsOpen(false)} className="rounded-2xl bg-white px-4 py-3 font-semibold text-[#2a2013]">
                  Bosh sahifa
                </Link>
                <Link href="/cataleg" onClick={() => setIsOpen(false)} className="rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 px-4 py-3 font-semibold text-[#1f170e]">
                  Katalog
                </Link>
                <Link href="/like" onClick={() => setIsOpen(false)} className="rounded-2xl bg-white px-4 py-3 font-semibold text-[#2a2013]">
                  Saralanganlar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
