import { usp } from "../content";

export function Services() {
  return (
    <section className="px-6 py-20 border-b border-ink/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {usp.items.map((item, i) => (
            <div key={i} className="border-t border-ink/15 pt-6">
              <span className="text-xs tracking-widest text-accent">{item.number}</span>
              <h3 className="mt-3 font-medium text-base">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
