import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Swami Dev Hub" },
      { name: "description", content: "We are a freelancing studio crafting premium digital experiences for ambitious brands worldwide." },
      { property: "og:title", content: "About Swami Dev Hub" },
      { property: "og:description", content: "Meet the studio behind luxury, high-converting websites." },
    ],
  }),
  component: About,
});

const values = [
  ["Craftsmanship", "Every pixel, every line of code — handled with care."],
  ["Transparency", "Clear timelines, honest pricing, real conversations."],
  ["Performance", "We obsess over speed, accessibility and SEO."],
  ["Partnership", "We build long-term relationships, not transactions."],
];

const journey = [
  ["2020", "Founded as a solo freelance practice."],
  ["2022", "Expanded into e-commerce and brand strategy."],
  ["2024", "Crossed 50+ delivered projects across 4 continents."],
  ["2026", "Launched Swami Dev Hub as a full digital studio."],
];

function About() {
  return (
    <SiteLayout>
      <section className="section">
        <div className="container-luxe grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle eyebrow="About Us" title={<>A studio built on <span className="text-gold">craft & trust.</span></>}
              subtitle="Swami Dev Hub is a boutique freelancing studio specializing in premium web development. We blend strategy, design and engineering to ship work that moves the needle." />
          </div>
          <Reveal>
            <div className="glass-card relative aspect-[4/3] overflow-hidden rounded-3xl p-2 shadow-luxe">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-gold/30 via-card to-ink p-8">
                <p className="font-display text-3xl">Our mission</p>
                <p className="mt-3 text-muted-foreground">To make world-class web design accessible to every ambitious brand — from boutique startups to established enterprises.</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-gold/30 p-4">
                    <p className="text-xs uppercase tracking-widest text-gold">Vision</p>
                    <p className="mt-2 text-sm">Be the most trusted web studio in our region.</p>
                  </div>
                  <div className="rounded-xl border border-gold/30 p-4">
                    <p className="text-xs uppercase tracking-widest text-gold">Promise</p>
                    <p className="mt-2 text-sm">Premium quality. Honest pricing. On time.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <SectionTitle eyebrow="Our Values" title={<>What we <span className="text-gold">stand for.</span></>} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map(([t, d], i) => (
              <Reveal key={t} delay={i*0.05}>
                <div className="hover-lift glass-card h-full rounded-2xl p-6">
                  <div className="font-display text-3xl text-gold">0{i+1}</div>
                  <h3 className="mt-3 font-display text-xl">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <SectionTitle eyebrow="Our Journey" title={<>Milestones <span className="text-gold">on the path.</span></>} />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {journey.map(([y, d], i) => (
              <Reveal key={y} delay={i*0.05}>
                <div className="rounded-2xl border border-border bg-card/40 p-6">
                  <p className="font-display text-4xl text-gold">{y}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
