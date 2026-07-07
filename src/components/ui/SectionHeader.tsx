interface SectionHeaderProps {
  index: string;
  title: string;
  center?: boolean;
}

export default function SectionHeader({ index, title, center }: SectionHeaderProps) {
  return (
    <div className={`mb-14 flex items-center gap-5 ${center ? 'justify-center' : ''}`}>
      <span className="font-mono text-xs tracking-[0.2em] text-accent">{index}</span>
      <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">{title}</h2>
      {!center && <div className="h-px flex-1 bg-navy-600/60" />}
    </div>
  );
}
