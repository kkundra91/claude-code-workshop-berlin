import { compatibility } from "../content";

export function FAQ() {
  return (
    <section id="compatibility" className="bg-muted px-6 py-24 border-b border-ink/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">
          {compatibility.heading}
        </h2>
        <p className="text-ink/60 mb-10">{compatibility.intro}</p>
        <ul className="space-y-4">
          {compatibility.items.map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-ink/75">
              <span className="w-5 h-px bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-ink/45 italic">{compatibility.footer}</p>
      </div>
    </section>
  );
}
