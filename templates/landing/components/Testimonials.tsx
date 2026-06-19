import { report } from "../content";

export function Testimonials() {
  return (
    <section className="px-6 py-24 border-b border-ink/10">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-accent mb-5">
          Personal Relationship Report
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">
          {report.subheading}
        </h2>
        <p className="text-ink/60 mb-8 max-w-xl">{report.intro}</p>
        <ul className="space-y-4 mb-10">
          {report.items.map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-ink/75">
              <span className="w-5 h-px bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-ink/45 italic mb-10">{report.footer}</p>
        <div className="flex flex-wrap gap-2">
          {report.types.map((type, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-ink/20 text-sm text-ink/55"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
