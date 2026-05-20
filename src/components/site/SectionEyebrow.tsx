export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-accent">
      <span className="h-px w-8 bg-accent" />
      {children}
    </span>
  );
}
