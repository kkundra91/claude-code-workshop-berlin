import { manifesto } from "../content";

export function Manifesto() {
  return (
    <section className="bg-ink text-paper px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed">
          {manifesto.body}
        </p>
        <p className="mt-10 text-xs uppercase tracking-widest text-paper/35">
          {manifesto.attribution}
        </p>
      </div>
    </section>
  );
}
