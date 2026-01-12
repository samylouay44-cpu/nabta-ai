import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata = {
  title: "NABTA — Greenhouse Produce & Seedling Nursery",
  description: "NABTA supplies high-quality seedlings and greenhouse produce in Egypt with consistent standards and reliable delivery.",
  metadataBase: new URL("https://nabta.netlify.app")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
