"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ReadBookPage() {
  const { id } = useParams();
  const router = useRouter();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://696b8664624d7ddccaa171f5.mockapi.io/prj/exams/Library");
        const found = response.data.find((b) => b.id === id);

        if (found && found.pdfUrl) {
          const fileId = found.pdfUrl.split("/d/")[1]?.split("/")[0] || found.pdfUrl.split("id=")[1];
          found.pdfUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        }

        setBook(found);
      } catch (err) {
        console.error("Xatolik:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-[#121212] px-4 text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent"></div>
        <p className="mt-4 animate-pulse font-medium">Kitob sahifasi yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div className={`flex h-screen w-full flex-col bg-[#1a1a1a] transition-all ${isFullscreen ? "p-0" : "p-2 pt-[84px] md:p-4 md:pt-[96px]"}`}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#252525] p-3 shadow-2xl backdrop-blur-md md:mb-4 md:p-4">
        <div className="flex min-w-0 items-center gap-3 md:gap-4">
          <button
            onClick={() => router.back()}
            className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-all hover:bg-red-500/20"
          >
            <span className="text-white transition-colors group-hover:text-red-500">←</span>
          </button>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-bold leading-tight text-white md:text-base">{book?.name}</h1>
            <p className="truncate text-[10px] uppercase tracking-[2px] text-gray-400">{book?.autorname}</p>
          </div>
        </div>

        <button
          onClick={toggleFullscreen}
          className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white/10 sm:block"
        >
          {isFullscreen ? "Kichraytirish" : "To'liq ekran"}
        </button>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-[1.5rem] border border-white/5 bg-black shadow-inner md:rounded-[2rem]">
        <iframe
          src={book?.pdfUrl}
          className="h-full w-full grayscale-[0.2] invert-[0.02]"
          title={book?.name}
          allow="autoplay"
        />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
      </div>

      {!isFullscreen && (
        <div className="mt-3 text-center md:mt-4">
          <p className="text-[10px] font-medium uppercase tracking-widest text-gray-500">
            © {new Date().getFullYear()} Barcha huquqlar himoyalangan
          </p>
        </div>
      )}

      <style jsx global>{`
        body {
          overflow: hidden;
          background-color: #121212;
        }
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
