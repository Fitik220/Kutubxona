"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppPreferences } from "./components/AppPreferencesProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function RevealSection({ children, className = "" }) {
  return (
<section className={`reveal-section ${className}`} data-reveal>
      {children}
    </section>
  );
}

export default function Home() {
  const { t } = useAppPreferences();

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const Obuna = (e) => {
    e.preventDefault();
    alert(t.subscriptionSuccess);
  };

  const categories = [
    { id: 1, title: "Biznes", slug: "business", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200", tone: "from-[#2c1d0d] to-[#8a5b20]" },
    { id: 2, title: "Detektiv", slug: "detective", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200", tone: "from-[#161616] to-[#50443c]" },
    { id: 3, title: "Psixologiya", slug: "psychology", image: "https://avatars.mds.yandex.net/i?id=38d92a84d55a175e6dd816f589eb28702f6105f5-5325302-images-thumbs&n=13", tone: "from-[#3a2714] to-[#9c7444]" },
    { id: 4, title: "Fantastika", slug: "scifi", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1200", tone: "from-[#111827] to-[#22476e]" },
    { id: 5, title: "Tarix", slug: "history", image: "https://avatars.mds.yandex.net/i?id=4e4adc23bcd99498653fc639dde5581ac93299a0-5194807-images-thumbs&n=13", tone: "from-[#24180e] to-[#7f5b34]" },
    { id: 6, title: "Roman", slug: "novels", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200", tone: "from-[#24150d] to-[#944b36]" },
  ];

  const stats = [
    { label: t.statsBooks, value: "1000+" },
    { label: t.statsUsers, value: "500+" },
    { label: t.statsAuthors, value: "100+" },
    { label: t.statsAudio, value: "350+" },
  ];

  return (
    <div className="pb-12 pt-[92px] text-gray-900 md:pt-[104px]">
      <RevealSection className="section-shell">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[#18110b] px-5 py-10 text-white shadow-[0_30px_80px_rgba(26,17,6,0.22)] sm:px-8 sm:py-14 lg:min-h-[92vh] lg:px-12 lg:py-18">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2200"
              alt="Library background"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,207,112,0.30),transparent_28%),linear-gradient(135deg,rgba(10,8,6,0.92),rgba(34,24,12,0.72),rgba(94,58,14,0.74))]" />

          <div className="relative z-10 grid min-h-[72vh] gap-10 content-between lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl self-start pt-6 sm:pt-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-amber-100 backdrop-blur">
                {t.heroBadge}
              </div>
              <h1 className="text-balance text-5xl font-black tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                myBook
              </h1>
              <p className="mt-6 max-w-2xl text-balance text-base leading-7 text-stone-200 sm:text-lg md:text-xl">
                {t.heroDescription}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/cataleg" className="inline-flex">
                  <button className="w-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-600 px-7 py-4 text-base font-bold text-[#20150a] transition hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(245,158,11,0.28)]">
                    {t.heroPrimary}
                  </button>
                </Link>
                <Link href="/like" className="inline-flex">
                  <button className="w-full rounded-full border border-white/15 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15">
                    {t.heroSecondary}
                  </button>
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-2 lg:items-end">
              <div className="rounded-[1.9rem] border border-white/10 bg-white/10 p-5 backdrop-blur lg:col-span-2">
                <p className="text-xs uppercase tracking-[0.24em] text-amber-200">New Layout</p>
                <p className="mt-3 text-3xl font-black">{t.heroCard1Title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-200">{t.heroCard1Text}</p>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-black/20 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-amber-200">{t.heroCard2Badge}</p>
                <p className="mt-3 text-3xl font-black">{t.heroCard2Title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-200">{t.heroCard2Text}</p>
              </div>
              <div className="rounded-[1.8rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-amber-200">{t.heroCard3Badge}</p>
                <p className="mt-3 text-3xl font-black">{t.heroCard3Title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-200">{t.heroCard3Text}</p>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell mt-8 sm:mt-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="surface-card rounded-[1.6rem] p-5 text-center sm:p-6">
              <h3 className="text-3xl font-black text-amber-700 md:text-4xl">{stat.value}</h3>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7c705f]">{stat.label}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      <RevealSection className="section-shell mt-20 sm:mt-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">{t.collections}</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#251b12] md:text-5xl">
            {t.collectionsTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#6f6559]">{t.collectionsText}</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1280: { slidesPerView: 3, spaceBetween: 16 },
          }}
          className="!pb-4"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link href={`/catalog/${cat.slug}`}>
                <div className="group relative min-h-[380px] overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(34,24,12,0.16)]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                 <div className={`absolute inset-0 bg-gradient-to-br ${cat.tone} opacity-80 transition group-hover:opacity-70`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-200">{t.selectedGenre}</p>
                    <h3 className="text-3xl font-black sm:text-4xl">{cat.title}</h3>
                    <span className="mt-4 inline-block rounded-full bg-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] backdrop-blur">
                      {t.explore}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </RevealSection>

      <RevealSection className="section-shell mt-20 sm:mt-24">
        <div className="grid gap-6 rounded-[2rem] bg-[#17110c] px-5 py-8 text-white shadow-[0_24px_70px_rgba(19,12,7,0.18)] sm:px-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">{t.arrivals}</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              {t.arrivalsTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-stone-300">{t.arrivalsText}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                { title: "24/7", label: t.stat24 },
                { title: "HD", label: t.statHd },
                { title: "AI", label: t.statAi },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4">
                  <p className="text-2xl font-black">{item.title}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-stone-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              direction="vertical"
              spaceBetween={16}
              slidesPerView={3}
              className="h-[480px] sm:h-[480px] w-full max-w-sm"
            >
              {categories.slice(0, 4).map((cat) => (
                <SwiperSlide key={cat.id}>
                  <div className="relative overflow-hidden rounded-[1.8rem] h-full">
                    <div className="relative h-full">
                      <Image src={cat.image} alt={cat.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell mt-20 sm:mt-24">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-500 px-5 py-10 sm:px-8 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#513400]">{t.newsletter}</p>
            <h2 className="mt-3 text-balance text-3xl font-black text-white sm:text-4xl">
              {t.newsletterTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-amber-50">{t.newsletterText}</p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={t.newsletterPlaceholder}
                className="min-w-0 flex-1 rounded-full border border-white/40 bg-white/90 px-6 py-4 text-base text-[#1f170e] outline-none"
              />
              <button
                className="rounded-full bg-[#1f170e] px-8 py-4 font-bold text-white transition hover:bg-[#110c08]"
                onClick={Obuna}
              >
                {t.newsletterButton}
              </button>
            </form>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell mt-20 sm:mt-24">
        <footer className="surface-card rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <h3 className="text-3xl font-black text-amber-700">myBook</h3>
              <p className="mt-4 max-w-md text-base leading-7 text-[#6b6257]">{t.footerText}</p>
              <div className="mt-6 flex gap-3">
                {["TG", "IG", "FB"].map((item) => (
                  <div key={item} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2e7d4] font-semibold text-[#5e4418] transition hover:bg-amber-500 hover:text-white">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#23180e]">{t.company}</h4>
              <ul className="mt-5 space-y-3 text-[#6b6257]">
                <li className="cursor-pointer transition hover:text-amber-700">{t.about}</li>
                <li className="cursor-pointer transition hover:text-amber-700">{t.jobs}</li>
                <li className="cursor-pointer transition hover:text-amber-700">{t.privacy}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#23180e]">{t.help}</h4>
              <ul className="mt-5 space-y-3 text-[#6b6257]">
                <li className="cursor-pointer transition hover:text-amber-700">{t.faq}</li>
                <li className="cursor-pointer transition hover:text-amber-700">{t.contact}</li>
                <li className="cursor-pointer transition hover:text-amber-700">{t.guide}</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-[#eadfce] pt-6 text-center text-sm text-[#8a7b68]">
            © 2026 myBook Inc. {t.rights}
          </div>
        </footer>
      </RevealSection>
    </div>
  );
}
