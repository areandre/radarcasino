export function SectionHeader({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && <p className="text-sm font-black uppercase tracking-wide text-emerald-600">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {children && <div className="mt-4 text-base leading-7 text-slate-600">{children}</div>}
    </div>
  );
}
