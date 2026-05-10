import { Link } from "@tanstack/react-router";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Instagram = (p: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>);
const Facebook = (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2-2h2V2.2c-.4 0-1.6-.2-3-.2-3 0-5 1.8-5 5v3H6v4h3v8h4z"/></svg>);
const Linkedin = (p: any) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.59 0h4.37v1.91h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.21c0-1.48-.03-3.39-2.07-3.39-2.07 0-2.39 1.62-2.39 3.29V22H7.81V8z"/></svg>);

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60 bg-ink/60">
      <div className="divider-gold" />
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-gold-gradient text-ink font-bold">S</span>
            <span className="font-display text-lg">Swami <span className="text-gold">Dev Hub</span></span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Premium freelancing web development & digital solutions crafted for ambitious brands.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Instagram, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: MessageCircle, href: "https://wa.me/918446079635" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-gold hover:text-gold">
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[["/about","About"],["/services","Services"],["/portfolio","Portfolio"],["/blog","Blog"],["/contact","Contact"]].map(([to,l]) => (
              <li key={to}><Link to={to} className="hover:text-gold transition">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["Web Development","E-commerce","Landing Pages","Website Redesign","Maintenance","Domain & Hosting"].map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-gold">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold"/> 8446079635</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold"/> 8767980311</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold"/> swamisamarthweb18@gmail.com</li>
          </ul>
          <form className="mt-5 flex overflow-hidden rounded-full border border-border bg-card/60">
            <input placeholder="Your email" className="flex-1 bg-transparent px-4 py-2 text-sm outline-none placeholder:text-muted-foreground"/>
            <button className="bg-gold-gradient px-4 text-xs font-semibold text-ink">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container-luxe flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Swami Dev Hub. All rights reserved.</p>
          <p>Crafted with precision and gold.</p>
        </div>
      </div>
    </footer>
  );
}
