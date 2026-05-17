import Link from "next/link";

const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Parent Guide", href: "/parent-guide" },
  { label: "Pitch", href: "/pitch" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">TruePath AI</p>
          <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600">
            A public MVP demo for ethical student self-discovery. No real profile,
            scoring, AI analysis, or student data storage is active.
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-5 gap-y-2"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sky-500/30"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
