import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionTitle, Reveal } from "@/components/site/Reveal";
import { Phone, Mail, MapPin, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Swami Dev Hub" },
      { name: "description", content: "Get in touch with Swami Dev Hub. Free consultation within 24 hours. Phone, email and WhatsApp available." },
      { property: "og:title", content: "Contact Swami Dev Hub" },
      { property: "og:description", content: "Let's build something premium together." },
    ],
  }),
  component: Contact,
});

const services = ["Web Development", "E-commerce", "Landing Page", "Website Redesign", "Maintenance", "Other"];
const budgets = ["Under ₹25k", "₹25k – ₹75k", "₹75k – ₹2L", "₹2L+"];
const faqs = [
  ["How quickly do you respond?", "Within 24 hours on business days — usually faster."],
  ["Do you work with international clients?", "Yes. We've shipped work for clients across India, US, EU and UAE."],
  ["What information should I share first?", "Your goals, references you love, and rough timeline. We'll guide the rest."],
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number|null>(0);

  return (
    <SiteLayout>
      <section className="section">
        <div className="container-luxe">
          <SectionTitle eyebrow="Contact" title={<>Let's build something <span className="text-gold">extraordinary.</span></>}
            subtitle="Tell us about your project. We'll reply within 24 hours with a custom plan." center />

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false), 4000); }}
                className="glass-card grid gap-5 rounded-3xl p-8 shadow-luxe md:p-10"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Full Name"><input required className="field" placeholder="Your name"/></Field>
                  <Field label="Email"><input required type="email" className="field" placeholder="you@brand.com"/></Field>
                  <Field label="Phone Number"><input className="field" placeholder="+91"/></Field>
                  <Field label="Service Type">
                    <select className="field">{services.map(s=><option key={s}>{s}</option>)}</select>
                  </Field>
                  <Field label="Budget" className="md:col-span-2">
                    <select className="field">{budgets.map(s=><option key={s}>{s}</option>)}</select>
                  </Field>
                </div>
                <Field label="Message">
                  <textarea required rows={5} className="field resize-none" placeholder="Tell us about your project, timeline and goals..."/>
                </Field>
                <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-semibold text-ink shadow-gold transition hover:scale-[1.02]">
                  Send message
                </button>
                {sent && (
                  <div className="flex items-center gap-2 rounded-xl border border-gold/40 bg-ink/60 p-4 text-sm text-gold">
                    <CheckCircle2 size={16}/> Thanks! We'll get back to you within 24 hours.
                  </div>
                )}
              </form>
            </Reveal>

            <div className="space-y-5">
              <Reveal>
                <div className="glass-card rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-widest text-gold">Call us</p>
                  <a href="tel:8446079635" className="mt-2 flex items-center gap-3 text-lg"><Phone size={16} className="text-gold"/> 8446079635</a>
                  <a href="tel:8767980311" className="mt-1 flex items-center gap-3 text-lg"><Phone size={16} className="text-gold"/> 8767980311</a>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="glass-card rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-widest text-gold">Email us</p>
                  <a href="mailto:swamisamarthweb18@gmail.com" className="mt-2 flex items-center gap-3 text-base"><Mail size={16} className="text-gold"/> swamisamarthweb18@gmail.com</a>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="glass-card rounded-2xl p-6">
                  <p className="text-xs uppercase tracking-widest text-gold">Office</p>
                  <p className="mt-2 flex items-center gap-3 text-base"><MapPin size={16} className="text-gold"/> Maharashtra, India</p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps?q=Maharashtra%2C+India&output=embed"
                    className="h-56 w-full grayscale-[40%] contrast-110"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-3xl">
            <SectionTitle eyebrow="FAQ" title={<>Common <span className="text-gold">questions.</span></>} center />
            <div className="mt-8 space-y-3">
              {faqs.map(([q,a],i) => (
                <div key={q} className="rounded-2xl border border-border bg-card/40">
                  <button onClick={() => setOpen(open===i?null:i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="font-display text-lg">{q}</span>
                    <ChevronDown size={18} className={`text-gold transition ${open===i?"rotate-180":""}`}/>
                  </button>
                  {open===i && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .field { width: 100%; background: oklch(0.18 0.008 70 / 80%); border: 1px solid var(--border); border-radius: 12px; padding: 12px 16px; font-size: 14px; color: var(--foreground); outline: none; transition: border .25s, box-shadow .25s; }
        .field:focus { border-color: var(--gold); box-shadow: 0 0 0 4px oklch(0.78 0.14 82 / 15%); }
        .field::placeholder { color: var(--muted-foreground); }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
