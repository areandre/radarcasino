type CasinoLogoProps = {
  text: string;
  name: string;
};

export function CasinoLogo({ text, name }: CasinoLogoProps) {
  return (
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-slate-950 to-slate-700 text-lg font-black text-white shadow-soft" aria-label={`${name} logo placeholder`}>
      {text}
    </div>
  );
}
