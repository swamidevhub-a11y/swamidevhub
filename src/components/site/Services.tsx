import { Reveal, SectionTitle } from "./Reveal";
import { Globe, Layers, ShoppingBag, FileText, User, RefreshCw, Wrench, Server, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const services = [
  { Icon: Globe, title: "Static Websites", desc: "Lightning-fast, SEO-ready brochure sites built with modern tooling." },
  { Icon: Layers, title: "Dynamic Websites", desc: "Database-driven platforms tailored to your business workflows." },
  { Icon: ShoppingBag, title: "E-commerce", desc: "Conversion-optimized stores with secure payments and analytics." },
  { Icon: FileText, title: "Landing Pages", desc: "High-converting pages engineered for ad campaigns and launches." },
  { Icon: User, title: "Portfolio Websites", desc: "Elegant personal brands for creators, founders and consultants." },
  { Icon: RefreshCw, title: "Website Redesign", desc: "Re-imagine outdated sites with modern UX and brand identity." },
  { Icon: Wrench, title: "Maintenance", desc: "Proactive monitoring, updates and performance tuning." },
  { Icon: Server, title: "Domain & Hosting", desc: "Premium hosting setup with SSL, CDN and enterprise reliability." },
  { Icon: MapPin, title: "Google Business", desc: "Local SEO, GMB setup and review systems that drive footfall." },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-luxe">
        <SectionTitle
          eyebrow="Core Services"
          title={<>Everything your brand needs <span className="text-gold">to win online.</span></>}
          subtitle="A full-spectrum studio combining design, engineering and growth — under one roof."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="hover-lift glass-card group relative h-full overflow-hidden rounded-2xl p-7">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition group-hover:opacity-50" style={{ background: "var(--gradient-gold)" }} />
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/40 bg-ink/60 text-gold shadow-gold">
                  <s.Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold opacity-80 transition group-hover:opacity-100">
                  Learn more <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
