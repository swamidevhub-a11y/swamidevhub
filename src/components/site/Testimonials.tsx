import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { SectionTitle } from "./Reveal";

const items = [
  { name: "Riya Sharma", role: "Founder, Aurum Jewels", text: "Swami Dev Hub turned our vision into a flagship store. Conversions doubled within a month — and the design feels truly luxurious." },
  { name: "Daniel Carter", role: "CEO, NorthRail Studio", text: "Fast, transparent and deeply talented. Our portfolio site is now our strongest sales asset. Worth every rupee." },
  { name: "Aisha Khan", role: "Marketing Lead, Lumière", text: "From strategy to launch — they handled it all. The animations, the polish, the speed: world-class." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, []);
  const cur = items[i];
  return (
    <section className="section relative">
      <div className="container-luxe">
        <SectionTitle eyebrow="Client Stories" title={<>Loved by <span className="text-gold">founders.</span></>} center />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-3xl p-10 text-center shadow-luxe"
            >
              <div className="mx-auto flex w-fit items-center gap-1 text-gold">
                {Array.from({length:5}).map((_,k)=><Star key={k} size={16} fill="currentColor"/>)}
              </div>
              <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">"{cur.text}"</p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gold-gradient font-bold text-ink">
                  {cur.name.split(" ").map(n=>n[0]).join("")}
                </div>
                <div className="text-left">
                  <p className="font-semibold">{cur.name}</p>
                  <p className="text-xs text-muted-foreground">{cur.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${i===k?"w-10 bg-gold-gradient":"w-5 bg-border"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
