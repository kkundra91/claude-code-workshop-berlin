import { howItWorks } from "../content";

export function HowItWorks() {
  return (
    <section id="how" className="px-6 py-24 border-b border-ink/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-14">
          {howItWorks.heading}
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {howItWorks.steps.map((step, i) => (
            <div key={i} className="border-t border-ink/15 pt-6">
              <span className="text-xs tracking-widest text-accent">{step.number}</span>
              <h3 className="mt-3 font-medium text-lg">{step.title}</h3>
              <p className="mt-2 text-ink/65 leading-relaxed">{step.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
