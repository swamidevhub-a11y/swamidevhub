import { Reveal, SectionTitle } from "./Reveal";

const stack = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Firebase", "Next.js", "Tailwind", "Stripe"];

export function TechStack() {
  return (
    <section className="section">
      <div className="container-luxe">
        <SectionTitle eyebrow="Technology" title={<>Built with the <span className="text-gold">finest tools.</span></>} center />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {stack.map((s, i) => (
            <Reveal key={s} delay={i * 0.03}>
              <span className="rounded-full border border-gold/30 bg-card/50 px-5 py-2 text-sm tracking-wide transition hover:border-gold hover:text-gold hover:shadow-gold">
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
