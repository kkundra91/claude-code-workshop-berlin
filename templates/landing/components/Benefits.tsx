import { whoFor } from "../content";

export function Benefits() {
  return (
    <section className="bg-muted px-6 py-24 border-b border-ink/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-10">
          {whoFor.heading}
        </h2>
        <ul className="space-y-5">
          {whoFor.items.map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-lg text-ink/75">
              <span className="w-6 h-px bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
