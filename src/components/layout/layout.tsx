import { Navbar } from "./navbar";
import { BrandFinish } from "./brand-finish";
import { Footer } from "./footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main id="main" className="flex-1 flex flex-col">{children}</main>
      <BrandFinish />
      <Footer />
    </div>
  );
}
