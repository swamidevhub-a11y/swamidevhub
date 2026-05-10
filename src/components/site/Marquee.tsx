const brands = ["Aurum", "Velvet&Co", "Maison", "NorthRail", "Lumière", "Atlas", "Orbital", "Kintsugi", "Praxis", "Heritage"];

export function Marquee() {
  return (
    <section className="relative border-y border-border/60 bg-ink/40 py-8">
      <div className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">Trusted by ambitious brands worldwide</div>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="font-display text-2xl tracking-wide text-muted-foreground/70 hover:text-gold transition">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
