import { hero } from "../content";

export function Hero() {
  return (
    <section id="top" className="px-6 py-24 md:py-36 border-b border-ink/10">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-accent">
          {hero.eyebrow}
        </p>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl font-light leading-tight max-w-3xl">
          {hero.heading}
        </h1>
        <p className="mt-8 text-lg text-ink/65 max-w-2xl leading-relaxed">
          {hero.subheading}
        </p>
        <p className="mt-6 text-base text-ink/55 max-w-xl">
          {hero.line}
        </p>
        <p className="mt-2 text-base italic text-ink/55">
          {hero.italicLine}
        </p>
        <div className="mt-10">
          <a
            href={hero.ctaPrimary.href}
            className="inline-block px-8 py-3 bg-accent text-paper text-sm tracking-wide hover:opacity-90 transition"
          >
            {hero.ctaPrimary.label}
          </a>
          <div className="mt-5 flex flex-col sm:flex-row gap-1 sm:gap-4 text-sm text-ink/40">
            {hero.meta.map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
