import NavBar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "myBook",
  description: "Zamonaviy onlayn kutubxona va audiokitoblar platformasi.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className="app-shell antialiased min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
