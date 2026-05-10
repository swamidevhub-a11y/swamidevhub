import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-gold-gradient text-ink font-bold shadow-gold">
            S
          </span>
          <span className="font-display text-lg leading-tight">
            <span className="text-foreground">Swami</span>{" "}
            <span className="text-gold">Dev Hub</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="relative px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gold-gradient transition-transform duration-300 hover:scale-x-100 data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-ink shadow-gold transition hover:scale-[1.03]"
        >
          Get Quote
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-border text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <div className="container-luxe flex flex-col gap-1 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-md px-4 py-3 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "bg-accent text-foreground" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-gradient px-5 py-3 font-semibold text-ink"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
