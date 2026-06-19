import { footerCta } from "../content";

export function Contact() {
  return (
    <section id="apply" className="px-6 py-24 border-b border-ink/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
          {footerCta.heading}
        </h2>
        <p className="text-ink/60 mb-8 max-w-lg mx-auto leading-relaxed">{footerCta.sub}</p>
        <a
          href="#apply"
          className="inline-block px-8 py-3 bg-accent text-paper text-sm tracking-wide hover:opacity-90 transition"
        >
          {footerCta.cta}
        </a>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-ink/40">
          {footerCta.meta.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
