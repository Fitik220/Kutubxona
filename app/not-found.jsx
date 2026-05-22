"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import { useAppPreferences } from "./components/AppPreferencesProvider";

function NotFoundContent() {
  const { t } = useAppPreferences();
  
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <Navbar />

      <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4 mt-50">
        <h1 className="absolute text-[150px] sm:text-[250px] md:text-[400px] font-extrabold text-black opacity-50 select-none animate-pulse">
          404
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 animate-bounce">
          {t.notFoundTitle}
        </h2>

       
        <Link
          href="/"
          className="inline-block bg-black text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300"
        >
          {t.notFoundButton}
        </Link>

        
      </div>

      <Footer />
    </div>
  );
}

export default function NotFound() {
  return <NotFoundContent />;
}