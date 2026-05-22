"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppPreferencesContext = createContext(null);

const dictionaries = {
  uz: {
    brandSubtitle: "Digital Library",
    navHome: "Bosh sahifa",
    navCatalog: "Katalog",
    navFavorites: "Saralanganlar",
    heroBadge: "Premium Reading Experience",
    heroDescription:
      "Bilim, hikoya va audiokitoblarni bir joyda jamlagan zamonaviy kutubxona. Endi sahifalar bosqichma-bosqich ochiladi, mobil ekranlarda sinmaydi va o'qishga qulay ritm beradi.",
    heroPrimary: "O'qishni boshlash",
    heroSecondary: "Saralanganlarni ko'rish",
    heroCard1Title: "Long Scroll Story",
    heroCard1Text: "Kontent endi bitta kichik ekran ichiga siqilmaydi. Har blok alohida nafasi bilan ochiladi.",
    heroCard2Badge: "Tez",
    heroCard2Title: "Qulay",
    heroCard2Text: "Stabil va yengil sahifalar.",
    heroCard3Badge: "Atmosfera",
    heroCard3Title: "Editorial UI",
    heroCard3Text: "Kutubxona ruhidagi premium ko'rinish.",
    statsBooks: "Kitoblar",
    statsUsers: "Foydalanuvchilar",
    statsAuthors: "Mualliflar",
    statsAudio: "Audio format",
    collections: "Collections",
    collectionsTitle: "Janrlar bo'yicha saralash",
    collectionsText: "Endi slider o'rniga ochiq, nafasli va chiroyli grid. Telefonlarda ham har bir karta oson o'qiladi.",
    selectedGenre: "Selected Genre",
    explore: "Explore",
    arrivals: "Fresh arrivals",
    arrivalsTitle: "Yangi asarlar to'xtovsiz qo'shilmoqda",
    arrivalsText: "Sahifalar endi bir-biridan yaxshi ajraladi, bloklar scroll davomida ochiladi va foydalanuvchini bosib yubormaydi.",
    stat24: "Dastur",
    statHd: "Sifat",
    statAi: "Tavsiyalar",
    newsletter: "Newsletter",
    newsletterTitle: "Yangi kitoblarni o'tkazib yubormang",
    newsletterText: "Haftalik eng yaxshi kitoblar va platformadagi yangiliklarni elektron pochtangizga yuboramiz.",
    newsletterPlaceholder: "Emailingizni kiriting",
    newsletterButton: "Obuna bo'lish",
    footerText: "Biz bilan kitoblar olami yanada yaqinroq. O'qing, o'rganing va rivojlaning.",
    company: "Kompaniya",
    about: "Biz haqimizda",
    jobs: "Vakansiyalar",
    privacy: "Maxfiylik siyosati",
    help: "Yordam",
    faq: "FAQ",
    contact: "Bog'lanish",
    guide: "Qo'llanma",
    rights: "Barcha huquqlar himoyalangan.",
    subscriptionSuccess: "Obuna bo'ldingiz! Haftalik yangiliklarni kuting.",
    catalogBadge: "Category Library",
    catalogTitle: "Katalog",
    catalogText: "3D o'rniga stabil, chiroyli va tez ishlaydigan 2D sahifa. Telefonlarda ham, kompyuterda ham sokin va premium ko'rinadi.",
    openCategory: "Open category",
    favoritesTitle: "Saralanganlar",
    loading: "Yuklanmoqda...",
    emptyFavoritesTitle: "Hali hech nima yo'q",
    emptyFavoritesText: "Yoqtirgan kitoblaringiz shu yerda ko'rinadi.",
    categoryBack: "Barcha kategoriyalar",
    categoryLabel: "Category",
    booksCount: "ta kitob",
    categoryEmptyTitle: "Hozircha bu bo'limda kitoblar yo'q",
    categoryEmptyText: "Tez orada yangi adabiyotlar qo'shiladi.",
    backHome: "Bosh sahifaga qaytish",
    systemTheme: "Tizim",
    lightTheme: "Light",
    darkTheme: "Dark",
    cardPreviewTitle: "Dizayn ko'rinishi",
    cardPreviewText: "Bu sahifa endi test va preview uchun xavfsiz variant. Avval shu route ichida komponentning o'zi yotgani sabab build yiqilayotgan edi.",
    notFoundTitle: "Oops! Sahifa topilmadi",
    notFoundButton: "Bosh sahifaga qaytish",
    bookCardView: "Ko'rish",
    bookCardAudio: "Audio tinglash",
    bookCardAudioError: "Saqlashda xatolik yuz berdi. Internet aloqasini tekshirib qayta urinib ko'ring.",
    catalogCategories: {
      fantasy: "Sarguzasht, yangi olamlar va epik voqealar.",
      science: "Ilm-fan, kashfiyot va tushuntirishlar.",
      history: "Tarixiy davrlar va muhim voqealar.",
      business: "Biznes, liderlik va strategiya.",
      psychology: "Odam psixologiyasi va ichki rivojlanish.",
      it: "Texnologiya, dasturlash va raqamli olam.",
      novels: "Badiiy asarlar va kuchli syujetlar.",
      kids: "Bolalar uchun qiziqarli va foydali kitoblar.",
      art: "San'at, dizayn va ilhom manbalari.",
      comics: "Grafik hikoyalar va vizual sarguzashtlar.",
      mystery: "Sirli voqealar va detektiv ruh.",
      romance: "Muhabbat va iliq his-tuyg'ular.",
      travel: "Sayohat taassurotlari va yangi manzillar.",
    },
  },
  ru: {
    brandSubtitle: "Цифровая библиотека",
    navHome: "Главная",
    navCatalog: "Каталог",
    navFavorites: "Избранное",
    heroBadge: "Премиальный опыт чтения",
    heroDescription:
      "Современная библиотека, где книги, истории и аудиокниги собраны в одном месте. Теперь страницы открываются поэтапно, не ломаются на мобильных и дают удобный ритм чтения.",
    heroPrimary: "Начать читать",
    heroSecondary: "Смотреть избранное",
    heroCard1Title: "Длинный scroll-сюжет",
    heroCard1Text: "Контент больше не сжимается в один маленький экран. Каждый блок открывается с воздухом.",
    heroCard2Badge: "Быстро",
    heroCard2Title: "Удобно",
    heroCard2Text: "Стабильные и легкие страницы.",
    heroCard3Badge: "Атмосфера",
    heroCard3Title: "Editorial UI",
    heroCard3Text: "Премиальный визуал в духе библиотеки.",
    statsBooks: "Книги",
    statsUsers: "Пользователи",
    statsAuthors: "Авторы",
    statsAudio: "Аудиоформат",
    collections: "Коллекции",
    collectionsTitle: "Подбор по жанрам",
    collectionsText: "Теперь вместо слайдера открытая, воздушная и красивая сетка. На телефоне каждая карточка читается легко.",
    selectedGenre: "Выбранный жанр",
    explore: "Открыть",
    arrivals: "Новые поступления",
    arrivalsTitle: "Новые книги добавляются постоянно",
    arrivalsText: "Теперь блоки лучше разделены, открываются по мере скролла и не давят на пользователя.",
    stat24: "Сервис",
    statHd: "Качество",
    statAi: "Рекомендации",
    newsletter: "Рассылка",
    newsletterTitle: "Не пропускайте новые книги",
    newsletterText: "Будем отправлять лучшие книги недели и новости платформы на вашу почту.",
    newsletterPlaceholder: "Введите ваш email",
    newsletterButton: "Подписаться",
    footerText: "С нами мир книг становится ближе. Читайте, учитесь и развивайтесь.",
    company: "Компания",
    about: "О нас",
    jobs: "Вакансии",
    privacy: "Политика конфиденциальности",
    help: "Помощь",
    faq: "FAQ",
    contact: "Контакты",
    guide: "Гид",
    rights: "Все права защищены.",
    subscriptionSuccess: "Вы подписались! Ждите еженедельные обновления.",
    catalogBadge: "Библиотека жанров",
    catalogTitle: "Каталог",
    catalogText: "Вместо 3D теперь стабильная, красивая и быстрая 2D-страница. И на телефоне, и на компьютере выглядит спокойно и премиально.",
    openCategory: "Открыть раздел",
    favoritesTitle: "Избранное",
    loading: "Загрузка...",
    emptyFavoritesTitle: "Пока ничего нет",
    emptyFavoritesText: "Понравившиеся книги будут отображаться здесь.",
    categoryBack: "Все категории",
    categoryLabel: "Категория",
    booksCount: "книг",
    categoryEmptyTitle: "Пока в этом разделе нет книг",
    categoryEmptyText: "Скоро здесь появятся новые книги.",
    backHome: "Вернуться на главную",
    systemTheme: "Система",
    lightTheme: "Светлая",
    darkTheme: "Тёмная",
    cardPreviewTitle: "Предпросмотр дизайна",
    cardPreviewText: "Эта страница теперь является безопасным вариантом для тестирования и предпросмотра. Раньше компонент находился внутри самого маршрута, что вызывало ошибки при сборке.",
    notFoundTitle: "Ой! Страница не найдена",
    notFoundButton: "Вернуться домой",
    bookCardView: "Открыть",
    bookCardAudio: "Слушать аудио",
    bookCardAudioError: "Ошибка сохранения. Проверьте подключение к интернету и попробуйте снова.",
    catalogCategories: {
      fantasy: "Приключения, новые миры и эпические события.",
      science: "Наука, открытия и объяснения.",
      history: "Исторические периоды и важные события.",
      business: "Бизнес, лидерство и стратегия.",
      psychology: "Психология человека и личностный рост.",
      it: "Технология, программирование и цифровой мир.",
      novels: "Художественные произведения и захватывающие сюжеты.",
      kids: "Интересные и полезные книги для детей.",
      art: "Искусство, дизайн и источники вдохновения.",
      comics: "Графические истории и визуальные приключения.",
      mystery: "Загадочные события и детективный дух.",
      romance: "Любовь и теплые чувства.",
      travel: "Впечатления от путешествий и новые направления.",
    },
  },
  en: {
    brandSubtitle: "Digital Library",
    navHome: "Home",
    navCatalog: "Catalog",
    navFavorites: "Favorites",
    heroBadge: "Premium Reading Experience",
    heroDescription:
      "A modern library where books, stories, and audiobooks live in one place. Pages now reveal step by step, stay stable on mobile, and feel better to read.",
    heroPrimary: "Start reading",
    heroSecondary: "View favorites",
    heroCard1Title: "Long Scroll Story",
    heroCard1Text: "Content no longer gets squeezed into one tiny screen. Every section now has room to breathe.",
    heroCard2Badge: "Fast",
    heroCard2Title: "Comfort",
    heroCard2Text: "Stable and lightweight pages.",
    heroCard3Badge: "Atmosphere",
    heroCard3Title: "Editorial UI",
    heroCard3Text: "A premium library-inspired visual style.",
    statsBooks: "Books",
    statsUsers: "Users",
    statsAuthors: "Authors",
    statsAudio: "Audio format",
    collections: "Collections",
    collectionsTitle: "Browse by genre",
    collectionsText: "Instead of a slider, you now get an open, airy, and elegant grid. Every card stays readable on phones too.",
    selectedGenre: "Selected Genre",
    explore: "Explore",
    arrivals: "Fresh arrivals",
    arrivalsTitle: "New books keep arriving",
    arrivalsText: "Sections are now clearly separated, reveal on scroll, and no longer overload the user.",
    stat24: "Service",
    statHd: "Quality",
    statAi: "Recommendations",
    newsletter: "Newsletter",
    newsletterTitle: "Don’t miss new books",
    newsletterText: "We’ll send the best books of the week and platform updates to your email.",
    newsletterPlaceholder: "Enter your email",
    newsletterButton: "Subscribe",
    footerText: "With us, the world of books becomes closer. Read, learn, and grow.",
    company: "Company",
    about: "About us",
    jobs: "Careers",
    privacy: "Privacy policy",
    help: "Help",
    faq: "FAQ",
    contact: "Contact",
    guide: "Guide",
    rights: "All rights reserved.",
    subscriptionSuccess: "You’re subscribed! Expect weekly updates.",
    catalogBadge: "Category Library",
    catalogTitle: "Catalog",
    catalogText: "Instead of 3D, you now have a stable, stylish, and fast 2D page. It feels calm and premium on both mobile and desktop.",
    openCategory: "Open category",
    favoritesTitle: "Favorites",
    loading: "Loading...",
    emptyFavoritesTitle: "Nothing here yet",
    emptyFavoritesText: "The books you like will appear here.",
    categoryBack: "All categories",
    categoryLabel: "Category",
    booksCount: "books",
    categoryEmptyTitle: "There are no books in this section yet",
    categoryEmptyText: "New titles will be added soon.",
    backHome: "Back to home",
    systemTheme: "System",
    lightTheme: "Light",
    darkTheme: "Dark",
    cardPreviewTitle: "Design Preview",
    cardPreviewText: "This page is now a safe variant for testing and previewing. Previously, the component lived inside the route itself, which caused build errors.",
    notFoundTitle: "Oops! Page not found",
    notFoundButton: "Go back home",
    bookCardView: "View",
    bookCardAudio: "Listen to audio",
    bookCardAudioError: "Error saving. Check your internet connection and try again.",
    catalogCategories: {
      fantasy: "Adventures, new worlds, and epic events.",
      science: "Science, discoveries, and explanations.",
      history: "Historical periods and important events.",
      business: "Business, leadership, and strategy.",
      psychology: "Human psychology and personal growth.",
      it: "Technology, programming, and the digital world.",
      novels: "Literary works and compelling stories.",
      kids: "Interesting and helpful books for children.",
      art: "Art, design, and sources of inspiration.",
      comics: "Graphic stories and visual adventures.",
      mystery: "Mysterious events and detective spirit.",
      romance: "Love and warm feelings.",
      travel: "Travel impressions and new destinations.",
    },
  },
};

export function AppPreferencesProvider({ children }) {
  const [theme, setTheme] = useState("system");
  const [language, setLanguage] = useState("uz");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("mybook-theme");
    const storedLanguage = localStorage.getItem("mybook-language");

    if (storedTheme) setTheme(storedTheme);
    if (storedLanguage) setLanguage(storedLanguage);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("mybook-theme", theme);

    const resolvedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    document.body.dataset.theme = resolvedTheme;
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("mybook-language", language);
    document.documentElement.lang = language;
  }, [language, mounted]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      language,
      setLanguage,
      t: dictionaries[language] || dictionaries.uz,
    }),
    [theme, language]
  );

  return <AppPreferencesContext.Provider value={value}>{children}</AppPreferencesContext.Provider>;
}

export function useAppPreferences() {
  const context = useContext(AppPreferencesContext);

  if (!context) {
    throw new Error("useAppPreferences must be used inside AppPreferencesProvider");
  }

  return context;
}
