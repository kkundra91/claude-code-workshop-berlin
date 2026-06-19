import { why } from "../content";

export function WhyItExists() {
  return (
    <section id="about" className="px-6 py-24 border-b border-ink/10">
      <div className="max-w-3xl mx-auto">
        <p className="font-serif text-4xl md:text-5xl font-light leading-tight">
          {why.line1}
        </p>
        <p className="font-serif text-4xl md:text-5xl font-light leading-tight text-ink/35 mt-2">
          {why.line2}
        </p>
        <div className="mt-12 space-y-5">
          {why.paragraphs.map((p, i) => (
            <p key={i} className="text-lg text-ink/65 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
