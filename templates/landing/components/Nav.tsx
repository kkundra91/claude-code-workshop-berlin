import { business, nav } from "../content";

export function Nav() {
  return (
    <header className="border-b border-ink/10 bg-paper/90 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl font-light tracking-wide">
          {business.shortName}
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.links.map((l, i) => (
            <a key={i} href={l.href} className="text-ink/60 hover:text-ink transition">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={nav.ctaHref}
          className="px-4 py-2 bg-ink text-paper text-sm font-medium hover:opacity-80 transition"
        >
          {nav.ctaLabel}
        </a>
      </div>
    </header>
  );
}
