import { Reveal, SectionTitle } from "./Reveal";

const steps = [
  ["01", "Discovery", "Deep dive into your brand, audience and goals."],
  ["02", "Planning", "Sitemap, content strategy, and tech architecture."],
  ["03", "UI / UX Design", "Pixel-perfect interfaces with luxury polish."],
  ["04", "Development", "Clean, scalable code engineered for speed."],
  ["05", "Testing", "Cross-device QA, performance and accessibility."],
  ["06", "Launch", "Smooth deployment with zero downtime."],
  ["07", "Support", "Ongoing optimization, updates and growth."],
];

export function Process() {
  return (
    <section className="section">
      <div className="container-luxe">
        <SectionTitle eyebrow="Our Process" title={<>A studio rhythm <span className="text-gold">refined over years.</span></>} />
        <div className="relative mt-14">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent md:block" />
          <div className="space-y-6">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.05}>
                <div className="flex gap-6 rounded-2xl border border-border bg-card/40 p-6 transition hover:border-gold/60">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold-gradient font-display text-ink shadow-gold">{n}</div>
                  <div>
                    <h3 className="font-display text-2xl">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
