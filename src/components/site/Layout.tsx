import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";
import { ScrollProgress } from "./ScrollProgress";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
