import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { SectionTitle, Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Swami Dev Hub" },
      { name: "description", content: "Web development, e-commerce, landing pages, redesigns, maintenance, and Google Business setup — all under one roof." },
      { property: "og:title", content: "Premium Web Services — Swami Dev Hub" },
      { property: "og:description", content: "Everything your brand needs to win online." },
    ],
  }),
  component: ServicesPage,
});

const faqs = [
  ["How long does a typical project take?", "Most marketing sites ship in 2–4 weeks. E-commerce builds typically range 4–8 weeks depending on scope."],
  ["Do you offer ongoing maintenance?", "Yes. We provide monthly retainer plans covering updates, monitoring and growth experiments."],
  ["Can you redesign my existing website?", "Absolutely. We audit your current site, plan a phased migration and ship without downtime."],
  ["What is your pricing model?", "We offer transparent fixed quotes per project, plus optional monthly retainers for ongoing work."],
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section">
      <div className="container-luxe max-w-3xl">
        <SectionTitle eyebrow="FAQ" title={<>Quick <span className="text-gold">answers.</span></>} center />
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a], i) => (
            <div key={q} className="rounded-2xl border border-border bg-card/40">
              <button onClick={() => setOpen(open===i?null:i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-display text-lg">{q}</span>
                <ChevronDown size={18} className={`text-gold transition ${open===i?"rotate-180":""}`} />
              </button>
              {open===i && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="section pb-0">
        <div className="container-luxe">
          <SectionTitle eyebrow="Services" title={<>Studio-grade services, <span className="text-gold">delivered.</span></>}
            subtitle="From a single landing page to a complete digital ecosystem — we tailor every engagement to your goals." center />
        </div>
      </section>
      <Services />
      <Process />
      <FAQ />
      <CTA />
    </SiteLayout>
  );
}
